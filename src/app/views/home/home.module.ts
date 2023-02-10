// ********** MODULES **********
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// ********** COMPONENTS **********
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { BannerComponent } from '../components/homeComponents/banner/banner.component';
import { PreviewComponent } from '../components/homeComponents/preview/preview.component';
import { FooterComponent } from '../components/footer/footer.component';

const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    PreviewComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(homeRoutes), FontAwesomeModule],
  exports: [HeaderComponent],
})
export class HomeModule {}
