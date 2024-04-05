<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/password.js"></script>
<style>
  h1 + pre {
    min-height: 38vh;
  }
</style>

# Form Associated Validation 

```javascript
connectedCallback() {
  this.shadowRoot.addEventListener('input', () => this.#updateValue());
  this.shadowRoot.addEventListener('change', () => this.#updateValue());
}

#updateValue() {
  this.#internals.setFormValue(this.#input.value);
  if (this.hasAttribute('required') && this.#input.value.length < 1) {
    this.#internals.setValidity({ valueMissing: true }, 'password required');
    this.#internals.reportValidity();
  } else {
    this.#internals.setValidity({ });
    this.#internals.reportValidity();
  }
}
```

```html
<form>
  <label for="password">Password</label>
  <ui-password id="password" name="password" required></ui-password>
  <button>Submit</button>
</form>
```

```javascript
const form = document.querySelector('form');
const password = document.querySelector('ui-password');

password.addEventListener('input', () => console.log(password.value));

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(form)));
});
```

<ui-demo width="25">
  <form>
    <fieldset>
      <label for="password">Password</label>
      <ui-password id="password" name="password" required></ui-password>
    </fieldset>
    <button>Submit</button>
  </form>
</ui-demo>

<ui-console></ui-console>

<script type="module">
const form = document.querySelector('form');
const password = document.querySelector('ui-password');

password.addEventListener('input', () => console.log(password.value));

form.addEventListener('submit', e => {
  e.preventDefault();
  password.checkValidity();
  console.log(Object.fromEntries(new FormData(form)));
});
</script>