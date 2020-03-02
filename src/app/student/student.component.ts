import { Component, OnInit } from '@angular/core';
import {DataService} from '../Services/data.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentData:any = [];
  weatherData:any = [];

  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
    (data)=> {
      this.studentData = data.students;
      console.log(this.studentData);
      }
    );

    this.service.GetWeatherData().subscribe(
      (wdata)=>{
        this.weatherData = wdata.weather;
        console.log(this.weatherData);
      }
    );
  }
}
