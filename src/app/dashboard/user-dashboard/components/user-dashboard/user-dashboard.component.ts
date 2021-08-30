import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/user/model/register';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  //this.userDetails = JSON.parse(localStorage.getItem('userDetails'));
  userDetails: Register = JSON.parse(
    localStorage.getItem('userDetails') || '{}'
  );
  constructor() {}

  ngOnInit(): void {}
}
