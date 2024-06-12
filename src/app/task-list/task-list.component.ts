import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private d:DuLieuService
    ,private ActivatedRoute:ActivatedRoute,
    private router:Router) { }

  taskList: any
  ngOnInit(): void {
    this.taskList = this.d.getTask().subscribe ( 
      data => this.taskList= data
    );
  }

  xoaT(id:number){
    if (confirm('Bạn chắc chắn xóa ?')==true){
      this.d.xoaTask(id).subscribe(data => alert('Xóa thành công'))
      this.router.navigate(['task'])
    }

}

searchName: any;
searchByName(){
  console.log(this.searchName);
  this.d.getNameTask(this.searchName).subscribe(
    data => this.taskList = data
  );
  
}
}
