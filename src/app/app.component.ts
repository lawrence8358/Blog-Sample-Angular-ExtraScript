import { Component, NgZone, OnInit } from '@angular/core';

//1. 宣告 $ 為任意型別
//declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    $("#Div_2").html("我是AppComponent ngOnInit內給值");
  }
}
