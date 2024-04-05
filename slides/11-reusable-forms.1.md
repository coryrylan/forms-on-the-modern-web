<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Reusable Forms - Template

```javascript
export class Login extends HTMLElement {

  static formAssociated = true;

  #internals = this.attachInternals();

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>...</style>

      <label for="email">Email</label>
      <input id="email" type="email" required />
      <span aria-live="polite">valid email required</span>

      <label for="password">Password</label>
      <input id="password" type="password" required />
      <span aria-live="polite">required</span>

      <label for="remember">Remember Me</label>
      <input id="remember" type="checkbox" />`;
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('input', () => this.#updateValue());
    this.shadowRoot.addEventListener('change', () => this.#updateValue());
  }

  #updateValue() {
    this.value = {
      email: this.shadowRoot.querySelector('[type="email"]').value,
      password: this.shadowRoot.querySelector('[type="password"]').value,
      remember: this.shadowRoot.querySelector('[type="checkbox"]').checked,
    };
  }
}

customElements.define('ui-login', Login);
```
