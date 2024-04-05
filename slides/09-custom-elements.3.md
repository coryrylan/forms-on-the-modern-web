<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/greeting.js"></script>
<style>
  pre + pre {
    min-height: 60vh;
  }
</style>

# Custom Elements Life Cycle

```html
<ui-greeting></ui-greeting>
```

```javascript
class UIGreeting extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; border: 1px solid #ccc; }
      </style>
      <p>Hello World!</p>
    `;
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
  }
}

customElements.define('ui-greeting', UIGreeting);
```

<ui-demo>
  <ui-greeting>World</ui-greeting>
</ui-demo>