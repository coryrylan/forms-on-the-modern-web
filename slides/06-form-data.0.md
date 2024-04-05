<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Form Data

```html
<form>
  <label>
    text
    <input type="text" name="my-text" value="1234" />
  </label>

  <label>
    select
    <select name="my-select">
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </select>
  </label>

  <fieldset>
    <legend>radio group</legend>
    <label>
      <input type="radio" name="my-radiogroup" value="1" checked />
      radio 1
    </label>
    <label>
      <input type="radio" name="my-radiogroup" value="2" />
      radio 2
    </label>
    <label>
      <input type="radio" name="my-radiogroup" value="3" />
      radio 3
    </label>
  </fieldset>

  <label>
    <input type="checkbox" name="my-checkbox" checked />
    checkbox
  </label>

  <button type="submit">submit</button>
</form>
```

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  console.log(formData.get('my-text'));
  console.log(formData.get('my-select'));
  console.log(formData.get('my-radiogroup'));
  console.log(formData.get('my-checkbox'));
  console.log(Object.fromEntries(formData));
});
```

<ui-demo width="40">
<form>
  <label>
    text
    <input type="text" name="my-text" value="1234" />
  </label>

  <label>
    select
    <select name="my-select">
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </select>
  </label>

  <fieldset>
    <legend>radio group</legend>
    <label>
      <input type="radio" name="my-radiogroup" value="1" checked />
      radio 1
    </label>
    <label>
      <input type="radio" name="my-radiogroup" value="2" />
      radio 2
    </label>
    <label>
      <input type="radio" name="my-radiogroup" value="3" />
      radio 3
    </label>
  </fieldset>

  <label>
    <input type="checkbox" name="my-checkbox" />
    checkbox
  </label>

  <button type="submit">submit</button>
</form>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    console.log(formData.get('my-text'));
    console.log(formData.get('my-select'));
    console.log(formData.get('my-radiogroup'));
    console.log(formData.get('my-checkbox'));
    console.log(Object.fromEntries(formData));
  });
</script>