<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/password.js"></script>
<style>
  h1 + pre {
    min-height: 46vh;
  }
</style>

# Form Associated Controls

```javascript
class Password extends HTMLElement {
  ...
  static formAssociated = true;

  #internals = this.attachInternals();

  set value(value) {
    this.#input.value = value;
    this.#internals.setFormValue(value);
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('input', () => this.#updateValue());
    this.shadowRoot.addEventListener('change', () => this.#updateValue());
  }

  #updateValue() {
    this.#internals.setFormValue(this.#input.value);
  }
  ...
}
```

```html
<form>
  <label for="password">Password</label>
  <ui-password id="password" name="my-password"></ui-password>
</form>
```

```javascript
const form = document.querySelector('form');
const password = document.querySelector('ui-password');

password.value = '123456';
password.addEventListener('input', () => console.log(password.value));

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(form)));
});
```

<ui-demo>
  <form>
    <fieldset>
      <label for="password">Password</label>
      <ui-password id="password" name="my-password"></ui-password>
    </fieldset>
    <button>Submit</button>
  </form>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  import'./assets/password.js';

  const form = document.querySelector('form');
  const password = document.querySelector('ui-password');

  password.value = '123456';
  password.addEventListener('input', () => console.log(password.value));

  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(form)));
  });
</script>
