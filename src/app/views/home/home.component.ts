import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <body class="body">
      <app-header></app-header>
      <main class="main">
        <p>Home main</p>
      </main>
      <app-footer></app-footer>
    </body>
  `,
  styles: ['.main {min-height: 70vh; margin-top: 1em;}'],
})
export class HomeComponent {}
