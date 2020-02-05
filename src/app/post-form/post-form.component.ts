import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormArray, Validators  } from '@angular/forms';

// https://images.unsplash.com/photo-1499831215195-0970a54b3a0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  sellForm: NgForm;
  constructor() { }

  ngOnInit() {

    this.sellForm = new FormGroup({
      name: new FormControl(null),
      description: new FormControl(null),
      imgUrl: new FormControl(null),
      price: new FormControl(null)
    });

  }

}