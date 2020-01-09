import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Listing } from '../../shared/listing.model';



@Injectable({providedIn: 'root'})
export class SearchService {
  constructor(private http: HttpClient){}

  search(searchTerm: string) {
    const url = `xxx`
    this.http.get(url)
      .subscribe(res => {
        console.log(res);
      });
  }

}