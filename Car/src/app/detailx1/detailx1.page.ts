import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';

@Component({
  selector: 'app-detailx1',
  templateUrl: './detailx1.page.html',
  styleUrls: ['./detailx1.page.scss'],
})
export class Detailx1Page implements OnInit {
 
 constructor(public router:Router) { }

  gotoinformation(){
      this.router.navigate(['/informations']);
  
    
  }


  ngOnInit() {
  }

}