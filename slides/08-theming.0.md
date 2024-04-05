 <link rel="stylesheet" href="./assets/index.css" />
 <script type="module" src="./assets/index.js"></script>
 
 # Theming

 <style>
  :root {
    color-scheme: light;
    accent-color: var(--accent-color);
    --accent-color: #0670C1;
  }

  [dark-theme] ui-demo {
    color: #fff;
    background: #2d2d2d;
  }

  button {
    background: color-mix(in hsl, var(--accent-color) 95%, #000) !important;
    color: #fff !important;

    &:hover {
      background: color-mix(in hsl, var(--accent-color) 95%, #000);
    }
  }
</style>

```css
:root {
  color-scheme: light;
  accent-color: var(--accent-color);
  --accent-color: #0670c1;
}

button {
  background: var(--accent-color);
}
```

```html
<button type="button">button</button>

<label>
  progress
  <progress max="100" value="50">50%</progress>
</label>

<label>
  <input type="checkbox" value="dark" />
  dark theme
</label>

<label>
  <input type="checkbox" value="" />
  checkbox
</label>

<label>
  accent color
  <input type="color" value="#0670C1" />
</label>
```

<ui-demo>
  <form>
    <button type="button">button</button>
    <label>
      range
      <input type="range" />
    </label>
    <label>
      progress
      <progress max="100" value="50">50%</progress>
    </label>
    <fieldset>
      <legend>radiogroup</legend>
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
    <label>
      <input type="checkbox" value="dark" checked />
      dark theme
    </label>
    <label>
      accent color
      <input type="color" value="#0670C1" />
    </label>
  </form>
</ui-demo>

<script type="module">
  const root = document.querySelector(':root');
  document.body.setAttribute('dark-theme', '');

  document.querySelector('[type=color]').addEventListener('input', e => {
    root.style.setProperty('--accent-color', e.target.value);
  });

  document.querySelector('[type=checkbox]').addEventListener('input', e => {
    // root.style.setProperty('--color-scheme', e.target.checked ? e.target.value : 'light');

    // normally above is what is needed but for VSCode demo this is needed
    e.target.checked ? document.body.setAttribute('dark-theme', '') : document.body.removeAttribute('dark-theme') ;
  });
</script>
