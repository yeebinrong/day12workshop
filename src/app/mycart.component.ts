import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  @Input() myCart;
  @Output() RemoveNew = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  // remove click
  onClick(event) {
    this.RemoveNew.next(event.target.name);
  }
}
