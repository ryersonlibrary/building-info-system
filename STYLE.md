## Project styles

The majority of project styles are defined within configuration files, specifically
`.editorconfig`, `.stylelintrc.yaml` and `tslint.json`.

Beyond those style rules, the following is the desired layout for component `.tsx` files, taken from the StencilJS [Style Guide](https://stenciljs.com/docs/style-guide)

```typescript
@Component({
  tag: 'ion-something',
  styleUrl: 'something.scss',
  styleUrls: {
    ios: 'something.ios.scss',
    md: 'something.md.scss',
    wp: 'something.wp.scss'
  },
  host: {
    theme: 'something'
  }
})
export class Something {

  /**
   * 1. Own Properties
   * Always set the type if a default value has not
   * been set. If a default value is being set, then type
   * is already inferred. List the own properties in
   * alphabetical order. Note that because these properties
   * do not have the @Prop() decorator, they will not be exposed
   * publicly on the host element, but only used internally.
   */
  num: number;
  someText = 'default';

  /**
   * 2. Reference to host HTML element.
   * Inlined decorator
   */
  @Element() el: HTMLElement;

  /**
   * 3. State() variables
   * Inlined decorator, alphabetical order.
   */
  @State() isValidated: boolean;
  @State() status = 0;

  /**
   * 4. Internal props (context and connect)
   * Inlined decorator, alphabetical order.
   */
  @Prop({ context: 'config' }) config: Config;
  @Prop({ connect: 'ion-menu-controller' }) lazyMenuCtrl: Lazy<MenuController>;

  /**
   * 5. Public Property API
   * Inlined decorator, alphabetical order. These are
   * different than "own properties" in that public props
   * are exposed as properties and attributes on the host element.
   * Requires JSDocs for public API documentation.
   */
  @Prop() content: string;
  @Prop() enabled: boolean;
  @Prop() menuId: string;
  @Prop() type = 'overlay';

  /**
   * Prop lifecycle events SHOULD go just behind the Prop they listen to.
   * This makes sense since both statements are strongly connected.
   * - If renaming the instance variable name you must also update the name in @Watch()
   * - Code is easier to follow and maintain.
   */
  @Prop() swipeEnabled = true;

  @Watch('swipeEnabled')
  swipeEnabledChanged() {
    this.updateState();
  }

  /**
   * 6. Events section
   * Inlined decorator, alphabetical order.
   * Requires JSDocs for public API documentation.
   */
  @Event() ionClose: EventEmitter;
  @Event() ionDrag: EventEmitter;
  @Event() ionOpen: EventEmitter;

  /**
   * 7. Component lifecycle events
   * Ordered by their natural call order, for example
   * WillLoad should go before DidLoad.
   */
  componentWillLoad() {}
  componentDidLoad() {}
  componentWillEnter() {}
  componentDidEnter() {}
  componentWillLeave() {}
  componentDidLeave() {}
  componentDidUnload() {}

  /**
   * 8. Listeners
   * It is ok to place them in a different location
   * if makes more sense in the context. Recommend
   * starting a listener method with "on".
   * Always use two lines.
   */
  @Listen('click', { enabled: false })
  onClick(ev: UIEvent) {
    console.log('hi!')
  }

  /**
   * 9. Public methods API
   * These methods are exposed on the host element.
   * Always use two lines.
   * Requires JSDocs for public API documentation.
   */
  @Method()
  open() {
    ...
  }

  @Method()
  close() {
    ...
  }

  /**
   * 10. Local methods
   * Internal business logic. These methods cannot be
   * called from the host element.
   */
  prepareAnimation(): Promise<void> {
    ...
  }

  updateState() {
    ...
  }

  /**
   * 11. hostData() function
   * Used to dynamically set host element attributes.
   * Should be placed directly above render()
   */
  hostData() {
    return {
      attribute: 'navigation',
      side: this.isRightSide ? 'right' : 'left',
      type: this.type,
      class: {
        'something-is-animating': this.isAnimating
      }
    };
  }

  /**
   * 12. render() function
   * Always the last one in the class.
   */
  render() {
    return (
      <div class='menu-inner page-inner'>
        <slot></slot>
      </div>
    );
  }
}
```