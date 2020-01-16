import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayz2',
  templateUrl: './arrayz2.page.html',
  styleUrls: ['./arrayz2.page.scss'],
})
export class Arrayz2Page implements OnInit {
  item_two_d:Array<{id:any,name:any,price:any,num:any,vender:{vid:any,vname:any,vrate:any}}>

  name_pro:any;
  id_pro:any;
  price_pro:any;
  num_pro:any;
  vname_name:any;
  vid_id:any;
  vrate_rate:any;

  n1:any;
  i1:any;
  p1:any;
  num1:any;
  vn:any;
  vid:any;
  vr:any;

  

  constructor() { 
    

    this.item_two_d = [
      {id:'A001',name:'เครื่องดูดฝุ่น',price:'3,500',num:'11',vender:{vid:'V001',vname:'ONE SHOP',vrate:'1'}},
      {id:'B002',name:'แปรงสีฟัน',price:'70',num:'22',vender:{vid:'V002',vname:'TWO SHOP',vrate:'2'}},
      {id:'C003',name:'ปากกา',price:'15',num:'33',vender:{vid:'V003',vname:'TRID SHOP',vrate:'3'}},
      {id:'D004',name:'สายชาร์ต',price:'250',num:'44',vender:{vid:'V004',vname:'FOUR SHOPE',vrate:'4'}}
    ];

  }

  get_item(){               //<<<< medthod

      //console.log(this.item_two_d);
     // console.log(this.item_two_d[2]);
    // console.log(this.item_two_d[2].id);
   //console.log(this.item_two_d[2].vender.vname);
   console.log(this.item_two_d);
   console.log(this.n1);

  }

    add_item(){

      this.item_two_d.push({id:'C005',name:'แบตเตอรี่',price:'450',num:'10',vender:{vid:'V003',vname:'NAI IT shop',vrate:'4'}});

      this.item_two_d.push({id:'C005',name:'แบตเตอรี่',price:'450',num:'10',vender:{vid:'V003',vname:'NAI IT shop',vrate:'4'}});
    //this.item_two_d.push({id:this.id_pro,name:this.name_pro,price:this.price_pro,num:this.num_pro,vender:{vid:this.vid_id,vname:this.vname_name,vrate:this.vrate_rate}});
    }
    add_pro(){ 

      this.n1.push(this.name_pro);


    }
    
    update_item(){
    
    this.item_two_d[0].name='ดินสอ';
    this.item_two_d[0].vender.vname='BLOCK shop';
    
    
    }
    remove_item(){
      this.item_two_d.splice(0,1);
    }
    
    ngOnInit() {
    
    }
  }
