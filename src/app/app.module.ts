import { RouterOutlet } from '@angular/router';
// ********** MODULES **********
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './views/home/home.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// ********** COMPONENTS **********
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterOutlet,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
