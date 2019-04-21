import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // searchName = new FormControl('');
  // isInactive: boolean = false;

  constructor(private fb: FormBuilder) { }

  searchForm = this.fb.group({
    searchName: [''],
    isInactive: [false]
  })

  get searchName() { return this.searchForm.get('searchName'); }
  get username() { return this.searchForm.get('username'); }

  sendDate() {
    console.log("searchForm", this.searchForm.value);

  }
}
