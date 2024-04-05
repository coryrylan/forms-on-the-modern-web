const styles = `
  *, *:before, *:after {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    gap: 24px;
    contain: layout;
    container-type: inline-size;
    width: 100%;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0;
    border: 0;
    margin: 0;

    &:has([type=checkbox]) {
      flex-direction: row;
    }
  }

  [type=checkbox] {
    margin: 0;
  }

  label {
    min-width: 80px;
    text-wrap: nowrap;
  }

  input[type='email'],
  input[type='password'] {
    padding: 4px;
    border: 1px solid #979797;
    border-radius: 4px;
    margin-top: 2px;
    min-width: 160px;
    width: 100%;
  }

  [aria-live="polite"] {
    display: none;
  }

  fieldset:has(:user-invalid) {
    input {
      border: 1px solid red;
    }

    [aria-live='polite'] {
      color: red;
      font-size: 14px;
      text-wrap: nowrap;
      display: block;
    }
  }

  @container (min-width: 340px) {
    fieldset {
      flex-direction: row;
      align-items: center;
      gap: 12px;
    }
  }
`;

const template = document.createElement('template');
template.innerHTML = `
  <style>${styles}</style>

  <fieldset>
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="" required />
    <span aria-live="polite">valid email required</span>
  </fieldset>

  <fieldset>
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="" required />
    <span aria-live="polite">required</span>
  </fieldset>

  <fieldset>
    <label for="remember" style="font-size: 12px">Remember Me</label>
    <input id="remember" type="checkbox" />
  </fieldset>
`;

export class Login extends HTMLElement {
  get #email() {
    return this.shadowRoot.querySelector('[type="email"]');
  }

  get #password() {
    return this.shadowRoot.querySelector('[type="password"]');
  }

  get #remember() {
    return this.shadowRoot.querySelector('[type="checkbox"]');
  }

  static formAssociated = true;

  #internals = this.attachInternals();

  #value = {
    email: '',
    password: '',
    remember: false,
  };

  get value() {
    return this.#value;
  }

  set value(value) {
    this.#value = { ...this.#value, ...value };

    // Update DOM
    this.#email.value = this.value.email;
    this.#password.value = this.value.password;
    this.#remember.checked = this.value.remember;

    // Update Form Value
    const formValue = new FormData();
    formValue.set(`${this.getAttribute('name')}-email`, this.value.email);
    formValue.set(`${this.getAttribute('name')}-password`, this.value.password);
    formValue.set(`${this.getAttribute('name')}-remember`, this.value.remember);
    this.#internals.setFormValue(formValue);
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('input', () => this.#updateValue());
    this.shadowRoot.addEventListener('change', () => this.#updateValue());
  }

  #updateValue() {
    this.value = {
      email: this.#email.value,
      password: this.#password.value,
      remember: this.#remember.checked,
    };
  }
}

customElements.define('ui-login', Login);
