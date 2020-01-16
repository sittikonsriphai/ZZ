import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  item_two_d:Array<{id:any,name:any,price:any,num:any,vender:{vid:any,vname:any,vrate:any}}>
  cart:Array<{id:any,name:any,price:any,num:any}>

  numm:string = "จำนวนสินค้า";
  pricee:string ="ราคาสินค้า";
  totalnum:any=0;
  totalprice:any=0;
  cus_id:any=null;
  tran_address:any=null;

  

  constructor(private storage: Storage) { 
    
    this.item_two_d = [
      {id:'A001',name:'เครื่องดูดฝุ่น',price:'3500',num:'1',vender:{vid:'V001',vname:'ONE SHOP',vrate:'1'}},
      {id:'B002',name:'แปรงสีฟัน',price:'70',num:'1',vender:{vid:'V002',vname:'TWO SHOP',vrate:'2'}},
      {id:'C003',name:'ปากกา',price:'15',num:'1',vender:{vid:'V003',vname:'TRID SHOP',vrate:'3'}},
      {id:'D004',name:'สายชาร์ต',price:'250',num:'1',vender:{vid:'V004',vname:'FOUR SHOPE',vrate:'4'}}
    ];
    this.cart=[];
    this.come_back();
    

  }
  come_back(){
    this.storage.get("cus_id").then((val) =>{
      console.log("Your cus_id is", val);
      this.cus_id = val;
    });
    this.storage.get("tran_address").then((val) =>{
      console.log("Your tran_address is", val);
      this.tran_address =val;
    });
    this.storage.get("cart").then((val) =>{
      console.log("Your cart is", val);
      this.cart =val;
    });
    console.log(this.cart);

  }

  add_cart(item_id:any,item_name:any,item_price:any,item_num:any){
    this.cart.push({id:item_id,name:item_name,price:item_price,num:item_num})
    console.log(this.cart);
    this.totalnum = this.cal_num();
    this.totalprice = this.cal_price();
    this.storage.set("cus_id", this.cus_id); //เก็บค่า
    this.storage.set("tran_address", this.tran_address); //เก็บค่า
    this.storage.set("cart",this.cart);


  }
  cal_num(){
    let total_num:number = 0;
    for(let i = 0; i < this.cart.length; i++){
      let num = parseInt (this.cart[i].num);
      total_num = total_num + num ;
    }
    return total_num;

  }
  cal_price(){
    let total_price:number = 0;
    for(let i = 0; i < this.cart.length; i++){
      let price = parseFloat (this.cart[i].price);
      total_price = total_price + price ;
    }
    return total_price;

  }


    ngOnInit() {
    
    }
  }

