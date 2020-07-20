import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: any;
  selectedCity: any;

  constructor(
    private router: Router,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    document.body.style.backgroundColor = "#0f0f0f";
    this.cities = this.weatherService.getCities();
  }

  selectCity(city){
    this.selectedCity = city;
    console.log(this.selectedCity);
    this.router.navigate(['/weather/city/'+this.selectedCity]);
  }

}
