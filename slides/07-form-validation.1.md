<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

<style>
  #invalid,
  #user-invalid {
    border: 2px solid #ccc !important;
  }

  #invalid:invalid {
    border: 2px solid red !important;
  }

  #user-invalid:user-invalid {
    border: 2px solid red !important;
  }
</style>

# Form Validation Styles

```css
input:invalid {
  border: 2px solid red;
}

input:user-invalid {
  border: 2px solid red;
}
```

```html
<form>
  <label for="invalid">:invalid</label>
  <input id="invalid" name="invalid" required />

  <label for="user-invalid">:user-invalid</label>
  <input id="user-invalid" name="user-invalid" required />

  <button>submit</button>
</form>
```

<ui-demo>
<form>
  <fieldset>
    <label for="invalid">:invalid</label>
    <input id="invalid" name="invalid" required />
  </fieldset>

  <fieldset>
    <label for="user-invalid">:user-invalid</label>
    <input id="user-invalid" name="user-invalid" required />
  </fieldset>

  <button>submit</button>
</form>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  const form = document.querySelector('form');
  form.novalidate = false;

  form.addEventListener('submit', e =>{
    e.preventDefault();
    // form.reportValidity();
    console.log(Object.fromEntries(new FormData(form)));
  });
</script>