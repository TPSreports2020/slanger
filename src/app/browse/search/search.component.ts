import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { faAngular, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { faSearchDollar, faSearch} from '@fortawesome/free-solid-svg-icons';

import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faSearchDollar = faSearchDollar;
  faSearch = faSearch;
  searchForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.searchForm = new FormGroup({
       searchTerm: new FormControl(null)
    })
  }

}