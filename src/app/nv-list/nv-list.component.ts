import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-nv-list',
  templateUrl: './nv-list.component.html',
  styleUrls: ['./nv-list.component.css']
})
export class NvListComponent implements OnInit {

  constructor(private d:DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) { }
  nvList: any
  ngOnInit(): void {
    this.nvList = this.d.getNhanVien().subscribe ( 
      data => this.nvList= data
    );
  }

  xoaNV(id:number){
    if (confirm('Bạn chắc chắn xóa ?')==true){
      this.d.xoaNhanVien(id).subscribe(data => alert('Xóa thành công'))
      this.router.navigate(['nhanvien'])
    }
}

searchName: any;
searchByName(){
  console.log(this.searchName);
  this.d.getNameNV(this.searchName).subscribe(
    data => this.nvList = data
  );
  
}

}
