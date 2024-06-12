import { Component, OnInit } from '@angular/core';
import { DuLieuService } from './du-lieu.service';
import { ActivatedRoute,Router } from '@angular/router';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
[x: string]: any;

  constructor(private d: DuLieuService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router) {

     }
  title = 'asm-2';
  da:any;
  // tk = sessionStorage.getItem('email');

  tk = sessionStorage.getItem('email');




ganSP(da:any){
  this.da=da;
  console.log(this.da);
}

ngOnInit(): void {
  // throw new Error('Method not implemented.');

}
logout(){
  sessionStorage.removeItem('email')
}
}
