import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  noOfEntities=0;

  constructor() { }


  setNoOfEntities(data: number){
    this.noOfEntities= data;
  }

  getNoOfEntities(){
    return this.noOfEntities;
  }

}
