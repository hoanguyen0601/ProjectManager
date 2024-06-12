import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private d: DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) { }
  duanList: any
  taskList: any
  nvList: any
  ngOnInit(): void {
    this.duanList = this.d.getDuAn().subscribe ( 
      data => this.duanList= data
    );
    this.taskList = this.d.getTask().subscribe ( 
      data => this.taskList= data
    );
    this.nvList = this.d.getTask().subscribe ( 
      data => this.nvList= data
    );

    // this.listDA = this.duanList
  }

  xoaDA(id:number){
    if (confirm('Xóa thật không')==true){
      this.d.xoaDuAn(id).subscribe(data => alert('Xóa thành công'))
      this.router.navigate(['/'])
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
