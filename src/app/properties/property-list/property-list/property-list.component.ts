import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../../services/housing.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  sellRent = 1;
  propertyList: any;
  
  constructor(private route:ActivatedRoute, private housingService:HousingService) {}

  ngOnInit(): void {

    if(this.route.snapshot.url.toString())
    {
      this.sellRent = 2; // 1 is for Buy, 2 is for Rent.
    }

    this.housingService.getAllProperties(this.sellRent).subscribe(
      data=> {
            this.propertyList = data;
            console.log(data),
            console.log(this.route.snapshot.url.toString());
          }          
    );
  }
}
