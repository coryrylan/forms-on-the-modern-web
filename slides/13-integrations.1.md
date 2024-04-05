<link rel="stylesheet" href="./assets/index.css" />
<script type="module" src="./assets/index.js"></script>

<style>
  h1 {
    display: flex;
    align-items: center;
    gap: 12px;
    
  }
  img {
    width: 100%;
    max-width: 24px;
  }
</style>

<h1>Integrations - Angular <img src="assets/angular.svg" alt="Angular" /></h1>



```typescript
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import './login.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <ui-login [(ngModel)]="value" name="login" ngDefaultControl></ui-login>
    <pre>{{value | json}}</pre>
  `,
  styleUrl: './app.component.css',
  imports: [RouterOutlet, JsonPipe, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  value = {
    email: 'test@example.com',
    password: '',
    remember: true
  };
}
```

<ui-demo>
  <ui-login name="login"></ui-login>
<pre>
{
  "email": "test@example.com",
  "password": "",
  "remember": true
}
</pre>
</ui-demo>

<script type="module">
  import'./assets/login.js';

  const login = document.querySelector('ui-login');
  login.value = { email: 'test@test.com', remember: true };
</script>