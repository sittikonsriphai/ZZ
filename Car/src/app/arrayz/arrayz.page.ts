import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrayz',
  templateUrl: './arrayz.page.html',
  styleUrls: ['./arrayz.page.scss'],
})
export class ArrayzPage implements OnInit {
  item_one_d:any[];
  box1:any;
  constructor() { 
    this.item_one_d = ["item1","item2","item3"];
  }

  get_item() {                            //เรียกดู
    //console.log(this.item_one_d[1]);
    console.log(this.item_one_d);
  }

  add_item() {                             //เพิ่ม
    this.item_one_d.push(this.box1);
  }

  delete_item() {                          //ลบ
    this.item_one_d.splice(0,1); 
  }

  update_item() {                        //แก้ไข
    this.item_one_d[0] = "xitem"
  }

  ngOnInit() {
  }
}