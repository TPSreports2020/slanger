import { Injectable } from '@angular/core';

import { Listing } from '../../shared/listing.model';
import { Subject } from 'rxjs';


@Injectable({providedIn: 'root'})
export class SavedService {
  constructor(){}

  savedListings: Listing[] = [];
  savedSub = new Subject<Listing[]>();

  saveListing(listing: Listing) {
    this.savedListings.push({...listing});
    this.savedSub.next(this.savedListings)
  }

}