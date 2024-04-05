<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Form Events

```html
<form>
  <label>
    text
    <input type="text" />
  </label>

  <label>
    select
    <select>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </select>
  </label>

  <fieldset>
    <legend>radio group</legend>
    <label>
      <input type="radio" name="radiogroup" checked />
      radio 1
    </label>
    ...
  </fieldset>

  <button type="button">cancel</button>
  <button>submit</button>
</form>
```

```javascript
const form = document.querySelector('form');

form.addEventListener('input', event => console.log(event));

form.addEventListener('change', event => console.log(event));

form.addEventListener('submit', event => {
  event.preventDefault();
  console.log(event);
});
```

<ui-demo>
  <form>
    <label>
      text
      <input type="text" />
    </label>
    <label>
      select
      <select>
        <option value="1">option 1</option>
        <option value="2">option 2</option>
        <option value="3">option 3</option>
      </select>
    </label>
    <fieldset>
      <legend>radio group</legend>
      <label>
        <input type="radio" name="radiogroup" checked />
        radio 1
      </label>
      <label>
        <input type="radio" name="radiogroup" />
        radio 2
      </label>
      <label>
        <input type="radio" name="radiogroup" />
        radio 3
      </label>
    </fieldset>
    <div>
      <button type="button">cancel</button>
      <button type="submit">submit</button>
    </div>
  </form>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  const form = document.querySelector('form');

  form.addEventListener('input', e => console.log(e));

  form.addEventListener('change', e => console.log(e));
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
  });
</script>