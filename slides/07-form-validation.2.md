<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

<style>
  [aria-live='polite'] {
    color: red;
    font-size: 12px;
    display: none;
  }

  fieldset:has(:user-invalid) {
    input {
      border: 2px solid red;
    }

    [aria-live='polite'] {
      display: block;
    }
  }
</style>

# Form Validation Custom Messages

```css
[aria-live='polite'] {
  display: none;
}

fieldset:has(:user-invalid) {
  input {
    border: 2px solid red;
  }

  [aria-live='polite'] {
    display: block;
  }
}
```

```html
<form novalidate>
  <fieldset>
    <label for="email">email</label>
    <input type="email" id="email" name="email" required />
    <span aria-live="polite">valid email required</span>
  </fieldset>

  <fieldset>
    <label for="password">password</label>
    <input type="password" id="password" name="password" required />
    <span aria-live="polite">required</span>
  </fieldset>

  <button>submit</button>
</form>
```

<ui-demo>
  <form novalidate>
    <fieldset>
      <label for="email">email</label>
      <input type="email" id="email" name="email" required />
      <span aria-live="polite">valid email required</span>
    </fieldset>
    <fieldset>
      <label for="password">password</label>
      <input type="password" id="password" name="password" required />
      <span aria-live="polite">required</span>
    </fieldset>
    <button>submit</button>
  </form>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  const form = document.querySelector('form');

  form.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(form)));
  });
</script>