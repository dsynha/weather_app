import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather/weather.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weatherData: any = [];
  cityName: string = "";

  public loading = false;

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.cityName = this.routeActivated.snapshot.params.id;
    this.getWeatherData();
    //this.getConditionsList();
  }

  timeInMs = Date.now();
  todayDate : Date = new Date();

  currentTemp: any;
  getWeatherData(){
    this.loading = true;
    return this.weatherService.getApiData(this.cityName).subscribe( data => {
      this.loading = false;
      this.weatherData = data;
      this.currentTemp = this.weatherData.current.temp_c;
      this.setBackgroundColorAndIcon();
      this.checkNightIcon();
    }, err => {
      this.loading = false;
    }, () => {
      this.loading = false;
    });
  }

/*   getConditionsList(){
    return this.weatherService.getConditionsData().subscribe( data => {
      console.log(data);
    });
  } */

  backIcon: any;
  tempIcon: any;
  tempMinIcon: any;
  tempMaxIcon: any;
  dawnIcon: any;
  morningIcon: any;
  afternoonIcon: any;
  nightIcon: any;
  setBackgroundColorAndIcon(){
    if(this.currentTemp > 17){
      document.body.style.backgroundColor = "#3BA1B5";
      document.body.style.color = "#fff";
      this.backIcon = "../../../assets/img/white-icons/left-arrow.svg";
      this.tempIcon = "../../../assets/img/white-icons/sun.svg";
      this.tempMinIcon = "../../../assets/img/white-icons/min.svg";
      this.tempMaxIcon = "../../../assets/img/white-icons/max.svg";
      this.dawnIcon = "../../../assets/img/white-icons/rain.svg";
      this.morningIcon = "../../../assets/img/white-icons/sun.svg";
      this.afternoonIcon = "../../../assets/img/white-icons/rain.svg";
      this.nightIcon = "../../../assets/img/white-icons/moon.svg";
    }else if(this.currentTemp <= 17){
      document.body.style.backgroundColor = "#3C4353";
      document.body.style.color = "#fff";
      this.backIcon = "../../../assets/img/white-icons/left-arrow.svg";
      this.tempIcon = "../../../assets/img/white-icons/rain.svg";
      this.tempMinIcon = "../../../assets/img/white-icons/min.svg";
      this.tempMaxIcon = "../../../assets/img/white-icons/max.svg";
      this.dawnIcon = "../../../assets/img/white-icons/rain.svg";
      this.morningIcon = "../../../assets/img/white-icons/sun.svg";
      this.afternoonIcon = "../../../assets/img/white-icons/rain.svg";
      this.nightIcon = "../../../assets/img/white-icons/moon.svg";
    }else if(this.currentTemp <= 10){
      document.body.style.backgroundColor = "#A6A6A6"
      document.body.style.color = "#000";
      this.backIcon = "../../../assets/img/black-icons/left-arrow.svg";
      this.tempIcon = "../../../assets/img/black-icons/snow.svg";
      this.tempMinIcon = "../../../assets/img/black-icons/min.svg";
      this.tempMaxIcon = "../../../assets/img/black-icons/max.svg";
      this.dawnIcon = "../../../assets/img/black-icons/snow.svg";
      this.morningIcon = "../../../assets/img/black-icons/snow-sun.svg";
      this.afternoonIcon = "../../../assets/img/black-icons/snow.svg";
      this.nightIcon = "../../../assets/img/black-icons/snow-moon.svg";
    }
  }

  checkNightIcon(){
    if(this.nightIcon == "../../../assets/img/white-icons/moon.svg"){
      document.getElementById('reduce').style.width = "30px";
      document.getElementById('reduce').style.height = "30px";
    }
  }

  back(){
    this.router.navigate(['/home']);
    document.body.style.backgroundColor = "#0f0f0f";
  }

}