import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  key="911c8ca96c7e46aab1514715201507";
  url: any;
  conditions: any;

  private cities: any[] = [
    { 'name': 'Dallol' }, 
    { 'name': 'Fairbank' },
    { 'name': 'London' },
    { 'name': 'Recife' },
    { 'name': 'Vancouver' },
    { 'name': 'Yakutsk' }
  ];

  constructor(
    private http: HttpClient
  ) {

    this.url = "http://api.weatherapi.com/v1/forecast.json?key=";
    this.conditions = "https://www.weatherapi.com/docs/conditions.json"

  }

  getCities(){
    return this.cities;
  }

  getApiData(city: string){
    return this.http.get(
      //this.url + this.key + "&q=" + city
      this.url + this.key + "&q=" + city + "&days=1"
      //this.url + city + "&appid=" + this.key
    );
  }

  getConditionsData(){
    return this.http.get(
      this.conditions
    );
  }
  
}
