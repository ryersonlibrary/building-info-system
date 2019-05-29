import {
  Component,
  Element,
  Event,
  EventEmitter,
  Method,
  Prop,
  State,
} from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';
import { MatchResults, RouterHistory } from '@stencil/router';

import { BASE_URL } from '../../global/config';
import {
  APP_DATA,
  MAP_TYPE,
  ROUTES,
} from '../../global/constants';
import {
  BookDetails,
  Building,
  BuildingMap,
  ComputerAvailability,
  ComputerLab,
  ComputerLabMap,
  Floor,
  FloorMap,
  MapElementData,
  MapElementDataMap,
  MapElementDetail,
  MapElementDetailMap,
} from '../../interface';
import { dataService } from '../../utils/data-service';
import { fetchIMG } from '../../utils/fetch';
import { compareLCCN } from '../../utils/lccn';
import { loadData } from '../../utils/load-data';

@Component({
  tag: 'view-map',
  styleUrl: 'view-map.scss',
})

export class ViewMap {
  private _blds!: BuildingMap;
  private _flrs!: FloorMap;
  private _elms!: MapElementDataMap;
  private _dtls!: MapElementDetailMap;
  private _book!: BookDetails;
  private _compLabs!: ComputerLabMap;

  /**
   * Any URL matches for determining pre-selected building, floor and element.
   */
  private paramMatches: RegExpExecArray | null | undefined;

  private initialBuilding = -1;

  private initialFloor = -1;

  private initialElement?: number;

  private _mapContainer!: HTMLRlMapContainerElement;

  /**
   * Root element of this component.
   */
  @Element() root!: HTMLStencilElement;

  @State() loaded = false;

  /**
   * A string matched from the URL that should be used to pre-select a specific
   * building, building and floor, or building, floor and element.
   */
  @State() query = '';

  @State() buildings?: BuildingMap;

  @State() extraDetails: {} = {};

  /**
   * A global flag passed in to indicate if the application has loaded as well.
   */
  @Prop() appLoaded = false;

  @Prop() mapType: MAP_TYPE = MAP_TYPE.DIRECTORY;

  /**
   * The results coming from `stencil-router` that contain any URL matches.
   */
  @Prop() match!: MatchResults;

  /**
   * Event fired when the data specific to this view is finished loading.
   */
  @Event() dataLoaded!: EventEmitter;

  /**
   * Reference to the stencil-router history object. Used to programmatically
   * change the browser history when the selected FAQ changes.
   */
  @Prop() history!: RouterHistory;

  @Prop({ context: 'queue' }) queue!: QueueApi;

  async componentWillLoad() {
    // Check the URL value to see if any Building, Floor and or Location was
    // provided.  Must be in the form BLD[FLR][RM].
    // Where BLD is the three letter building code, FLR is the floor number,
    // and RM is the 'room number'.  The `room number` is actually the full
    // location code (e.g. SLC508)
    if (this.match && this.match.params) {
      if (this.match.params.roomNo || this.match.params.labNo) {
        const query = this.match.params.roomNo || this.match.params.labNo;
        const re = /([A-Z]{3})(\d{2}(?=\d{2,}|$|\D*$)|\d{1})?.*/;
        this.paramMatches = re.exec(query);
        if (this.paramMatches) {
          this.history.replace({
            pathname: `${BASE_URL}${this.mapType === MAP_TYPE.COMPUTERS ? ROUTES.COMPUTERS : ROUTES.DIRECTORY}/${this.paramMatches[0]}`,
            state: { code: this.paramMatches[0] },
            query: {},
            key: '',
          });
        }
      } else {
        this.paramMatches = undefined;
      }

      if (this.match.params.callNo) {
        const query = this.match.params.callNo;
        if (query.charAt(0) === 'b') {
          // Have a book record number.
          await loadData('books/' + query).then(
            (b: BookDetails) => {
              this._book = this.extraDetails = b;
          });
        } else {
          // Invalid record number.
        }
      }
    }

    // Load buildings.
    this._blds = dataService.getData(APP_DATA.BUILDING);

    // Load floor data.
    this._flrs = dataService.getData(APP_DATA.FLOORS);

    // Load map elements.
    this._elms = dataService.getData(APP_DATA.ELEMENTS);

    // Load map details.
    this._dtls = dataService.getData(APP_DATA.DETAILS);

    let compLabs: ComputerLab[] = [];
    compLabs = dataService.getData(APP_DATA.COMPUTERS);

    Object.values(this._blds).forEach((b: Building) => {
      b.enabled = (this.mapType === MAP_TYPE.DIRECTORY ||
          b.code === 'LIB') ?
          true : false;
      b.floors = Object.values(this._flrs || {}).reduce((ob: FloorMap, f: Floor) => {
        if (f.buildingId === b.id) ob[f.id] = f;
        return ob;
      }, {} as Floor);

      // Set the initial building to the first or the one specified in the URL.
      if (b.enabled && (this.initialBuilding === -1) ||
          (this.paramMatches && this.paramMatches[1] && b.code === this.paramMatches[1])) {
        this.initialBuilding = b.id;
      }
    });

    Object.values(this._flrs).forEach((f: Floor) => {
      f.elements = Object.values(this._elms || {}).reduce((ob, e) => {
        if (e.floorId === f.id) ob[e.id] = e;
        return ob;
      }, {} as MapElementData);

      f.enabled = (this.mapType === MAP_TYPE.DIRECTORY ||
          (this.mapType === MAP_TYPE.BOOKS && this._book && this._book.locations.indexOf(f.name) !== -1)) ||
          (this.mapType === MAP_TYPE.COMPUTERS && this.floorHasComps(f, compLabs)) ?
          true : false;

      // Set the initial floor to the specified floor, or first floor of the
      // initial building.
      if (f.enabled && f.buildingId === this.initialBuilding && (this.initialFloor === -1 ||
          this.paramMatches && this.paramMatches[2] && f.number === Number(this.paramMatches[2]))) {
        this.initialFloor = f.id;
      }
    });

    // Load floorplan images, starting with the image for the initial floor.
    fetchIMG(this._flrs[this.initialFloor].floorplan);

    Object.values(this._flrs).forEach((f: Floor) => {
      if (f.floorplan && f.id !== this.initialFloor) {
        fetchIMG(f.floorplan);
      }
    });

    Object.values(this._elms).forEach((e: MapElementData) => {
      e.details = Object.values(this._dtls || {}).reduce((ob, d: MapElementDetail) => {
        if (this.paramMatches && d.code === this.paramMatches[0] &&
            (this.mapType === MAP_TYPE.DIRECTORY || this.mapType === MAP_TYPE.COMPUTERS) &&
            !this.initialElement) {
          this.initialElement = d.elementId;
        }
        if (d.elementId === e.id) ob[d.id] = d;
        return ob;
      }, {} as MapElementDetail);

      e.enabled = ((this.mapType === MAP_TYPE.DIRECTORY && e.category !== 5) ||
          (this.mapType === MAP_TYPE.BOOKS && this._book &&
          this.bookOnShelf(this._book.callNo, e)) ||
          (this.mapType === MAP_TYPE.COMPUTERS && (this.elementHasComps(e, compLabs) || e.category === 5))) ?
          true : false;

      if (e.enabled && this.mapType === MAP_TYPE.BOOKS && !this.initialElement) {
        this.initialElement = e.id;
      }

      if (e.icon && typeof e.icon === 'string') {
        fetchIMG(e.icon);
      }
    });

    if (this.mapType === MAP_TYPE.COMPUTERS && compLabs.length > 0) {
      this._compLabs = {};
      compLabs.forEach((l: ComputerLab) => {
        Object.values(this._dtls).forEach((d: MapElementDetail) => {
          if (d.code === l.locName) {
            this._compLabs[d.elementId] = l;
            this.extraDetails[d.code] = { available: l.compAvail, total: l.compTotal };
            const comps = l.comps;
            comps.forEach((c: ComputerAvailability) => {
              Object.values(this._elms).forEach((e: MapElementData) => {
                if (e.name === c.name) {
                  e.available = c.avail;
                  e.clickable = false;
                }
              });
            });
          }
        });
      });
    }

    this.loaded = true;
    this.buildings = this._blds;
  }

