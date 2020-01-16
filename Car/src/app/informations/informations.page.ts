import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-informations',
  templateUrl: './informations.page.html',
  styleUrls: ['./informations.page.scss'],
})
export class InformationsPage {
  fullname:any;
  bmx1:any;



  constructor(public router:Router) {}
    gotoabout(){                   //ไปหน้า about
      this.router.navigate(["/about"]);           
  
    }
    gotodetail(){
      this.router.navigate(['/detail']);
    }
   /* goToBMW15(){
      this.bmx1  = "../../assets/img/BMW 320d.jpg"
  
    }*/
    gotodetail320d(){
      this.router.navigate(['detail320d']);
    }
    gotodetailx1(){
      this.router.navigate(['detailx1']);
    }
  
    ngOnInit() {

    }
    
  
  }
