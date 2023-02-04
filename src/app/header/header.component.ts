import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faInstagram,faPinterest
} from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../data.service';
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
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService
      .fetchAPI('/userDisplay/fetchFeaturedCategories')
      .subscribe((res) => {
        if (res.data) this.categoryArr = res.data;
      });
  }
}