  componentDidLoad() {
    this.checkSize();
  }

  checkSize() {
    if (this.root.offsetHeight === 0) {
      this.queue.write(() => {
        this.checkSize();
      });
    } else {
      this.loaded = true;
    }
  }

  @Method()
  setActiveElement(id: number) {
    this._mapContainer.setActiveElement(this._elms[id]);
  }

  @Method()
  setActiveDetail(id: number) {
    const state = this.history.location.state;
    const code = this._dtls[id].code;
    if (state === undefined ||
        state && state.code === undefined ||
        state && state.code && code !== state.code) {
      this.history.push({
        pathname: `/${this.mapType === MAP_TYPE.COMPUTERS ? ROUTES.COMPUTERS : ROUTES.DIRECTORY}/${code}`,
        state: { code },
        query: {},
        key: '',
      });
    }

    this._mapContainer.setActiveElement(this._elms[this._dtls[id].elementId]);
  }

  floorHasComps(floor: Floor, comps: ComputerLab[]) {
    let hasComps = false;

    for (const comp of comps) {
      if (comp.locName.indexOf(this._blds[floor.buildingId].code) === -1) {
        hasComps = false;
        break;
      }

      if (Number(comp.locName.charAt(3)) === floor.number) {
        hasComps = true;
        break;
      }
    }

    return hasComps;
  }

  elementHasComps(el: MapElementData, comps: ComputerLab[]) {
    let hasComps = false;

    if (el.category === 4) {
      comps.forEach((comp: ComputerLab) => {
        Object.values(el.details).forEach((d: MapElementDetail) => {
          if (comp.locName === d.code) {
            hasComps = true;
          }
        });
      });
    }

    return hasComps;
  }

  bookOnShelf(callNo: string, shelf: MapElementData) {
    let found = false;
    if (shelf.details) {
      Object.values(shelf.details).forEach((d: MapElementDetail) => {
        const startCompare = compareLCCN(d.callStart, callNo);
        const endCompare = compareLCCN(callNo, d.callEnd);
        if (startCompare && startCompare >= 0 && endCompare && endCompare >= 0) {
          found = true;
        }
      });
    }

    return found;
  }

  hostData() {
    return {
      class: {
        'rl-view': true,
        'rl-view--map': true,
        'rl-view--loaded': this.loaded && this.appLoaded,
      },
    };
  }

  render() {
    if (this.loaded && this.buildings) {
      return ([
        <stencil-route-title pageTitle="Directory" />,
        <rl-map-container
          ref={el => this._mapContainer = el as HTMLRlMapContainerElement}
          buildings={this.buildings}
          initialBuilding={this.initialBuilding}
          initialFloor={this.initialFloor}
          initialElement={this.initialElement}
          extraDetails={this.extraDetails}>
        </rl-map-container>,
      ]);
    }

    return (<div>Loading...</div>);
  }
}
