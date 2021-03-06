import { Component, OnInit } from '@angular/core';
import { Color_ } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-filter',
  templateUrl: './color-filter.component.html',
  styleUrls: ['./color-filter.component.css']
})
export class ColorFilterComponent implements OnInit {

  colors:Color_[]=[];

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }


  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data;
    })

  }

}
