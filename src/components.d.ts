/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import '@ryersonlibrary/web-components';
import {
  Color,
} from './utils/color';
import {
  BuildingMap,
  MapElementData,
  SearchResultItem,
} from './interface';
import {
  BuildingMap as BuildingMap2,
  FloorMap,
} from './interface.js';
import {
  Search,
} from './utils/search';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';
import {
  MAP_TYPE,
} from './global/constants';


export namespace Components {

  interface RlBis {}
  interface RlBisAttributes extends StencilHTMLAttributes {}

  interface RlAccordionItem {
    /**
    * This function closes this item.
    */
    'close': () => void;
    /**
    * A delay used to fade-in this item a specific amount of time after the component is rendered.
    */
    'delay': number;
    'focusTitle': () => void;
    /**
    * An index number used to reference this item in the larger list of all items in the parent accordion.
    */
    'index': number;
    /**
    * A state tracking the current open/closed state of this item.
    */
    'isOpen': boolean;
    /**
    * This function opens this item.
    */
    'open': () => void;
  }
  interface RlAccordionItemAttributes extends StencilHTMLAttributes {
    /**
    * A delay used to fade-in this item a specific amount of time after the component is rendered.
    */
    'delay'?: number;
    /**
    * An index number used to reference this item in the larger list of all items in the parent accordion.
    */
    'index'?: number;
    /**
    * A state tracking the current open/closed state of this item.
    */
    'isOpen'?: boolean;
    /**
    * Event emitted after the body's collapse animation has completed.
    */
    'onAfterCollapse'?: (event: CustomEvent) => void;
    'onAfterExpand'?: (event: CustomEvent) => void;
    'onClosed'?: (event: CustomEvent) => void;
    'onOpened'?: (event: CustomEvent) => void;
  }

  interface RlAccordion {
    /**
    * Flag indicating if multiple `accordion-item`s can be open at once. Defaults to true.
    */
    'allowMultiple': boolean;
    /**
    * An array of content displayed by the accordion.
    */
    'items': Array<{ [key: string]: string }>;
  }
  interface RlAccordionAttributes extends StencilHTMLAttributes {
    /**
    * Flag indicating if multiple `accordion-item`s can be open at once. Defaults to true.
    */
    'allowMultiple'?: boolean;
    /**
    * An array of content displayed by the accordion.
    */
    'items'?: Array<{ [key: string]: string }>;
  }

  interface RlAppBar {
    /**
    * The current width of the application.  Used to determine what kind of interface should be displayed (reduced or full-width layout).
    */
    'appTitle': string;
    'centerTitle': boolean;
    'dense': boolean;
    'singleSection': boolean;
    'type': 'fixed' | 'prominent' | 'short' | 'shortCollapsed' | 'prominentFixed' | '';
  }
  interface RlAppBarAttributes extends StencilHTMLAttributes {
    /**
    * The current width of the application.  Used to determine what kind of interface should be displayed (reduced or full-width layout).
    */
    'appTitle'?: string;
    'centerTitle'?: boolean;
    'dense'?: boolean;
    /**
    * Event fired when the menu button on the app bar is clicked.
    */
    'onMenuClicked'?: (event: CustomEvent) => void;
    'onSearchFaqClicked'?: (event: CustomEvent) => void;
    'onSearchLocationClicked'?: (event: CustomEvent) => void;
    'singleSection'?: boolean;
    'type'?: 'fixed' | 'prominent' | 'short' | 'shortCollapsed' | 'prominentFixed' | '';
  }

  interface RlCard {
    'buttons'?: Array<{name: string, link: string}>;
    'cardColor': Color;
    'cardData': { [keys: string]: string[] } | string;
    'cardMedia': string;
    'cardTitle': string;
    'hasPrimaryAction': boolean;
    'icons'?: Array<{name: string}>;
    'mediaSize': 'contain' | 'cover';
    'noContent': boolean;
    'noMedia': boolean;
    'titleInMedia': boolean;
    'wideMediaAspect': boolean;
  }
  interface RlCardAttributes extends StencilHTMLAttributes {
    'buttons'?: Array<{name: string, link: string}>;
    'cardColor'?: Color;
    'cardData'?: { [keys: string]: string[] } | string;
    'cardMedia'?: string;
    'cardTitle'?: string;
    'hasPrimaryAction'?: boolean;
    'icons'?: Array<{name: string}>;
    'mediaSize'?: 'contain' | 'cover';
    'noContent'?: boolean;
    'noMedia'?: boolean;
    'onCardClicked'?: (event: CustomEvent) => void;
    'titleInMedia'?: boolean;
    'wideMediaAspect'?: boolean;
  }

