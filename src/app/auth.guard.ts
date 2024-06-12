import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, ActivatedRoute,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DuLieuService } from './du-lieu.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private d :DuLieuService,
    private ActivatedRoute: ActivatedRoute, private router: Router) {}

  canActivate(): boolean {
    if (!!sessionStorage.getItem('email')) { // Kiểm tra nếu người dùng đã đăng nhập
      return true;
    } else {
      this.router.navigate(['login']); // Điều hướng đến trang đăng nhập nếu chưa đăng nhập
      return false;
    }
  }
}
