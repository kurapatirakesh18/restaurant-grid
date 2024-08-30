import { Component, EventEmitter, Output } from '@angular/core';

interface Restaurant {
  name: string;
  address: string;
  pincode: string;
  city: string;
  state: string;
}

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent {

  restaurant = {
    name: '',
    address: '',
    pincode: '',
    city: '',
    state: ''
  };
  
  @Output() addRestaurant = new EventEmitter<any>();
grid: any;
angular: any;
ag: any;
submitted: any;
  
  onSubmit() {
    this.addRestaurant.emit(this.restaurant);
    this.restaurant = { name: '', address: '', pincode: '',city:'',state:'' }; 
    
  }
}
