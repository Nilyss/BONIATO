import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <body class="body">
      <app-header></app-header>
      <main class="main">
        <app-banner></app-banner>
        <app-preview></app-preview>
      </main>
      <app-footer></app-footer>
    </body>
  `,
  styles: ['.main {min-height: 70vh;}'],
})
export class HomeComponent {}
