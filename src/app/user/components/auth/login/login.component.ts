import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/user/model/login';
import { AuthService } from 'src/app/user/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: Login = { email: '', password: '' };
  errors: any;
  decoded: any = {};
  //register: Register = { name: '', email: '', password: '', password2: '' };

  constructor(private authService: AuthService, private router: Router) {}
  loginSubmit() {
    console.log(JSON.stringify(this.login));
    this.authService.loginUser(this.login).subscribe(
      (res) => {
        console.log(JSON.stringify(res.token));
        localStorage.setItem('token', res.token);
        this.decoded = jwt_decode(res.token);
        localStorage.setItem('userDetails', JSON.stringify(this.decoded));
        console.log(this.decoded);
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log(JSON.stringify(err.error));
        this.errors = err.error;
      }
    );
  }
  ngOnInit(): void {}
}
