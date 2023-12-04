import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent {

  propertyList: Array<any> = [
    {
      "Id": 1,
      "Name": "House 1",
      "Price": 120000,
      "Location": "Rural"
    },
    {
      "Id": 2,
      "Name": "House 2",
      "Price": 125000,
      "Location": "Rural"
    },
    {
      "Id": 3,
      "Name": "House 3",
      "Price": 130000,
      "Location": "Urban"
    },
    {
      "Id": 4,
      "Name": "House 4",
      "Price": 145000,
      "Location": "Urban"
    },
    {
      "Id": 5,
      "Name": "House 5",
      "Price": 150000,
      "Location": "Urban"
    },
    {
      "Id": 6,
      "Name": "House 6",
      "Price": 250000,
      "Location": "Urban"
    }

  ]

}
