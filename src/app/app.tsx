import '@ryersonlibrary/web-components';
import { Component, Element, Host, Listen, Prop, State, h } from '@stencil/core';
import '@stencil/router';
// tslint:disable-next-line:no-duplicate-imports
import { RouterHistory, injectHistory } from '@stencil/router';
import { UAParser } from 'ua-parser-js';

import { BASE_URL } from '../global/config';
import {
  APP_TITLE,
  MAP_TYPE,
  ROUTES,
} from '../global/constants';
import {
  Building,
  Faq,
  MapElement,
  SearchResultItem,
} from '../interface';
import { dataStore } from '../utils/app-data';
import { Search } from '../utils/search';

@Component({
  tag: 'rl-bis',
  styleUrl: 'app.scss',
})

export class RLApp {
  /**
   * Flag indicating if the application is currently on a mobile device.
   */
  private isMobile = false;

  /**
   * Object containing all the pages used for the nav menu of the App.
   */
  private appRoutes = [
    {
      urls: [
        `${BASE_URL}${ROUTES.MAP}/:mapType?/:id?/:ref?`,
        `${BASE_URL}${ROUTES.MAP}`,
      ],
      component: 'view-map',
    },
    {
      urls: [
        `${BASE_URL}${ROUTES.BUILDINGS}/:bldName`,
        `${BASE_URL}${ROUTES.BUILDINGS}`,
      ],
      component: 'view-building',
    },
    {
      urls: [
        `${BASE_URL}${ROUTES.EVENTS}/`,
        `${BASE_URL}${ROUTES.EVENTS}`,
      ],
      component: 'view-event',
    },
    {
      urls: [
        `${BASE_URL}${ROUTES.FAQ}/:faqId?`,
        `${BASE_URL}${ROUTES.FAQS}`,
      ],
      component: 'view-faq',
    },
    {
      // Do not allow URLs with just the base search path (no query).
      urls: [
        `${BASE_URL}${ROUTES.SEARCH}/:query?`,
      ],
      component: 'view-search',
    },
    {
      urls: [`${BASE_URL}${ROUTES.HOME}`],
      component: 'view-home',
      exact: true,
      props: {},
    },
  ];

  /**
   * The links that are displayed in the navigation drawer.
   */
  private appLinks = [
    { title: 'Home', url: ROUTES.HOME, icon: 'home', exact: true },
    { title: 'Directory', url: `${ROUTES.MAP}/${MAP_TYPE.LOCN}`, icon: 'map' },
    { title: 'Books', url: `${ROUTES.MAP}/${MAP_TYPE.BOOK}`, icon: 'import_contacts' },
    { title: 'Computers', url: `${ROUTES.MAP}/${MAP_TYPE.COMP}`, icon: 'computer' },
    { title: 'Buildings', url: ROUTES.BUILDINGS, icon: 'business' },
    { title: 'Events', url: ROUTES.EVENTS, icon: 'event' },
    { title: 'FAQs', url: ROUTES.FAQS, icon: 'question_answer' },
  ];

  /**
   * Text search object.
   */
  private _docSearch = new Search();

  /**
   * Map elements
   */
  private _mapElements: MapElement[] = [];

  /**
   * Reference to the search box.
   */
  private _searchBoxEl?: HTMLRlSearchBoxElement;

  /**
   * Root element of this component.
   */
  @Element() root?: HTMLRlBisElement;

  /**
   * The current text in the serach box.
   */
  @State() searchQuery = '';

  /**
   * The height of the search results box.
   */
  // @State() resultHeight = 0;

  /**
   * List of search results.
   */
  @State() searchResults: SearchResultItem[] = [];

  /**
   * Keep track of the app width in order to change the interface.
   *
   * @todo Does this really need to be an app state?  Is it expected to change
   * during app use?  Only real case may be changing device from portrait to
   * landscape.
   */
  @State() appWidth = window.innerWidth;

  /**
   * Flag indicating if the side drawer is open.
   */
  @State() drawerOpen!: boolean;

  /**
   * The number of columns in a cluster object.  This is recalculated depending
   * on the size (width) of the screen.
   */
  @State() clusterColumns = 2;

  /**
   * Reference to the history object created by Stencil.  Used for making app
   * navigations programmatically.
   */
  @Prop() history?: RouterHistory;

  /**
   * Lifecycle event fired after the component has rendered the first time.
   */
  componentWillLoad() {
    const dev = new UAParser().getDevice();
    this.isMobile = dev.type !== undefined && dev.type === 'mobile';

    dataStore.getData('faqs').then(faqs => {
      faqs.forEach((f: Faq) => {
        this._docSearch.addDocument(`qa-${f.id}`, 'question_answer', f.question);
      });
    }).catch(e => { console.error('Error loading FAQs ' + e); });

    dataStore.getData('buildings').then(buildings => {
      buildings.forEach((b: Building, index) => {
        this._docSearch.addDocument(`b-${index}`, 'business', `[${b.code}] ${b.name}`);
      });
    }).catch(e => { console.error('Error loading buildings ' + e); });

    dataStore.getData('details').then(elements => {
      this._mapElements = elements;
      elements.forEach((e: MapElement, index) => {
        this._docSearch.addDocument(`d-${index}`, 'location_on', `[${e.code}] ${e.name}`, e.description ? e.description : '');
      });
    }).catch(e => { console.error('Error loading MapElements ' + e); });

    this._updateClusterColumns();
  }

