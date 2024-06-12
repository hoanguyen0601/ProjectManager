import { Component, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authService: any;
  constructor(private d: DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) { }
  user: any;
  users: any;
  ngOnInit(): void {
    this.users = this.d.getUserAll().subscribe(
      data => this.users = data
      );


  }
  login(f: any) {
    const email = f.email;
    const password = f.password;
    console.log(email, password);

    this.users.forEach((e: { email: string; password: string; }) => {
      if(e.email == email){
        if(e.password == password){
          sessionStorage.setItem('email', email);
          alert('đăng nhập thành công');
          this.router.navigate(['']);
          setTimeout(function() {
            location.reload();
        }, 2000); // 3000 milliseconds = 3 seconds
        }else{
          alert('sai mật khẩu');
        }
      }

    });
  }


}
