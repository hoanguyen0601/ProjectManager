import { Component, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-duan-sua',
  templateUrl: './duan-sua.component.html',
  styleUrls: ['./duan-sua.component.css']
})
export class DuanSuaComponent implements OnInit {
  
  constructor(
    private d:DuLieuService,
    private ActivatedRoute:ActivatedRoute,
    private router:Router
    ) { }

    loadData(){
      this.da = this.ActivatedRoute.params.subscribe( data => {
        console.log(data);
        let id = data['id']
        this.da = this.d.getMotDuAn(id).subscribe(data => {
          console.log(data);
          this.da = data;
        })
      })
    }

  nvList: any
  ngOnInit(): void {
    this.nvList = this.d.getNhanVien().subscribe ( 
      data => this.nvList= data
    );

    this.loadData()
  }

  @Input() da:any;
  suaDA(da:any){
    this.d.suaDuAn(da).subscribe ( data => { 
      alert('Sửa thành công');
      console.log("Sửa",data);
      this.router.navigate(['duan'])
    });

}
}
