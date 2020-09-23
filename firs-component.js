import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `firs-component`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FirsComponent extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'firs-component',
      },
    };
  }
}

window.customElements.define('firs-component', FirsComponent);
