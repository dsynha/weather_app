import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { WeatherComponent } from './components/weather/weather.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherService } from './services/weather/weather.service';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
