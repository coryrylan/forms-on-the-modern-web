<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/password.js"></script>

# Reusable Form Control - Properties

```javascript
class Password extends HTMLElement {
  set value(value) {
    this.#input.value = value;
  }

  get value() {
    return this.#input.value;
  }

  get #input() {
    return this.shadowRoot.querySelector('input');
  }
  ...
}

customElements.define('ui-password', Password);
```

```javascript
import'./password.js';

document.querySelector('ui-password').value = '123456';
```

<ui-demo>
  <form>
    <fieldset>
      <label for="password">Password</label>
      <ui-password id="password" name="password" value="123456"></ui-password>
    </fieldset>
  </form>
</ui-demo>
