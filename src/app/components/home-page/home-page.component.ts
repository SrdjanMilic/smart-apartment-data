import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, public searchService: SearchService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      term: [''],
      searchEngine: ['google']
    });
  }

  onEnter() {
    console.log('Submitted');
  }

  onSubmit() {
    // Set Behavior Subject object values
    this.searchService.setSearchValues(this.searchForm.value);
    // Call page redirection function
    this.searchService.redirect();
  }
}
