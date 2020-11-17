import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  @Input() list;
  @Output() AddNew = new EventEmitter<String>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event) {
    this.AddNew.next(event.target.name);
  }
}
