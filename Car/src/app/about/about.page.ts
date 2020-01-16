import { Component, OnInit, Query } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  Object:any = {
    fname : "sittikon",
    lname : "sriphai"
  };

  constructor(public router:Router) { }

  gotoinformation(){                   //ไปหน้า informations
    this.router.navigate(["/informations"],{queryParams:this.Object});           

  }
  gotologin(){                   //ไปหน้า informations
    this.router.navigate(["/login"],{queryParams:this.Object});           

  }


  ngOnInit() {
  }

}
