import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day2workshop';
  items = [
    {name:"item 1", img:"../assets/images/cap.svg", quantity:1},
    {name:"item 2", img:"../assets/images/shirt.svg", quantity:1},
    {name:"item 3", img:"../assets/images/pants.svg", quantity:1} 
  ]
  myCart = [];
  
  onAddNew (name) {
    for (let i = 0; i < this.myCart.length; i++) {
      if (this.myCart[i].name === name) {
        this.myCart[i].quantity++;
        return;                        
      }
    }
    for (let i=0; i<this.items.length;i++) {
      if (this.items[i].name === name) {
        this.myCart.push(this.items[i]);
      }
    }
  }

  onRemoveNew (name) {
    for (let i=0; i<this.myCart.length;i++) {
      if (this.myCart[i].name == name) {
        this.myCart[i].quantity = 1;
        this.myCart.splice(i, 1);
        break;
      }
    }
  }
}
