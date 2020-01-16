import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  input_price:any;
  input_down:any;
  input_interest_rate:any;
  input_all_installments:any;

  input_pay_year:any;
  input_pay_month:any;
  pay_month:any;
  pay_year:any;

  total_debt:any;
  monthly_payment:any;
  debt:any;
  payment:any;

  interest_year:any;
  interest_year1:any;
  

  input_name:string;
  input_last:string;
  name1:string;
  last1:string;

  price:any;
  down:any;
  
  finance:any;
  interest_rate:any;
  installments_month:any;

  installments_month_price:any;
  interest_total:any;
  
  pay_total:any;
 
  
  price_car:string = "ราคารถ";
  yoddown:string="ยอดดาวน์";
  finan:string = "คิดเป็นยอดไฟแนนซ์";
  interes:string = "อัตราดอกเบี้ย";
  nume_y:string = "จำนวนปีที่ทำการผ่อนชำระ";
  num_m:string = "จำนวนเดือนที่ต้องผ่อนชำระ";
  num_interes:string = "จำนวนดอกเบี้ยรายปี";
  all_interes:string = "ดอกเบี้ยทั้งหมด";
  total_dept:string = "ยอดหนี้ทั้งหมด";
  yod_m:string = "ยอดชำระรายเดือน";
  total_price:string = "จำนวนเงินทั้งหมดของ";
  bath:string = "บาท";
  p:string = "เปอร์เซ็น";
  y:string = "ปี";
  m:string = "เดือน";
  ttpay:string = "ที่ต้องเสียคือ";


  price_car1:string ;
  yoddown1:string;
  finan1:string;
  interes1:string ;
  nume_y1:string ;
  num_m1:string ;
  num_interes1:string ;
  all_interes1:string ;
  total_dept1:string ;
  yod_m1:string ;
  total_price1 ;
  bath1:string
  p1:string ;
  y1:string ;
  m1:string ;
  ttpay1:string;

    input_name1:string;
    input_last1:string;
    input_price1:any;
    input_down1:any;
    input_interest_rate1:any;
    input_pay_year1:any;
    input_pay_month1:any; 



  constructor() {
     this.Calculated


  }

  Calculated(){

    /* 1.) 935000 (ราคารถ) - 187000 (เงินดาวน์) = 748,000 (ยอดไฟแนน)
       2.) 748,000 (ยอดไฟแนน) x 5% (ดอกเบี้ยต่อปี) = 37,400 (จำนวนดอกเบี้ยรายปี)
       3.) 37,400 (จำนวนดอกเบี้ยรายปี) x 5 (จำนวนปีที่ทำการผ่อนชำระ) = 187,000 (ดอกเบี้ยทั้งหมด)
       4.) 187,000 (ดอกเบี้ยทั้งหมด) + 748,000 (ยอดไฟแนน) = 935,000 (ยอดหนี้ทั้งหมด)

      5.) 935,000 (ยอดหนี้ทั้งหมด) ÷ 60 (จำนวนเดือนที่ต้องผ่อนชำระ) = 15,583.33 ปัดขึ้นเป็น 15,584 (ยอดชำระรายเดือน)
     */

    this.price_car1 = (this.price_car) ;
    this.yoddown1 = (this.yoddown);
    this.finan1 = (this.finan);
    this.interes1 = (this.interes) ;
    this.nume_y1 = (this.nume_y) ;
    this.num_m1 = (this.num_m) ;
    this.num_interes1 = (this.num_interes) ;
    this.all_interes1 = (this.all_interes) ;
    this.total_dept1 = (this.total_dept) ;
    this.yod_m1 = (this.yod_m) ;
    this.total_price1 = (this.total_price);
    this.bath1 = (this.bath);
    this.p1 = (this.p);
    this.y1 = (this.y);
    this.m1 = (this.m);
    this.ttpay1 =(this.ttpay);

     
     this.pay_year= parseFloat(this.input_pay_year);
     this.pay_month = parseFloat(this.input_pay_month);

     this.debt = parseFloat(this.total_debt);
     this.payment = parseFloat(this.monthly_payment);

    this.name1 =(this.input_name);
    this.last1 =(this.input_last);


    
    this.price = parseFloat(this.input_price); //ราคารถ
    this.down = parseFloat(this.input_down);   //ดาวน์
    this.interest_rate = parseFloat (this.input_interest_rate);  //อัตราดอกเบี้ย interest_rate
    this.installments_month  = parseFloat (this.input_all_installments);
    
    this.finance= this.price - parseFloat(this.down); //คิดเป็นจำนวนเงินดาวน์ /1

    this.interest_year = this.finance * parseFloat(this.interest_rate)/100; //2
    
    this.interest_total = this.interest_year * parseFloat(this.pay_year); //3

    this.debt = this.interest_total + parseFloat(this.finance); //4

    this.payment = this.debt / parseFloat(this.pay_month) ; //5 

    this.pay_total = this.debt +( parseFloat(this.debt) * parseFloat(this.interest_rate)/100);
    
  }
}
  /*
  Clear(){

    this.input_name = "";
    this.input_last = "";
    this.input_price = "";
    this.input_down = "";
    this.input_interest_rate = "";
    this.input_pay_year = "";
    this. input_pay_month = "";
  }*/



    





   
   
  

  

  

   


    

  
    
  
    
  
