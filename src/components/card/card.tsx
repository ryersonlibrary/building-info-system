import {
  Component,
  Element,
  Event,
  EventEmitter,
  Prop,
  State,
  Watch,
} from '@stencil/core';

import { Color } from '../../utils/color';

@Component({
  tag: 'rula-card',
  styleUrl: 'card.scss',
})

export class Card {
  /**
   * @emits resultSelected
   */

  @Element() root!: HTMLStencilElement;

  @State() protectionFadeColor = new Color(255, 255, 255, 0.5);
  @State() textColors = [new Color(255, 255, 255), new Color(0, 0, 0)];

  @Prop() buttons?: Array<{name: string}>;
  @Prop() icons?: Array<{name: string}>;

  @Prop() cardMedia = '';
  @Prop() cardData: { [keys: string]: string[] } | string = {};

  @Prop() cardTitle = '';
  @Prop() titleInMedia = false;

  @Prop() hasPrimaryAction = false;

  @Prop() noContent = false;

  @Prop() wideMediaAspect = false;
  @Prop() protectionColor = new Color(255, 255, 255);
  @Watch('protectionColor')
  onProtectionColorChange() {
    this.protectionFadeColor = this.protectionColor.clone();
    this.protectionFadeColor.setAlpha(0.5);
  }

  @Event() cardClicked!: EventEmitter;

  _renderActions() {
    // Render nothing if no buttons and icons are defined.
    if (!(this.buttons || this.icons)) return;

    // Render any actions.
    return (
      <div class="mdc-card__actions">
        {this.buttons ?
          <div class="mdc-card__action-buttons">
            {this.buttons.map(b =>
              <button class="mdc-button">
                <a href="#">{b.name}</a>
              </button>
            )}
          </div> : undefined
        }
        {this.icons ?
          <div class="mdc-card__action-icons">
            {this.icons.map(i =>
              <button class="mdc-icon-button">
                <i class="material-icons mdc-icon-btton__icon">{i.name}</i>
              </button>
            )}
          </div> : undefined
        }
      </div>
    );
  }

  _renderMedia() {
    const mediaFile =
        this.cardMedia ? this.cardMedia : 'url("/assets/img/no_img.png")';

    return (
      <div class={`mdc-card__media mdc-card__media--${this.wideMediaAspect ? '16-9' : 'square'}`}
        style={{ 'background-image': mediaFile }}>
        {this.titleInMedia ?
          [
            <div class="rula-card__media-text-protection" style={{
              background: `linear-gradient(to top, ${this.protectionColor.toRgb()},
              ${this.protectionFadeColor.toRgb()})`,
            }}></div>,
            <div class="rula-card__media-text" style={{
              color: this.protectionColor.highContrast(this.textColors).toRgb(),
            }}>{this.cardTitle}</div>,
          ] : undefined
        }
      </div>
    );
  }

  _renderCard() {
    return ([
      this._renderMedia(),
      this.noContent ?
        undefined : [
        <div class="rula-card__primary">
          <slot name="primary" />
        </div>,
        <div class="rula-card__secondary">
          <slot name="secondary" />
        </div>],
    ]);
  }

  hostData() {
    return {
      class: {
        'rula-card': true,
        'mdc-card': true,
      },
    };
  }

  render() {
    return ([
      this.hasPrimaryAction ?
        <div class="mdc-card__primary-action"
            onClick={() => this.cardClicked.emit(this)}>
          {this._renderCard()}
        </div> :
        this._renderCard(),
      this._renderActions(),
    ]);
  }
}