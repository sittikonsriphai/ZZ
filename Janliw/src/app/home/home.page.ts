import { Component } from '@angular/core';
import{Router}from'@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  input_user:any="";
  input_pass:any="";
  text:string;
  te:string="";

  constructor(public router:Router) {
    this.checkuser()

  }

  checkuser(){
    console.log( this.input_user); //ปริ้นเพื่อดูค่ามันส่งไปไหมหรือถูกไหม
    console.log( this.input_pass);
    let user:any="siriporn";              
    let pass:any=123456;


    if( user==this.input_user && pass==this.input_pass){
     this.router.navigate(['/list']);
     
    }else if(this.input_user=="" && this.input_pass==""){
      this.text="กรุณาลงชื่อเข้าใช้งานก่อน"

    }else if(user!=this.input_user && pass!=this.input_pass){
      this.text="ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง"

    }else{
      this.text="กรุณาลงชื่อเข้าใช้งานก่อน"


    }

  }

}
