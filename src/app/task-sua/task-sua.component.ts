import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-sua',
  templateUrl: './task-sua.component.html',
  styleUrls: ['./task-sua.component.css'],
})
export class TaskSuaComponent implements OnInit {
  constructor(
    private d: DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  nvList: any;
  daList: any;
  loadData() {
    this.ta = this.ActivatedRoute.params.subscribe((data) => {
      console.log(data);
      let id = data['id'];
      this.ta = this.d.getMotTask(id).subscribe((data) => {
        console.log(data);
        this.ta = data;
      });
    });
  }

  ngOnInit(): void {
    this.loadData();
    this.nvList = this.d
      .getNhanVien()
      .subscribe((data) => (this.nvList = data));

    this.daList = this.d
    .getDuAn()
    .subscribe((data) => (this.daList = data));
  }

  @Input() ta: any;
  taskSua(ta: any) {
    this.d.suaTask(ta).subscribe((data) => {
      alert('Sửa thành công');
      console.log('Sửa', data);
      this.router.navigate(['task']);
    });
  }
}
