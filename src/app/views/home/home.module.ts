// ********** MODULES **********
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// ********** COMPONENTS **********
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes)],
})
export class HomeModule {}
