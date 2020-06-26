import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand-new',
  templateUrl: './brand-new.component.html',
  styleUrls: ['./brand-new.component.scss']
})
export class BrandNewComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  engine: boolean;

  searchObject: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.subscription = this.searchService.getSearchValues().subscribe(data => {
      this.searchObject = data;
    });
    if (this.searchObject.searchEngine === 'google') {
      this.engine = true;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
