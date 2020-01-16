import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  input_user:any="";
  input_pass:any="";
  text:string;

  

  constructor(public router:Router) {
    this.checkuser()

  }


  
  checkuser(){
    console.log( this.input_user); //ปริ้นเพื่อดูค่ามันส่งไปไหมหรือถูกไหม
    console.log( this.input_pass);
    let user:any="evil";              
    let pass:any=1234;


    if( user==this.input_user && pass==this.input_pass){
     this.router.navigate(['/about']);
           
     setTimeout(function(){ 
      alert("ยินดีต้อนรับกลับ :)" ); 
    }, 3);

    /* setTimeout(function(){ 
      console.log('Step 1')
      }, 3000);
    
      console.log('Step 2')*/
    
    }else if(this.input_user=="" && this.input_pass==""){
      setTimeout(function(){ 
        alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"); 
      }, 3);

      this.text="" ;

    }else if(user!=this.input_user && pass!=this.input_pass){

      setTimeout(function(){ 
        alert("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง"); 
      }, 3);

      

      
      
      
    }

    
    /* 
        if( user==this.input_user && pass==this.input_pass){
     this.router.navigate(['/list']);
     
    }else if(this.input_user=="" && this.input_pass==""){
      this.text="กรุณาลงชื่อเข้าใช้งานก่อน"

    }else if(user!=this.input_user && pass!=this.input_pass){
      this.text="ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง"

    }else{
      this.text="กรุณาลงชื่อเข้าใช้งานก่อน"


    }

    /*

    
/*
      this.text="ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง"

    }

    myAsyncFunc(callbackFunc);
    function myAsyncFunc (callback) {
      callback();
    }

    function callbackFunc () {
      console.log('this is callback function')
    }*/

    
  }

}
