import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faPinterest = faPinterest;
  categoryArr = null;
  isBusy: Boolean = false;
  contactEmail: string = '';
  searchText: string = '';
  constructor(private _dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this._dataService
      .fetchAPI('/userDisplay/fetchFeaturedCategories')
      .subscribe((res) => {
        if (res.data) this.categoryArr = res.data;
      });
    // console.log(this.router);
    // console.log(window.location.href);
    // console.log(this.router.url);
    // console.log(this.showSearchBar('/store'));
    // console.log(this.isLinkActive('/store'));
  }
  showSearchBar(url:string) {
    var location = window.location.pathname;
    return location.includes(url);
  }
  // isLinkActive(url:string): boolean {
  //   const queryParamsIndex = this.router.url.indexOf('?');
  //   const baseUrl =
  //     queryParamsIndex === -1
  //       ? this.router.url
  //       : this.router.url.slice(0, queryParamsIndex);
  //   return baseUrl === url;
  // }
}
