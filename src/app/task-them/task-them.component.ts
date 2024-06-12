import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DuLieuService } from '../du-lieu.service';

@Component({
  selector: 'app-task-them',
  templateUrl: './task-them.component.html',
  styleUrls: ['./task-them.component.css']
})
export class TaskThemComponent implements OnInit {
  constructor(private d:DuLieuService) { }
  nvList: any
  daList: any
  tenTask: string = '';
  duAnID: string = '';
  nhanvienID : string = '';
  moTa : string = '';

  ngOnInit(): void {
    this.nvList = this.d.getNhanVien().subscribe ( 
      data => this.nvList= data
    );
    this.daList = this.d.getDuAn().subscribe ( 
      data => this.daList= data
    );
  }

  taskThem(t:any){
    var tenTask= t.tenTask;
    var duAnID= t.duAnID;
    var nhanvienID= t.nhanvienID;
    var moTa= t.moTa;
    var status= t.status;
    var priority= t.priority;
    console.log(tenTask,duAnID,nhanvienID,moTa,status,priority);
    this.d.themTask(t).subscribe ( data => alert('Thêm thành công'));
  }



}
