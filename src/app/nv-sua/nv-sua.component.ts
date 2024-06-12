import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nv-sua',
  templateUrl: './nv-sua.component.html',
  styleUrls: ['./nv-sua.component.css']
})
export class NvSuaComponent implements OnInit {

  constructor(
    private d:DuLieuService,
    private ActivatedRoute:ActivatedRoute,
    private router:Router
  ) { }


  loadData(){
    this.nv = this.ActivatedRoute.params.subscribe( data => {
      console.log(data);
      let id = data['id']
      this.nv = this.d.getMotNhanVien(id).subscribe(data => {
        console.log(data);
        this.nv = data;
      })
    })
  }

  ngOnInit(): void {
    this.loadData()
  }

  @Input() nv:any;
  nvSua(nv:any){
    this.d.suaNhanVien(nv).subscribe ( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['nhanvien'])
    });

}

}
