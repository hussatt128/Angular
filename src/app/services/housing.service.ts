import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProperty } from '../properties/IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { 
  }
  
  getAllProperties(sellRent: number) : Observable<IProperty[]>
  {
    return this.http.get<any[]>('data/properties.json').pipe(
      map(data => {
          const propertiesArray: Array<IProperty> = [];

          for (const id in data)
          {
            if(data.hasOwnProperty(id) && data[id].SellRent === sellRent){
              propertiesArray.push(data[id])
            }
          }
          return propertiesArray;
        }
      )
    );
  }
}