  interface RlCluster {
    'columns': number;
    'data': any;
    'hasMore': boolean;
    'heading': string;
    'type'?: string;
  }
  interface RlClusterAttributes extends StencilHTMLAttributes {
    'columns'?: number;
    'data'?: any;
    'hasMore'?: boolean;
    'heading'?: string;
    'type'?: string;
  }

  interface RlCollection {
    'collectionTitle': string;
  }
  interface RlCollectionAttributes extends StencilHTMLAttributes {
    'collectionTitle'?: string;
  }

  interface RlDrawer {
    /**
    * Flag indicating if the drawer is open.
    */
    'open': boolean;
  }
  interface RlDrawerAttributes extends StencilHTMLAttributes {
    /**
    * An event emitted when this drawer closes.
    */
    'onDrawerClose'?: (event: CustomEvent) => void;
    /**
    * Flag indicating if the drawer is open.
    */
    'open': boolean;
  }

  interface RlExpansionPanel {
    'close': () => void;
    'index': number;
    'open': () => void;
  }
  interface RlExpansionPanelAttributes extends StencilHTMLAttributes {
    'index'?: number;
    'onToggled'?: (event: CustomEvent) => void;
  }

  interface RlLoadProgress {}
  interface RlLoadProgressAttributes extends StencilHTMLAttributes {}

  interface RlMapContainer {
    'buildings': BuildingMap;
    'extraDetails'?: {};
    'initialBuilding': number;
    'initialElement'?: number;
    'initialFloor': number;
    'setActiveElement': (el: MapElementData) => void;
  }
  interface RlMapContainerAttributes extends StencilHTMLAttributes {
    'buildings': BuildingMap;
    'extraDetails'?: {};
    'initialBuilding': number;
    'initialElement'?: number;
    'initialFloor': number;
  }

  interface RlMapNav {
    /**
    * The `id` of the currently active building.
    */
    'activeBuilding': number;
    /**
    * The `id` of the currently active floor.
    */
    'activeFloor': number;
    /**
    * An id-indexed map of the buildings.
    */
    'buildings': BuildingMap;
    /**
    * An id-indexed map of floors.
    */
    'floors': FloorMap;
  }
  interface RlMapNavAttributes extends StencilHTMLAttributes {
    /**
    * The `id` of the currently active building.
    */
    'activeBuilding': number;
    /**
    * The `id` of the currently active floor.
    */
    'activeFloor': number;
    /**
    * An id-indexed map of the buildings.
    */
    'buildings': BuildingMap;
    /**
    * An id-indexed map of floors.
    */
    'floors': FloorMap;
    /**
    * An event emitted when the selected Building changes.
    */
    'onBuildingChanged'?: (event: CustomEvent) => void;
    /**
    * An event emitted when the selected Floor changes.
    */
    'onFloorChanged'?: (event: CustomEvent) => void;
  }

  interface RlScrollingCarousel {}
  interface RlScrollingCarouselAttributes extends StencilHTMLAttributes {}

  interface RlSearchBox {
    'clearInput': () => void;
    'docSearch': Search;
    'id': string;
    'placeholder': string;
    'resultHeight': number;
    'searchValue': string;
    'showMenu': boolean;
  }
  interface RlSearchBoxAttributes extends StencilHTMLAttributes {
    'docSearch': Search;
    'id'?: string;
    'onIconClick'?: (event: CustomEvent) => void;
    'onSearchChange'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'resultHeight'?: number;
    'searchValue'?: string;
    'showMenu'?: boolean;
  }

  interface RlSearchSuggestions {
    'activeResult'?: number;
    'isEmptySearch': boolean;
    'suggestions': SearchResultItem[];
  }
  interface RlSearchSuggestionsAttributes extends StencilHTMLAttributes {
    'activeResult'?: number;
    'isEmptySearch'?: boolean;
    'onSuggestionClicked'?: (event: CustomEvent) => void;
    'suggestions'?: SearchResultItem[];
  }

  interface RlSectionWithHeader {}
  interface RlSectionWithHeaderAttributes extends StencilHTMLAttributes {}

