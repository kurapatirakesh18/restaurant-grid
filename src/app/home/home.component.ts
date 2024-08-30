import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
restaurant() {
throw new Error('Method not implemented.');
}
  columnDefs: ColDef[] = [
    { headerName: 'Restaurant Name', field: 'restarantName', sortable: true, filter: true }, 
    { headerName: 'Address ', field: 'Address', sortable: true, filter: true },
    { headerName: 'Pincode', field: 'pincode', sortable: true, filter: true },
    { headerName: 'State', field: 'state', sortable: true, filter: true },
    { headerName: 'City', field: 'city', sortable: true, filter: true }
  ];

  rowData = [
    {
      restarantName: 'Pizza Place',
      Address: '123 Main St',
      pincode: '12345',
      state: 'California',
      city: 'Los Angeles'
    },
    {
      restarantName: 'Burger Joint', 
      Address: '456 Elm St',
      pincode: '67890',
      state: 'Texas',
      city: 'Houston'
    }
  ];
 
  addRestaurant(restaurant: any) {
    this.rowData = [this.rowData, restaurant];
  }

  gridOptions = {
    domLayout: 'autoHeight'
  };
}
