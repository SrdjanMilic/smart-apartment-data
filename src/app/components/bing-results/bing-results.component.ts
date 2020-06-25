import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bing-results',
  templateUrl: './bing-results.component.html',
  styleUrls: ['./bing-results.component.scss']
})
export class BingResultsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  searchObject: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.subscription = this.searchService.getSearchValues().subscribe(data => {
      this.searchObject = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
