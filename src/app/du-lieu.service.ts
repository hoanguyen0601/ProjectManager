import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DuLieuService {
  [x: string]: any;

  constructor(private h:HttpClient) { }
  // getLogin(){
  //   return this.h.get('http://localhost:3000/user');
  // }
  // setlogin(tk: any) {
  //   return this.h.post('http://localhost:3000/user',tk);
  // }
  // xoatk(id:number){
  //   return this.h.delete('http://localhost:3000/user/'+ id)
  // }
  getUser(email: string){
    return this.h.get('http://localhost:3000/login/' +  email);
  }
  getUserAll(){
    return this.h.get('http://localhost:3000/login');
  }
  getTask(){
    return this.h.get('http://localhost:3000/task');
  }
  getMotTask(id:number){
    return this.h.get('http://localhost:3000/task/' + id);
  }
  getNhanVien(){
    return this.h.get('http://localhost:3000/nhanvien');
  }
  getMotNhanVien(id:number){
    return this.h.get('http://localhost:3000/nhanvien/' + id);
  }
  getDuAn(){
    return this.h.get('http://localhost:3000/duan');
  }
  getMotDuAn(id:number){
    return this.h.get('http://localhost:3000/duan/' + id);
  }
  themNhanVien(nv:any){
    return this.h.post('http://localhost:3000/nhanvien',nv);
  }
  themDuAn(da:any){
    return this.h.post('http://localhost:3000/duan',da);
  }
  themTask(t:any){
    return this.h.post('http://localhost:3000/task',t);
  }

  xoaNhanVien(id:number){
    return this.h.delete('http://localhost:3000/nhanvien/'+ id)
  }
  xoaTask(id:number){
    return this.h.delete('http://localhost:3000/task/'+ id)
  }
  xoaDuAn(id:number){
    return this.h.delete('http://localhost:3000/duan/'+ id)
  }


  suaDuAn(da:any){
    return this.h.put('http://localhost:3000/duan/' + da.id, da);
  }
  suaNhanVien(nv:any){
    return this.h.put('http://localhost:3000/nhanvien/' + nv.id, nv);
  }
  suaTask(ta:any){
    return this.h.put('http://localhost:3000/task/' + ta.id, ta);
  }

  getNameDuAn(nameSearch:string){
    return this.h.get('http://localhost:3000/duan/' + '?tenDuAn_like=' + nameSearch);
  }
  getNameNV(nameSearch:string){
    return this.h.get('http://localhost:3000/nhanvien/' + '?ten_like=' + nameSearch);
  }
  getNameTask(nameSearch:string){
    return this.h.get('http://localhost:3000/task/' + '?tenTask_like=' + nameSearch);
  }
}