  interface RlSideSheet {
    'open': boolean;
  }
  interface RlSideSheetAttributes extends StencilHTMLAttributes {
    /**
    * Event fired when the `side-sheet` has finished closing.
    */
    'onClosed'?: (event: CustomEvent) => void;
    /**
    * Event fired when the `side-sheet` has finished opening.
    */
    'onOpened'?: (event: CustomEvent) => void;
    'open'?: boolean;
  }

  interface ViewBook {
    'appLoaded': boolean;
    'history': RouterHistory;
  }
  interface ViewBookAttributes extends StencilHTMLAttributes {
    'appLoaded'?: boolean;
    'history': RouterHistory;
  }

  interface ViewBuilding {
    /**
    * Global flag indicating if the whole application has loaded.  If not, this view should not display either.
    */
    'appLoaded': boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
  }
  interface ViewBuildingAttributes extends StencilHTMLAttributes {
    /**
    * Global flag indicating if the whole application has loaded.  If not, this view should not display either.
    */
    'appLoaded'?: boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
  }

  interface ViewEvent {
    /**
    * Global flag indicating if the whole application has loaded.  If not, this view should not display either.
    */
    'appLoaded': boolean;
    'history': RouterHistory;
  }
  interface ViewEventAttributes extends StencilHTMLAttributes {
    /**
    * Global flag indicating if the whole application has loaded.  If not, this view should not display either.
    */
    'appLoaded'?: boolean;
    'history': RouterHistory;
  }

  interface ViewFaq {
    /**
    * Global flag indicating if the whole application has loaded.  If not, this view should not display either.
    */
    'appLoaded': boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
    /**
    * Reference to the object passed in from Stencil containing any URL path variables that were matched by the router.
    */
    'match': MatchResults;
    'setActiveFaq': (faqId: number) => void;
  }
  interface ViewFaqAttributes extends StencilHTMLAttributes {
    /**
    * Global flag indicating if the whole application has loaded.  If not, this view should not display either.
    */
    'appLoaded'?: boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
    /**
    * Reference to the object passed in from Stencil containing any URL path variables that were matched by the router.
    */
    'match': MatchResults;
  }

  interface ViewHome {
    'appLoaded': boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
  }
  interface ViewHomeAttributes extends StencilHTMLAttributes {
    'appLoaded'?: boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
  }

  interface ViewMap {
    /**
    * A global flag passed in to indicate if the application has loaded as well.
    */
    'appLoaded': boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
    'mapType': MAP_TYPE;
    /**
    * The results coming from `stencil-router` that contain any URL matches.
    */
    'match': MatchResults;
    'setActiveDetail': (id: number) => void;
    'setActiveElement': (id: number) => void;
  }
  interface ViewMapAttributes extends StencilHTMLAttributes {
    /**
    * A global flag passed in to indicate if the application has loaded as well.
    */
    'appLoaded'?: boolean;
    /**
    * Reference to the stencil-router history object. Used to programmatically change the browser history when the selected FAQ changes.
    */
    'history': RouterHistory;
    'mapType'?: MAP_TYPE;
    /**
    * The results coming from `stencil-router` that contain any URL matches.
    */
    'match': MatchResults;
    /**
    * Event fired when the data specific to this view is finished loading.
    */
    'onDataLoaded'?: (event: CustomEvent) => void;
  }

  interface ViewSearch {
    'appLoaded': boolean;
    'history': RouterHistory;
    'match': MatchResults;
    'searchUrl'?: string;
  }
  interface ViewSearchAttributes extends StencilHTMLAttributes {
    'appLoaded'?: boolean;
    'history': RouterHistory;
    'match': MatchResults;
    'searchUrl'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'RlBis': Components.RlBis;
    'RlAccordionItem': Components.RlAccordionItem;
    'RlAccordion': Components.RlAccordion;
    'RlAppBar': Components.RlAppBar;
    'RlCard': Components.RlCard;
    'RlCluster': Components.RlCluster;
    'RlCollection': Components.RlCollection;
    'RlDrawer': Components.RlDrawer;
    'RlExpansionPanel': Components.RlExpansionPanel;
    'RlLoadProgress': Components.RlLoadProgress;
    'RlMapContainer': Components.RlMapContainer;
    'RlMapNav': Components.RlMapNav;
    'RlScrollingCarousel': Components.RlScrollingCarousel;
    'RlSearchBox': Components.RlSearchBox;
    'RlSearchSuggestions': Components.RlSearchSuggestions;
    'RlSectionWithHeader': Components.RlSectionWithHeader;
    'RlSideSheet': Components.RlSideSheet;
    'ViewBook': Components.ViewBook;
    'ViewBuilding': Components.ViewBuilding;
    'ViewEvent': Components.ViewEvent;
    'ViewFaq': Components.ViewFaq;
    'ViewHome': Components.ViewHome;
    'ViewMap': Components.ViewMap;
    'ViewSearch': Components.ViewSearch;
  }

