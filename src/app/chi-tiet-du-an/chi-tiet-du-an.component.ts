import { Component, Input, OnInit } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-chi-tiet-du-an',
  templateUrl: './chi-tiet-du-an.component.html',
  styleUrls: ['./chi-tiet-du-an.component.css']
})
export class ChiTietDuAnComponent implements OnInit {

  constructor(private d: DuLieuService,
    private ActivatedRoute: ActivatedRoute) { }

  

  loadData() {
    this.da = this.ActivatedRoute.params.subscribe((data) => {
      console.log(data);
      let id = data['id'];
      this.da = this.d.getMotDuAn(id).subscribe((data) => {
        console.log(data);
        this.da = data;
      });
    });

    

}

ngOnInit(): void {
  this.loadData();
}

@Input() da:any;


}
