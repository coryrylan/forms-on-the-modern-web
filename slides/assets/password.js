const eye = '<svg id="eye" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 36 36"><path d="M33.62 17.53c-3.37-6.23-9.28-10-15.82-10S5.34 11.3 2 17.53l-.28.47.26.48c3.37 6.23 9.28 10 15.82 10s12.46-3.72 15.82-10l.26-.48zm-15.82 8.9C12.17 26.43 7 23.29 4 18c3-5.29 8.17-8.43 13.8-8.43S28.54 12.72 31.59 18c-3.05 5.29-8.17 8.43-13.79 8.43z"/><path d="M18.09 11.17A6.86 6.86 0 1 0 25 18a6.86 6.86 0 0 0-6.91-6.83zm0 11.72A4.86 4.86 0 1 1 23 18a4.87 4.87 0 0 1-4.91 4.89z"/><path fill="none" d="M0 0h36v36H0z"/></svg>';

const eyeHidden = '<svg id="eye-hidden" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 36 36"><path d="M25.19 20.4a6.78 6.78 0 0 0 .43-2.4 6.86 6.86 0 0 0-6.86-6.86 6.79 6.79 0 0 0-2.37.43L18 13.23a4.78 4.78 0 0 1 .74-.06A4.87 4.87 0 0 1 23.62 18a4.79 4.79 0 0 1-.06.74z"/><path d="M34.29 17.53c-3.37-6.23-9.28-10-15.82-10a16.82 16.82 0 0 0-5.24.85L14.84 10a14.78 14.78 0 0 1 3.63-.47c5.63 0 10.75 3.14 13.8 8.43a17.75 17.75 0 0 1-4.37 5.1l1.42 1.42a19.93 19.93 0 0 0 5-6l.26-.48zM4.87 5.78l4.46 4.46a19.52 19.52 0 0 0-6.69 7.29l-.26.47.26.48c3.37 6.23 9.28 10 15.82 10a16.93 16.93 0 0 0 7.37-1.69l5 5 1.75-1.5-26-26zm9.75 9.75 6.65 6.65a4.81 4.81 0 0 1-2.5.72A4.87 4.87 0 0 1 13.9 18a4.81 4.81 0 0 1 .72-2.47zm-1.45-1.45a6.85 6.85 0 0 0 9.55 9.55l1.6 1.6a14.91 14.91 0 0 1-5.86 1.2c-5.63 0-10.75-3.14-13.8-8.43a17.29 17.29 0 0 1 6.12-6.3z"/><path fill="none" d="M0 0h36v36H0z"/></svg>';

const styles = `
  *, *:before, *:after {
    box-sizing: border-box;
  }

  :host {
    --border: 1px solid #858585;
    display: flex;
    flex-direction: column;
    gap: 24px;
    contain: layout;
    container-type: inline-size;
    width: 100%;
    min-width: 160px;
    border-radius: 4px;
    margin-top: 2px;
  }

  :host(:state(invalid)) {
    --border: 1px solid red;
  }

  :host([state-invalid]) {
    --border: 1px solid red;
  }

  input {
    border: var(--border);
    border-radius: 4px;
    width: 100%;
    padding: 4px;
  }

  button {
    background: transparent;
    border: 0;
    position: absolute;
    right: 4px;
    top: 4px;
    cursor: pointer;
  }

  svg {
    width: 16px;
    height: 16px;
  }

  #eye-hidden {
    display: none;
  }

  :host(:state(visible)) #eye {
    display: none;
  }

  :host(:state(visible)) #eye-hidden {
    display: block;
  }

  :host([state-visible]) #eye {
    display: none;
  }

  :host([state-visible]) #eye-hidden {
    display: block;
  }
`;

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>
  <input type="password" />
  <button>${eye}${eyeHidden}</button>
`;

export class Password extends HTMLElement {
  static formAssociated = true;

  #internals = this.attachInternals();

  set value(value) {
    this.#input.value = value;
    this.#internals.setFormValue(value);
    if (!this.value) {
      this.#internals.setValidity({ valueMissing: true }, 'required');
    } else {
      this.#internals.setValidity({ });
    }
  }

  get value() {
    return this.#input.value;
  }

  get #input() {
    return this.shadowRoot.querySelector('input');
  }

  get #button() {
    return this.shadowRoot.querySelector('button');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('input', () => this.#updateValue());
    this.shadowRoot.addEventListener('change', () => this.#updateValue());
    this.#internals.setFormValue(this.value);
    this.checkValidity();

    this.#button.addEventListener('click', () => {
      const show = this.#input.type === 'password';
      this.#input.type = show ? 'text' : 'password';
      show ? this.setAttribute('state-visible', '') : this.removeAttribute('state-visible');
      show ? this.#internals.states.add('visible') : this.#internals.states.delete('visible');
    });
  }

  static get observedAttributes() {
    return ['value'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'value' && oldVal !== newVal) {
      this.value = newVal;
    }
  }

  get #isValid() {
    const required = this.hasAttribute('required');
    return required ? this.#input.value.length > 0 : true;
  }

  #updateValue() {
    this.#internals.setFormValue(this.#input.value);
    this.checkValidity();
    this.reportValidity();
  }

  checkValidity() {
    if (this.#isValid) {
      this.#internals.setValidity({ });
    } else {
      this.#internals.setValidity({ valueMissing: true }, 'required');
    }

    return this.#internals.checkValidity();
  }

  reportValidity() {
    if (this.#isValid) {
      this.removeAttribute('state-invalid'); // browser fallback
      this.#internals.states.delete('invalid');
    } else {
      this.setAttribute('state-invalid', ''); // browser fallback
      this.#internals.states.add('invalid');
    }
    return this.#internals.reportValidity();
  }

  get form() { return this.#internals.form; }
  get name() { return this.getAttribute('name'); }
  get type() { return this.localName; }
  get validity() {return this.#internals.validity; }
  get validationMessage() {return this.#internals.validationMessage; }
  get willValidate() {return this.#internals.willValidate; }
}

customElements.define('ui-password', Password);
