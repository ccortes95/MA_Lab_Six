import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetStudentData():Observable<any>{
   return this.http.get('https://www.jsonblob.com/api/jsonblob/9d622957-596b-11ea-b72c-cb4ccce30260');
  }

  GetWeatherData(): Observable<any>{
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303');
  }

}
