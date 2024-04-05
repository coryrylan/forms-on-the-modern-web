<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<script type="module" src="./assets/password.js"></script>

# Reusable and Custom Form Controls

```html
<input type="password" />
```

```html
<ui-password></ui-password>
```

<ui-demo>
  <form>
    <fieldset>
      <label for="password">Password</label>
      <input id="password" type="password" />
    </fieldset>
    <fieldset>
      <label for="custom-password">Password</label>
      <ui-password id="custom-password" name="password"></ui-password>
    </fieldset>
  </form>
</ui-demo>