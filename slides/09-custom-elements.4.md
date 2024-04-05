<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/greeting.js"></script>
<style>
  pre + pre + pre {
    min-height: 65vh;
  }
</style>

# Custom Elements APIs

```html
<ui-greeting><span>Slot</span></ui-greeting>

<ui-greeting name="Attribute"></ui-greeting>

<ui-greeting></ui-greeting>
```

```javascript
document.querySelector('ui-greeting').name = 'Property';
```

```javascript
class UICustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>...</style>
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
```

<ui-demo>
  <ui-greeting><span>Slot</span></ui-greeting>
  <ui-greeting name="Attribute"></ui-greeting>
  <ui-greeting name="Property"></ui-greeting>
</ui-demo>