  /**
   * Listen for and handle global `resize` events on the window.
   */
  @Listen('resize', { target: 'window' })
  handleResize() {
    this._updateClusterColumns();
  }

  /**
   * Update the number of cluster columns depending on the window width.
   */
  _updateClusterColumns() {
    const width = window.innerWidth - 128;
    this.clusterColumns =
      this.isMobile ? 2 :
        700 > width ? 3 :
          928 > width ? 4 :
            1160 > width ? 5 :
              1392 > width ? 6 :
                1624 > width ? 7 : 8;
  }

  /**
   * Handle when the input value changes by updating the search results.
   * @param e The input change event
   */
  _onSearchChange(e: Event) {
    const t = e.target;

    if (t !== null && t instanceof HTMLInputElement) {
      this.searchQuery = t.value;
      this.searchResults = this._docSearch.search(this.searchQuery, 6);
    }
  }

  @Listen('hashchange', { target: 'window' })
  async handleHashChanged() {
    if (this._searchBoxEl) {
      await this._searchBoxEl.clearInput();
    }
  }

  /**
   * Listen for a `searchLocationClicked` event from the search bar. This occurs
   * when the user selects one of the locations from the search box.  The event
   * `detail` will contain a reference to the selected item.
   *
   * @param e The triggering event
   */
  async _onSearchLocationClicked(resultId) {
    const loc = this._mapElements[resultId];

    if (this.history !== undefined) {
      this.history.push(`${BASE_URL}${ROUTES.MAP}/${MAP_TYPE.LOCN}/${loc.code}`);
    }
  }

  /**
   * Listen for a `resultSelected` event from the search bar. This occurs when
   * the user selects one of the results from the search box.  The event
   * `detail` will contain a reference to the selected item.
   *
   * @param e The triggering event
   */
  async _onSearchFaqClicked(resultId) {
    if (this.history !== undefined) {
      this.history.push(`${BASE_URL}${ROUTES.FAQ}/${resultId}`);
    }
  }

  /**
   * Handle when one of the search suggestions is clicked.
   * @param e The triggering event
   */
  @Listen('suggestionClicked')
  async onSuggestionClicked(e: CustomEvent) {
    const resultID = e.detail.id as string;
    const [type, id] = resultID.split('-');

    switch (type) {
      case 'd':
        await this._onSearchLocationClicked(Number(id));
        break;
      case 'f':
        await this._onSearchFaqClicked(Number(id));
        break;
      default:
    }

    this.searchQuery = '';
    this.searchResults = [];
  }

  /**
   * Component render function.
   */
  render() {
    const { appLinks, appRoutes } = this;

    // if (loaded) {
    return (
      <Host class={{ 'rl-bis': true }}>
        <rl-app-bar
          type="fixed"
          onMenuClicked={_ => { this.drawerOpen = true; }}
          singleSection={this.isMobile}
        >
          {this.isMobile ? undefined : (<div slot="title">{APP_TITLE}</div>)}
          <rl-search-box
            ref={el => { this._searchBoxEl = el; }}
            slot="centerSection"
            showMenu={this.isMobile}
            placeholder={this.isMobile ? APP_TITLE : undefined}
            // resultHeight={this.resultHeight}
            onIconClick={() => { this.drawerOpen = true; }}
            searchValue={this.searchQuery}
            docSearch={this._docSearch}
          >
          </rl-search-box>
        </rl-app-bar>

        <rl-drawer
          open={this.drawerOpen}
          onDrawerClose={_ => { this.drawerOpen = false; }}>
          <header class="rl-drawer__header">
            <div class="rl-drawer__header-content">
              <button class="material-icons mdc-top-app-bar__navigation-icon"
                aria-label="Close navigation menu.">close</button>
              <span class="mdc-top-app-bar__title">{APP_TITLE}</span>
            </div>
          </header>
          <nav id="icon-with-text-demo" class="mdc-drawer__content mdc-list">
            {appLinks.map(link =>
              <stencil-route-link activeClass="mdc-list-item--activated"
                anchorClass="mdc-list-item" anchorTabIndex="0"
                url={`${BASE_URL}${link.url}`} exact={link.exact}>
                <i class="material-icons mdc-list-item__graphic" aria-hidden="true">
                  {link.icon}
                </i>
                {link.title}
              </stencil-route-link>
            )}
          </nav>
        </rl-drawer>

        <main id="main" class="rl-main-content">
          <stencil-router id="router" titleSuffix={APP_TITLE}>
            <stencil-route-switch>
              {appRoutes.map(route =>
                <stencil-route component={route.component}
                  url={route.urls}
                  componentProps={{
                    appLoaded: true,
                    isMobile: this.isMobile,
                    clusterColumns: this.clusterColumns,
                  }}
                >
                </stencil-route>
              )}
              <stencil-route routeRender={() => ([
                <span>Undefined route</span>,
                <stencil-router-redirect url={`${BASE_URL}${ROUTES.HOME}`} />,
              ])}>
              </stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}

// Connect the component with Stencil History object.
injectHistory(RLApp);
