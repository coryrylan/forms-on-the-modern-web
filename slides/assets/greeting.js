class UICustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 0 12px;
          border: 1px solid black;
        }
      </style>
      <p>Hello, <slot></slot>!</p>
    `;
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'name' && oldVal !== newVal) {
      this.name = newVal;
    }
  }

  get name() {
    return this.getAttribute('name');
  }

  set name(val) {
    if (val) {
      this.setAttribute('name', val);
      this.#slot.textContent = this.name;
    } else {
      this.removeAttribute('name');
      this.#slot.textContent = 'World';
    }
  }

  get #slot() {
    return this.shadowRoot.querySelector('slot');
  }
}

customElements.define('ui-greeting', UICustomElement);