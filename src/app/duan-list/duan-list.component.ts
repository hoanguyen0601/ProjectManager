import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-duan-list',
  templateUrl: './duan-list.component.html',
  styleUrls: ['./duan-list.component.css']
})
export class DuanListComponent implements OnInit {

  constructor(private d:DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) { }
  duanList: any
  ngOnInit(): void {
    this.duanList = this.d.getDuAn().subscribe ( 
      data => this.duanList= data
    );
  }

  xoaDA(id:number){
    if (confirm('Bạn chắc chắn xóa ?')==true){
      this.d.xoaDuAn(id).subscribe(data => alert('Xóa thành công'))
      this.router.navigate(['duan']);
    }

}

searchName: any;
searchByName(){
  console.log(this.searchName);
  this.d.getNameDuAn(this.searchName).subscribe(
    data => this.duanList = data
  );
  
}
}
