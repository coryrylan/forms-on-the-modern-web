<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/login.js"></script>
<style>
  pre + pre {
    min-height: 53vh;
  }
</style>

# Responsive Forms

```html
<form>
  <ui-login name="login"></ui-login>

  <button>Login</button>
</form>
```

```css
:host {
  contain: layout;
  container-type: inline-size;
}

@container (min-width: 340px) {
  fieldset {
    flex-direction: row;
    align-items: center;
    gap: 12px;
  }
}
```

<ui-demo width="50">
  <form style="resize: horizontal; display: block; width: 100%; overflow: auto;">
    <ui-login name="login"></ui-login>
    <br>
    <button>Login</button>
  </form>
</ui-demo>