  interface StencilIntrinsicElements {
    'rl-bis': Components.RlBisAttributes;
    'rl-accordion-item': Components.RlAccordionItemAttributes;
    'rl-accordion': Components.RlAccordionAttributes;
    'rl-app-bar': Components.RlAppBarAttributes;
    'rl-card': Components.RlCardAttributes;
    'rl-cluster': Components.RlClusterAttributes;
    'rl-collection': Components.RlCollectionAttributes;
    'rl-drawer': Components.RlDrawerAttributes;
    'rl-expansion-panel': Components.RlExpansionPanelAttributes;
    'rl-load-progress': Components.RlLoadProgressAttributes;
    'rl-map-container': Components.RlMapContainerAttributes;
    'rl-map-nav': Components.RlMapNavAttributes;
    'rl-scrolling-carousel': Components.RlScrollingCarouselAttributes;
    'rl-search-box': Components.RlSearchBoxAttributes;
    'rl-search-suggestions': Components.RlSearchSuggestionsAttributes;
    'rl-section-with-header': Components.RlSectionWithHeaderAttributes;
    'rl-side-sheet': Components.RlSideSheetAttributes;
    'view-book': Components.ViewBookAttributes;
    'view-building': Components.ViewBuildingAttributes;
    'view-event': Components.ViewEventAttributes;
    'view-faq': Components.ViewFaqAttributes;
    'view-home': Components.ViewHomeAttributes;
    'view-map': Components.ViewMapAttributes;
    'view-search': Components.ViewSearchAttributes;
  }


  interface HTMLRlBisElement extends Components.RlBis, HTMLStencilElement {}
  var HTMLRlBisElement: {
    prototype: HTMLRlBisElement;
    new (): HTMLRlBisElement;
  };

  interface HTMLRlAccordionItemElement extends Components.RlAccordionItem, HTMLStencilElement {}
  var HTMLRlAccordionItemElement: {
    prototype: HTMLRlAccordionItemElement;
    new (): HTMLRlAccordionItemElement;
  };

  interface HTMLRlAccordionElement extends Components.RlAccordion, HTMLStencilElement {}
  var HTMLRlAccordionElement: {
    prototype: HTMLRlAccordionElement;
    new (): HTMLRlAccordionElement;
  };

  interface HTMLRlAppBarElement extends Components.RlAppBar, HTMLStencilElement {}
  var HTMLRlAppBarElement: {
    prototype: HTMLRlAppBarElement;
    new (): HTMLRlAppBarElement;
  };

  interface HTMLRlCardElement extends Components.RlCard, HTMLStencilElement {}
  var HTMLRlCardElement: {
    prototype: HTMLRlCardElement;
    new (): HTMLRlCardElement;
  };

  interface HTMLRlClusterElement extends Components.RlCluster, HTMLStencilElement {}
  var HTMLRlClusterElement: {
    prototype: HTMLRlClusterElement;
    new (): HTMLRlClusterElement;
  };

  interface HTMLRlCollectionElement extends Components.RlCollection, HTMLStencilElement {}
  var HTMLRlCollectionElement: {
    prototype: HTMLRlCollectionElement;
    new (): HTMLRlCollectionElement;
  };

  interface HTMLRlDrawerElement extends Components.RlDrawer, HTMLStencilElement {}
  var HTMLRlDrawerElement: {
    prototype: HTMLRlDrawerElement;
    new (): HTMLRlDrawerElement;
  };

  interface HTMLRlExpansionPanelElement extends Components.RlExpansionPanel, HTMLStencilElement {}
  var HTMLRlExpansionPanelElement: {
    prototype: HTMLRlExpansionPanelElement;
    new (): HTMLRlExpansionPanelElement;
  };

  interface HTMLRlLoadProgressElement extends Components.RlLoadProgress, HTMLStencilElement {}
  var HTMLRlLoadProgressElement: {
    prototype: HTMLRlLoadProgressElement;
    new (): HTMLRlLoadProgressElement;
  };

