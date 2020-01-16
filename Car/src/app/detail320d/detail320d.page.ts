import { Component, OnInit } from '@angular/core';
import{Router}from'@angular/router';

@Component({
  selector: 'app-detail320d',
  templateUrl: './detail320d.page.html',
  styleUrls: ['./detail320d.page.scss'],
})
export class Detail320dPage implements OnInit {

  constructor(public router:Router) {}
  
  gotoinformation(){
  this.router.navigate(['/informations']);

  
  } 
  ngOnInit() {
  }
  

}
