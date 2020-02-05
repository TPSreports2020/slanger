import { Component, OnInit } from '@angular/core';
import { Listing } from './shared/listing.model';
import { SavedService } from '../saved/saved.service';


@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  constructor() { }
  listings: Listing[] = [
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    }
    ,
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    },
    {
      name: 'Gibson Les Paul',
      price: 900,
      description: 'Love this guitar but have too many! Like new, model is LPJ20ANN, 60s humbuckers!'
    }
  ]

  ngOnInit() {
  }

  onSaveListing(index: number) {
    
  }

}