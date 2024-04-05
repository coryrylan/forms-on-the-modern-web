<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>
<style>
  pre + pre {
    min-height: 53vh;
  }
</style>

# Reusable Forms

```html
<form>
  <ui-login name="login"></ui-login>

  <label>
    Subscribe
    <input type="checkbox" name="subscribe-newsletter" checked />
  </label>

  <button>Login</button>
</form>
```

```javascript
import'./login.js';

const form = document.querySelector('form');
const login = document.querySelector('ui-login');

login.value = { email: 'test@test.com', remember: true };

login.addEventListener('input', () => {
  console.log(login.value);
});

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(Object.fromEntries(new FormData(form)));
});
```

<ui-demo>
  <form style="gap: 20px;">
    <ui-login name="login"></ui-login>
    <fieldset>
      <label style="font-size: 12px; font-weight: 400">
        Subscribe
        <input type="checkbox" name="subscribe-newsletter" checked />
      </label>
    </fieldset>
    <button>Login</button>
  </form>
</ui-demo>

<ui-console></ui-console>

<script type="module">
  import'./assets/login.js';

  const form = document.querySelector('form');
  const login = document.querySelector('ui-login');

  login.value = { email: 'test@test.com', remember: true };
  login.addEventListener('input', () => console.log(login.value));

  form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(form)));
  });
</script>