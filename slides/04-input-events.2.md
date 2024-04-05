<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Selection Events - Change

```html
<label>
  select
  <select>
    <option value="1">option 1</option>
    <option value="2">option 2</option>
    <option value="3">option 3</option>
  </select>
</label>
```

```javascript
const select = document.querySelector('select');

select.addEventListener('input', event => {
  console.log(event, select.value);
});

select.addEventListener('change', event => {
  console.log(event, select.value);
});
```

<ui-demo>
  <label>
    select
    <select>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </select>
  </label>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  const select = document.querySelector('select');
  select.addEventListener('input', e => console.log(e, select.value));
  select.addEventListener('change', e => console.log(e, select.value));
</script>
