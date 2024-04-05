<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/password.js"></script>

# Reusable Form Control

```javascript
class Password extends HTMLElement {
  get #input() {
    return this.shadowRoot.querySelector('input');
  }

  get #button() {
    return this.shadowRoot.querySelector('button');
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <input type="password" />
      <button aria-label="show password">
        <svg id="eye"></svg>
        <svg id="eye-hidden"></svg>
      </button>
    `;
  }

  connectedCallback() {
    this.#button.addEventListener('click', () => {
      const show = this.#input.type === 'password';
      this.#input.type = show ? 'text' : 'password';
    });

    ...
  }
}

customElements.define('ui-password', Password);
```

<ui-demo>
  <form>
    <fieldset>
      <label for="password">Password</label>
      <ui-password id="password" name="password"></ui-password>
    </fieldset>
  </form>
</ui-demo>
