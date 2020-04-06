import { Component, OnInit } from '@angular/core';
import { SavedService } from './saved.service';
import { Listing } from '../shared/listing.model';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  constructor(private savedService: SavedService) { }

  savedSub: Subscription;
  savedListings: Listing[] = []

   ngOnInit() {
    this.savedSub = this.savedService.savedSubject.subscribe(
        (listings: Listing[]) => {
          this.savedListings = listings;
          console.log(this.savedListings);
        }
      )
    this.savedListings = this.savedService.getSaved();
  }

  ngOnDestroy() {
    this.savedSub.unsubscribe();
  }

}
