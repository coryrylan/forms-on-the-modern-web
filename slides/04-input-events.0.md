<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Input Events - Input

```html
<label>
  text
  <input type="text" />
</label>
```

```javascript
const input = document.querySelector('input[type=text]');

input.addEventListener('input', event => {
  console.log(event, input.value);
});
```

<ui-demo>
  <label>
    text
    <input type="text" />
  </label>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  const input = document.querySelector('input[type=text]');
  input.addEventListener('input', e => console.log(e, input.value));
</script>