  interface HTMLRlMapContainerElement extends Components.RlMapContainer, HTMLStencilElement {}
  var HTMLRlMapContainerElement: {
    prototype: HTMLRlMapContainerElement;
    new (): HTMLRlMapContainerElement;
  };

  interface HTMLRlMapNavElement extends Components.RlMapNav, HTMLStencilElement {}
  var HTMLRlMapNavElement: {
    prototype: HTMLRlMapNavElement;
    new (): HTMLRlMapNavElement;
  };

  interface HTMLRlScrollingCarouselElement extends Components.RlScrollingCarousel, HTMLStencilElement {}
  var HTMLRlScrollingCarouselElement: {
    prototype: HTMLRlScrollingCarouselElement;
    new (): HTMLRlScrollingCarouselElement;
  };

  interface HTMLRlSearchBoxElement extends Components.RlSearchBox, HTMLStencilElement {}
  var HTMLRlSearchBoxElement: {
    prototype: HTMLRlSearchBoxElement;
    new (): HTMLRlSearchBoxElement;
  };

  interface HTMLRlSearchSuggestionsElement extends Components.RlSearchSuggestions, HTMLStencilElement {}
  var HTMLRlSearchSuggestionsElement: {
    prototype: HTMLRlSearchSuggestionsElement;
    new (): HTMLRlSearchSuggestionsElement;
  };

  interface HTMLRlSectionWithHeaderElement extends Components.RlSectionWithHeader, HTMLStencilElement {}
  var HTMLRlSectionWithHeaderElement: {
    prototype: HTMLRlSectionWithHeaderElement;
    new (): HTMLRlSectionWithHeaderElement;
  };

  interface HTMLRlSideSheetElement extends Components.RlSideSheet, HTMLStencilElement {}
  var HTMLRlSideSheetElement: {
    prototype: HTMLRlSideSheetElement;
    new (): HTMLRlSideSheetElement;
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
    'rl-bis': HTMLRlBisElement
    'rl-accordion-item': HTMLRlAccordionItemElement
    'rl-accordion': HTMLRlAccordionElement
    'rl-app-bar': HTMLRlAppBarElement
    'rl-card': HTMLRlCardElement
    'rl-cluster': HTMLRlClusterElement
    'rl-collection': HTMLRlCollectionElement
    'rl-drawer': HTMLRlDrawerElement
    'rl-expansion-panel': HTMLRlExpansionPanelElement
    'rl-load-progress': HTMLRlLoadProgressElement
    'rl-map-container': HTMLRlMapContainerElement
    'rl-map-nav': HTMLRlMapNavElement
    'rl-scrolling-carousel': HTMLRlScrollingCarouselElement
    'rl-search-box': HTMLRlSearchBoxElement
    'rl-search-suggestions': HTMLRlSearchSuggestionsElement
    'rl-section-with-header': HTMLRlSectionWithHeaderElement
    'rl-side-sheet': HTMLRlSideSheetElement
    'view-book': HTMLViewBookElement
    'view-building': HTMLViewBuildingElement
    'view-event': HTMLViewEventElement
    'view-faq': HTMLViewFaqElement
    'view-home': HTMLViewHomeElement
    'view-map': HTMLViewMapElement
    'view-search': HTMLViewSearchElement
  }

  interface ElementTagNameMap {
    'rl-bis': HTMLRlBisElement;
    'rl-accordion-item': HTMLRlAccordionItemElement;
    'rl-accordion': HTMLRlAccordionElement;
    'rl-app-bar': HTMLRlAppBarElement;
    'rl-card': HTMLRlCardElement;
    'rl-cluster': HTMLRlClusterElement;
    'rl-collection': HTMLRlCollectionElement;
    'rl-drawer': HTMLRlDrawerElement;
    'rl-expansion-panel': HTMLRlExpansionPanelElement;
    'rl-load-progress': HTMLRlLoadProgressElement;
    'rl-map-container': HTMLRlMapContainerElement;
    'rl-map-nav': HTMLRlMapNavElement;
    'rl-scrolling-carousel': HTMLRlScrollingCarouselElement;
    'rl-search-box': HTMLRlSearchBoxElement;
    'rl-search-suggestions': HTMLRlSearchSuggestionsElement;
    'rl-section-with-header': HTMLRlSectionWithHeaderElement;
    'rl-side-sheet': HTMLRlSideSheetElement;
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
