import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  constructor(private service: SharedService) {}
  movies: any = [];
  EmployeeList: any = [];

  ngOnInit(): void {
    this.refreshContentList();
  }

  // refreshEmployeeList(){
  //   this.service.getEmployee().subscribe(data=>{
  //     console.log('Employeedata -> ', data);
  //     this.EmployeeList = data
  //   })
  // }

  refreshContentList() {
    this.service.getContent().subscribe((data) => {
      // console.warn('Content', data)
      this.movies = data;
    });
  }
}
