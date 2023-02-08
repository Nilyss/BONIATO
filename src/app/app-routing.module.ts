// ********** MODULES **********
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ********** ROUTES **********
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
})
export class AppRoutingModule {}
