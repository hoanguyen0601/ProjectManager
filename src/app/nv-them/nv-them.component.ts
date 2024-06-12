import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nv-them',
  templateUrl: './nv-them.component.html',
  styleUrls: ['./nv-them.component.css']
})
export class NvThemComponent implements OnInit {

  constructor(private d: DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  nvthem(nv:any){
    var ho= nv.ho;
    var ten= nv.ten;
    var ngaysinh= nv.ngaysinh;
    var phai= nv.phai;
    var khuvuc= nv.khuvuc;
    console.log(ho,ten,ngaysinh,phai,khuvuc);
    this.d.themNhanVien(nv).subscribe ( data => alert('Thêm thành công'));
    this.router.navigate(['nhanvien'])
  }

  

}
