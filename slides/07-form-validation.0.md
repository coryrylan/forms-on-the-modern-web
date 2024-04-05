<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Form Validation

```html
<form>
  <label for="required-input">required input</label>
  <input id="required-input" required />

  <button>submit</button>
</form>
```

<ui-demo>
<form>
  <fieldset>
    <label for="required-input">required input</label>
    <input id="required-input" name="required-input" required />
  </fieldset>
  <button>submit</button>
</form>
</ui-demo>

<script type="module">
  const form = document.querySelector('form');
  form.novalidate = false;

  form.addEventListener('submit', e =>{
    e.preventDefault();
    form.reportValidity();
    console.log(Object.fromEntries(new FormData(form)));
  });
</script>