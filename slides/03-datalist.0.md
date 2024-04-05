<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Datalist

```html
<label>
  range
  <input type="range" list="range-options" min="0" max="100" step="25" />
  <datalist id="range-options">
    <option value="0"></option>
    <option value="25"></option>
    <option value="50"></option>
    <option value="75"></option>
    <option value="100"></option>
  </datalist>
</label>

<label>
  color
  <input type="color" list="color-options" />
  <datalist id="color-options">
    <option value="#ffffff"></option>
    <option value="#cccccc"></option>
    <option value="#000000"></option>
    <option value="#76b900"></option>
  </datalist>
</label>

<label>
  time
  <input type="time" list="time-options" />
  <datalist id="time-options">
    <option value="12:00"></option>
    <option value="13:00"></option>
    <option value="14:00"></option>
  </datalist>
</label>

<label>
  search
  <input type="search" list="search-options" />
  <datalist id="search-options">
    <option value="Chrome"></option>
    <option value="Chrome (Beta)"></option>
    <option value="Firefox"></option>
    <option value="Firefox (Beta)"></option>
    <option value="Safari"></option>
    <option value="Safari (Beta)"></option>
    <option value="Edge"></option>
    <option value="Edge (Beta)"></option>
  </datalist>
</label>
```

<ui-demo>
  <label>
    range
    <input type="range" list="range-options" min="0" max="100" step="25" />
    <datalist id="range-options">
      <option value="0"></option>
      <option value="25"></option>
      <option value="50"></option>
      <option value="75"></option>
      <option value="100"></option>
    </datalist>
  </label>
  <label>
    color
    <input type="color" list="color-options" />
    <datalist id="color-options">
      <option value="#ffffff"></option>
      <option value="#cccccc"></option>
      <option value="#000000"></option>
      <option value="#76b900"></option>
    </datalist>
  </label>
  <label>
    time
    <input type="time" list="time-options" />
    <datalist id="time-options">
      <option value="12:00"></option>
      <option value="13:00"></option>
      <option value="14:00"></option>
    </datalist>
  </label>
  <label>
    search
    <input type="search" list="search-options" />
    <datalist id="search-options">
      <option value="Chrome"></option>
      <option value="Chrome (Beta)"></option>
      <option value="Firefox"></option>
      <option value="Firefox (Beta)"></option>
      <option value="Safari"></option>
      <option value="Safari (Beta)"></option>
      <option value="Edge"></option>
      <option value="Edge (Beta)"></option>
    </datalist>
  </label>
</ui-demo>