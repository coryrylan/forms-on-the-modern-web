<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

<style>
  form {
    display: grid;
    gap: 36px 12px;
    grid-template-columns: repeat(3, 1fr);
  }
</style>

# Advanced Input Types

```html
<label>
  range
  <input type="range" />
</label>

<label>
  color
  <input type="color" />
</label>

<label>
  date
  <input type="date" />
</label>

<label>
  password
  <input type="password" value="123456" />
</label>

<label>
  month
  <input type="month" />
</label>

<label>
  week
  <input type="week" />
</label>

<label>
  time
  <input type="time" />
</label>

<label>
  number
  <input type="number" />
</label>

<label>
  file
  <input type="file" />
</label>

<label>
  search
  <input type="search" />
</label>

<label>
  tel
  <input type="tel" />
</label>

<label>
  email
  <input type="email" />
</label>

<label>
  url
  <input type="url" />
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

<ui-demo width="55">
  <form>
    <label>
      range
      <input type="range" />
    </label>
    <label>
      color
      <input type="color" />
    </label>
    <label>
      date
      <input type="date" />
    </label>
    <label>
      password
      <input type="password" value="123456" />
    </label>
    <label>
      month
      <input type="month" />
    </label>
    <label>
      week
      <input type="week" />
    </label>
    <label>
      time
      <input type="time" />
    </label>
    <label>
      number
      <input type="number" />
    </label>
    <label>
      file
      <input type="file" />
    </label>
    <label>
      search
      <input type="search" />
    </label>
    <label>
      tel
      <input type="tel" />
    </label>
    <label>
      email
      <input type="email" />
    </label>
    <label>
      url
      <input type="url" />
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
  </form>
</ui-demo>