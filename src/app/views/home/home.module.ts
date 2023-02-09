// ********** MODULES **********
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// ********** COMPONENTS **********
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), FontAwesomeModule],
  exports: [HeaderComponent],
})
export class HomeModule {}
