import { Component, Input, Output } from '@angular/core';

import { Brewery } from '../../models/brewery.interface';

@Component({
  selector: 'brewery-detail',
  styleUrls: ['brewery-detail.component.scss'],
  template: `
    <div class="brewery-detail">
      <span class="brewery-detail__number">{{ 1 + index }}</span>
      <h2 class="brewery-detail__title"><a [routerLink]="'/map/'+detail.$key">{{ detail.name }}</a></h2>
      <p>{{ detail.address }}<br>
      {{ detail.city }} WA<span *ngIf="detail.zip">,</span> {{ detail.zip }}</p>
      <tag *ngFor="let tag of tags" [tag]="tag"></tag>
      <p class="brewery-detail__meta"><a href="{{ detail.url }}" target="_blank">Website</a> | <a href="https://www.google.com/maps/dir//{{detail.address}},{{detail.city}},WA,{{detail.zip}}" target="_blank">Directions</a></p>
    </div>
  `
})
export class BreweryDetailComponent {
  tags: Array<string>;

  @Input()
  detail: Brewery;

  @Input()
  index: number;

  ngOnInit() {
    this.tags = this.detail.tags !== '' ? this.detail.tags.split(',') : null;
  }
}
