import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareSearchService {
  searchString: string='';
  constructor() { }

  setString(data: string){
    this.searchString= data;

  }

  getString(){
    return this.searchString;
  }

}
