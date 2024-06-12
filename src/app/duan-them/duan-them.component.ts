import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';


@Component({
  selector: 'app-duan-them',
  templateUrl: './duan-them.component.html',
  styleUrls: ['./duan-them.component.css']
})
export class DuanThemComponent implements OnInit {

  constructor(private d:DuLieuService) { }
  nvList: any
  tenDuAn: string = '';
  tien: string = '';
  ngayStart : string = '';

  ngOnInit(): void {
    this.nvList = this.d.getNhanVien().subscribe ( 
      data => this.nvList= data
    );
  }
  

  themDA(da:any){
    var tenDA= da.tenDuAn;
    var ngayStart= da.ngayStart;
    var tien= da.tien;
    var leader= da.leader;
    var thanhvien= da.thanhvien;
    console.log(tenDA,ngayStart,tien,leader,thanhvien);
    this.d.themDuAn(da).subscribe ( data => alert('Thêm thành công'));
    console.log("Data: ",da);
    console.log("Tên Dự Án:", this.tenDuAn);
    console.log("Ngày Dự Án", this.ngayStart);
  }

}
