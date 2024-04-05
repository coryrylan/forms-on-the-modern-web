<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

# Input Types

```html
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

<fieldset>
  <legend>checkbox group</legend>
  <label>
    checkbox
    <input type="checkbox" value="1" />
  </label>
  <label>
    checkbox
    <input type="checkbox" value="2" />
  </label>
  <label>
    checkbox
    <input type="checkbox" value="3" />
  </label>
</fieldset>

<label>
  select
  <select>
    <option value="1">option 1</option>
    <option value="2">option 2</option>
    <option value="3">option 3</option>
  </select>
</label>

<label>
  text
  <input type="text" />
</label>

<label>
  textarea
  <textarea></textarea>
</label>
```

<ui-demo>
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

  <fieldset>
    <legend>checkbox group</legend>
    <label>
      checkbox
      <input type="checkbox" value="1" />
    </label>
    <label>
      checkbox
      <input type="checkbox" value="2" />
    </label>
    <label>
      checkbox
      <input type="checkbox" value="3" />
    </label>
  </fieldset>

  <label>
    select
    <select>
      <option value="1">option 1</option>
      <option value="2">option 2</option>
      <option value="3">option 3</option>
    </select>
  </label>

  <label>
    text
    <input type="text" />
  </label>

  <label>
    textarea
    <textarea></textarea>
  </label>
</ui-demo>