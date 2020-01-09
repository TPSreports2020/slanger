import { Injectable } from '@angular/core';

import { Listing } from '../../shared/listing.model';


@Injectable({providedIn: 'root'})
export class SearchService {
  constructor(private http: HttpClient){}

  savedListings: Listing[];

  saveListing(listing: Listing) {
    this.savedListings.push(listing);
  }

}