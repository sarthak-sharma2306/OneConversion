import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  queryCountry='';
  queryTag='';
  queryTrending='';
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(data => {
      this.queryCountry=data.Country;
      this.queryTag=data.Tag;
      this.queryTrending=data.Trending
    });
  }

  ngOnInit(): void {
  }

}
