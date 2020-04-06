import { Injectable } from '@angular/core';

import { Listing } from '../../shared/listing.model';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class SavedService {
  constructor(){}

  savedListings: Listing[] = [];
  savedSubject = new Subject<Listing[]>();

  saveListing(listing: Listing) {
    this.savedListings.push({...listing});
    this.savedSubject.next(this.savedListings)
    console.log(this.savedListings);
    console.log('savedService.saveListing triggered');
  }

  getSaved() {
    return this.savedListings;
  }

}