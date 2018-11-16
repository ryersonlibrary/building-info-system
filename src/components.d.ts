/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import '@rula/web-components';
import {
  AppData,
  BookDetails,
  MapElement,
  MapElementDetailMap,
} from './interface';
import {
  Building,
  BuildingMap,
  Floor,
  FloorMap,
} from './interface.js';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface RulaBis {
    /**
    * A URL used to access when loading data.
    */
    'apiUrl'?: string;
    /**
    * The displayed title of the application.
    */
    'appTitle': string;
    'baseUrl': string;
    /**
    * A URL used to load ICAL event information.
    */
    'icalUrl': string;
    'searchUrl'?: string;
  }
  interface RulaBisAttributes extends StencilHTMLAttributes {
    /**
    * A URL used to access when loading data.
    */
    'apiUrl'?: string;
    /**
    * The displayed title of the application.
    */
    'appTitle'?: string;
    'baseUrl'?: string;
    /**
    * A URL used to load ICAL event information.
    */
    'icalUrl'?: string;
    'searchUrl'?: string;
  }

  interface RulaAppBar {
    'appTitle': string;
    /**
    * The current width of the application.  Used to determine what kind of interface should be displayed (reduced or full-width layout).
    */
    'appWidth': number;
    'searchData': MapElementDetailMap;
  }
  interface RulaAppBarAttributes extends StencilHTMLAttributes {
    'appTitle'?: string;
    /**
    * The current width of the application.  Used to determine what kind of interface should be displayed (reduced or full-width layout).
    */
    'appWidth'?: number;
    /**
    * Event fired when the menu button on the app bar is clicked.
    */
    'onMenuClicked'?: (event: CustomEvent) => void;
    'searchData'?: MapElementDetailMap;
  }

  interface RulaCard {
    'buttons'?: Array<{name: string}>;
    'cardData': { [keys: string]: string[] } | string;
    'cardMedia': string;
    'cardTitle': string;
    'hasPrimaryAction': boolean;
    'icons'?: Array<{name: string}>;
    'noContent': boolean;
    'protectionColor': any;
    'titleInMedia': boolean;
    'wideMediaAspect': boolean;
  }
  interface RulaCardAttributes extends StencilHTMLAttributes {
    'buttons'?: Array<{name: string}>;
    'cardData'?: { [keys: string]: string[] } | string;
    'cardMedia'?: string;
    'cardTitle'?: string;
    'hasPrimaryAction'?: boolean;
    'icons'?: Array<{name: string}>;
    'noContent'?: boolean;
    'onCardClicked'?: (event: CustomEvent) => void;
    'protectionColor'?: any;
    'titleInMedia'?: boolean;
    'wideMediaAspect'?: boolean;
  }

  interface RulaCollection {
    'collectionTitle': string;
  }
  interface RulaCollectionAttributes extends StencilHTMLAttributes {
    'collectionTitle'?: string;
  }

  interface RulaDetailPanel {
    'activeElement'?: MapElement;
    /**
    * Hide the DetailPanel.
    */
    'hidePanel': () => void;
    /**
    * Show the DetailPanel.
    */
    'showPanel': () => void;
  }
  interface RulaDetailPanelAttributes extends StencilHTMLAttributes {
    'activeElement'?: MapElement;
    'onDetailPanelClose'?: (event: CustomEvent) => void;
  }

  interface RulaDrawer {
    /**
    * Flag indicating if the drawer is open.
    */
    'open': boolean;
  }
  interface RulaDrawerAttributes extends StencilHTMLAttributes {
    /**
    * An event emitted when this drawer closes.
    */
    'onDrawerClose'?: (event: CustomEvent) => void;
    /**
    * Flag indicating if the drawer is open.
    */
    'open'?: boolean;
  }

  interface RulaExpandableCard {}
  interface RulaExpandableCardAttributes extends StencilHTMLAttributes {}

  interface RulaGraphicDevice {}
  interface RulaGraphicDeviceAttributes extends StencilHTMLAttributes {}

  interface RulaMapNav {
    /**
    * The currently active Building.
    */
    'activeBuilding': Building;
    /**
    * The currently active Floor.
    */
    'activeFloor': Floor;
    /**
    * A list of all the Floors of the currenly active Building
    */
    'activeFloors': FloorMap;
    /**
    * A list of all the buildings.
    */
    'allBuildings': BuildingMap;
  }
  interface RulaMapNavAttributes extends StencilHTMLAttributes {
    /**
    * The currently active Building.
    */
    'activeBuilding'?: Building;
    /**
    * The currently active Floor.
    */
    'activeFloor'?: Floor;
    /**
    * A list of all the Floors of the currenly active Building
    */
    'activeFloors'?: FloorMap;
    /**
    * A list of all the buildings.
    */
    'allBuildings'?: BuildingMap;
    /**
    * An event emitted when the selected Building changes.
    */
    'onMapNavBuildingChanged'?: (event: CustomEvent) => void;
    /**
    * An event emitted when the selected Floor changes.
    */
    'onMapNavFloorChanged'?: (event: CustomEvent) => void;
  }

  interface RulaSearchBox {
    'id': string;
    'searchData': MapElementDetailMap;
    'showMenu': boolean;
  }
  interface RulaSearchBoxAttributes extends StencilHTMLAttributes {
    'id'?: string;
    'onIconClick'?: (event: CustomEvent) => void;
    'onResultSelected'?: (event: CustomEvent) => void;
    'searchData'?: MapElementDetailMap;
    'showMenu'?: boolean;
  }

  interface ViewBook {
    'appData': AppData;
    'history': RouterHistory;
  }
  interface ViewBookAttributes extends StencilHTMLAttributes {
    'appData'?: AppData;
    'history'?: RouterHistory;
  }

  interface ViewBuilding {
    'appData': AppData;
  }
  interface ViewBuildingAttributes extends StencilHTMLAttributes {
    'appData'?: AppData;
  }

  interface ViewEvent {
    'appData': AppData;
  }
  interface ViewEventAttributes extends StencilHTMLAttributes {
    'appData'?: AppData;
  }

  interface ViewFaq {
    /**
    * The global application data object.  Passed in by the main app and has relevant data added to it by this view.
    */
    'appData': AppData;
  }
  interface ViewFaqAttributes extends StencilHTMLAttributes {
    /**
    * The global application data object.  Passed in by the main app and has relevant data added to it by this view.
    */
    'appData'?: AppData;
  }

  interface ViewHome {
    'appData': AppData;
  }
  interface ViewHomeAttributes extends StencilHTMLAttributes {
    'appData'?: AppData;
    'onHomeLoaded'?: (event: CustomEvent) => void;
  }

  interface ViewMap {
    'appData': AppData;
    'bookDetails'?: BookDetails;
    /**
    * A URL used to access when loading data. The results coming from `stencil-router` that contain any URL matches.
    */
    'match': MatchResults;
    'setActiveElementByDetail': (detailId: number) => void;
  }
  interface ViewMapAttributes extends StencilHTMLAttributes {
    'appData'?: AppData;
    'bookDetails'?: BookDetails;
    /**
    * A URL used to access when loading data. The results coming from `stencil-router` that contain any URL matches.
    */
    'match'?: MatchResults;
    'onDataLoaded'?: (event: CustomEvent) => void;
    'onGetBookLocations'?: (event: CustomEvent) => void;
  }

  interface ViewSearch {
    'history': RouterHistory;
    'match': MatchResults;
    'searchUrl'?: string;
  }
  interface ViewSearchAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
    'searchUrl'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'RulaBis': Components.RulaBis;
    'RulaAppBar': Components.RulaAppBar;
    'RulaCard': Components.RulaCard;
    'RulaCollection': Components.RulaCollection;
    'RulaDetailPanel': Components.RulaDetailPanel;
    'RulaDrawer': Components.RulaDrawer;
    'RulaExpandableCard': Components.RulaExpandableCard;
    'RulaGraphicDevice': Components.RulaGraphicDevice;
    'RulaMapNav': Components.RulaMapNav;
    'RulaSearchBox': Components.RulaSearchBox;
    'ViewBook': Components.ViewBook;
    'ViewBuilding': Components.ViewBuilding;
    'ViewEvent': Components.ViewEvent;
    'ViewFaq': Components.ViewFaq;
    'ViewHome': Components.ViewHome;
    'ViewMap': Components.ViewMap;
    'ViewSearch': Components.ViewSearch;
  }

  interface StencilIntrinsicElements {
    'rula-bis': Components.RulaBisAttributes;
    'rula-app-bar': Components.RulaAppBarAttributes;
    'rula-card': Components.RulaCardAttributes;
    'rula-collection': Components.RulaCollectionAttributes;
    'rula-detail-panel': Components.RulaDetailPanelAttributes;
    'rula-drawer': Components.RulaDrawerAttributes;
    'rula-expandable-card': Components.RulaExpandableCardAttributes;
    'rula-graphic-device': Components.RulaGraphicDeviceAttributes;
    'rula-map-nav': Components.RulaMapNavAttributes;
    'rula-search-box': Components.RulaSearchBoxAttributes;
    'view-book': Components.ViewBookAttributes;
    'view-building': Components.ViewBuildingAttributes;
    'view-event': Components.ViewEventAttributes;
    'view-faq': Components.ViewFaqAttributes;
    'view-home': Components.ViewHomeAttributes;
    'view-map': Components.ViewMapAttributes;
    'view-search': Components.ViewSearchAttributes;
  }


  interface HTMLRulaBisElement extends Components.RulaBis, HTMLStencilElement {}
  var HTMLRulaBisElement: {
    prototype: HTMLRulaBisElement;
    new (): HTMLRulaBisElement;
  };

  interface HTMLRulaAppBarElement extends Components.RulaAppBar, HTMLStencilElement {}
  var HTMLRulaAppBarElement: {
    prototype: HTMLRulaAppBarElement;
    new (): HTMLRulaAppBarElement;
  };

  interface HTMLRulaCardElement extends Components.RulaCard, HTMLStencilElement {}
  var HTMLRulaCardElement: {
    prototype: HTMLRulaCardElement;
    new (): HTMLRulaCardElement;
  };

  interface HTMLRulaCollectionElement extends Components.RulaCollection, HTMLStencilElement {}
  var HTMLRulaCollectionElement: {
    prototype: HTMLRulaCollectionElement;
    new (): HTMLRulaCollectionElement;
  };

  interface HTMLRulaDetailPanelElement extends Components.RulaDetailPanel, HTMLStencilElement {}
  var HTMLRulaDetailPanelElement: {
    prototype: HTMLRulaDetailPanelElement;
    new (): HTMLRulaDetailPanelElement;
  };

  interface HTMLRulaDrawerElement extends Components.RulaDrawer, HTMLStencilElement {}
  var HTMLRulaDrawerElement: {
    prototype: HTMLRulaDrawerElement;
    new (): HTMLRulaDrawerElement;
  };

  interface HTMLRulaExpandableCardElement extends Components.RulaExpandableCard, HTMLStencilElement {}
  var HTMLRulaExpandableCardElement: {
    prototype: HTMLRulaExpandableCardElement;
    new (): HTMLRulaExpandableCardElement;
  };

  interface HTMLRulaGraphicDeviceElement extends Components.RulaGraphicDevice, HTMLStencilElement {}
  var HTMLRulaGraphicDeviceElement: {
    prototype: HTMLRulaGraphicDeviceElement;
    new (): HTMLRulaGraphicDeviceElement;
  };

  interface HTMLRulaMapNavElement extends Components.RulaMapNav, HTMLStencilElement {}
  var HTMLRulaMapNavElement: {
    prototype: HTMLRulaMapNavElement;
    new (): HTMLRulaMapNavElement;
  };

  interface HTMLRulaSearchBoxElement extends Components.RulaSearchBox, HTMLStencilElement {}
  var HTMLRulaSearchBoxElement: {
    prototype: HTMLRulaSearchBoxElement;
    new (): HTMLRulaSearchBoxElement;
  };

  interface HTMLViewBookElement extends Components.ViewBook, HTMLStencilElement {}
  var HTMLViewBookElement: {
    prototype: HTMLViewBookElement;
    new (): HTMLViewBookElement;
  };

  interface HTMLViewBuildingElement extends Components.ViewBuilding, HTMLStencilElement {}
  var HTMLViewBuildingElement: {
    prototype: HTMLViewBuildingElement;
    new (): HTMLViewBuildingElement;
  };

  interface HTMLViewEventElement extends Components.ViewEvent, HTMLStencilElement {}
  var HTMLViewEventElement: {
    prototype: HTMLViewEventElement;
    new (): HTMLViewEventElement;
  };

  interface HTMLViewFaqElement extends Components.ViewFaq, HTMLStencilElement {}
  var HTMLViewFaqElement: {
    prototype: HTMLViewFaqElement;
    new (): HTMLViewFaqElement;
  };

  interface HTMLViewHomeElement extends Components.ViewHome, HTMLStencilElement {}
  var HTMLViewHomeElement: {
    prototype: HTMLViewHomeElement;
    new (): HTMLViewHomeElement;
  };

  interface HTMLViewMapElement extends Components.ViewMap, HTMLStencilElement {}
  var HTMLViewMapElement: {
    prototype: HTMLViewMapElement;
    new (): HTMLViewMapElement;
  };

  interface HTMLViewSearchElement extends Components.ViewSearch, HTMLStencilElement {}
  var HTMLViewSearchElement: {
    prototype: HTMLViewSearchElement;
    new (): HTMLViewSearchElement;
  };

  interface HTMLElementTagNameMap {
    'rula-bis': HTMLRulaBisElement
    'rula-app-bar': HTMLRulaAppBarElement
    'rula-card': HTMLRulaCardElement
    'rula-collection': HTMLRulaCollectionElement
    'rula-detail-panel': HTMLRulaDetailPanelElement
    'rula-drawer': HTMLRulaDrawerElement
    'rula-expandable-card': HTMLRulaExpandableCardElement
    'rula-graphic-device': HTMLRulaGraphicDeviceElement
    'rula-map-nav': HTMLRulaMapNavElement
    'rula-search-box': HTMLRulaSearchBoxElement
    'view-book': HTMLViewBookElement
    'view-building': HTMLViewBuildingElement
    'view-event': HTMLViewEventElement
    'view-faq': HTMLViewFaqElement
    'view-home': HTMLViewHomeElement
    'view-map': HTMLViewMapElement
    'view-search': HTMLViewSearchElement
  }

  interface ElementTagNameMap {
    'rula-bis': HTMLRulaBisElement;
    'rula-app-bar': HTMLRulaAppBarElement;
    'rula-card': HTMLRulaCardElement;
    'rula-collection': HTMLRulaCollectionElement;
    'rula-detail-panel': HTMLRulaDetailPanelElement;
    'rula-drawer': HTMLRulaDrawerElement;
    'rula-expandable-card': HTMLRulaExpandableCardElement;
    'rula-graphic-device': HTMLRulaGraphicDeviceElement;
    'rula-map-nav': HTMLRulaMapNavElement;
    'rula-search-box': HTMLRulaSearchBoxElement;
    'view-book': HTMLViewBookElement;
    'view-building': HTMLViewBuildingElement;
    'view-event': HTMLViewEventElement;
    'view-faq': HTMLViewFaqElement;
    'view-home': HTMLViewHomeElement;
    'view-map': HTMLViewMapElement;
    'view-search': HTMLViewSearchElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
