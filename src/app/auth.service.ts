import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Giả định phương thức kiểm tra đăng nhập
  isLoggedIn(): boolean {
    // Kiểm tra trạng thái đăng nhập của người dùng
    // Ví dụ: kiểm tra token trong localStorage
    return !!sessionStorage.getItem('email');
  }
  // Giả định phương thức đăng xuất
  logout(): void {
    sessionStorage.removeItem('email');
  }
}
