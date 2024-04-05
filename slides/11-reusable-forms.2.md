<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Reusable Forms - Form Values

```javascript
export class Login extends HTMLElement {
  static formAssociated = true;

  #internals = this.attachInternals();

  #value = { email: '', password: '', remember: false };

  get value() { return this.#value; }

  set value(value) {
    this.#value = { ...this.#value, ...value };

    // Update DOM
    this.shadowRoot.querySelector('[type="email"]').value = this.value.email;
    this.shadowRoot.querySelector('[type="password"]') = this.value.password;
    this.shadowRoot.querySelector('[type="checkbox"]').checked = this.value.remember;

    // Update Form Value
    const formValue = new FormData();
    formValue.set(`${this.getAttribute('name')}-email`, this.value.email);
    formValue.set(`${this.getAttribute('name')}-password`, this.value.password);
    formValue.set(`${this.getAttribute('name')}-remember`, this.value.remember);
    this.#internals.setFormValue(formValue);
  }

  ...
}
```
