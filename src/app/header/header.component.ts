import { Component, OnInit } from '@angular/core';
import {
  faLaptop,
  faFilm,
  faClock,
  faBuilding,
  faSearch,
  faFilter,
  faTh,
  faQuestion,
  faBriefcase,
  faAngleUp,
  faPhone,
  faEnvelope,
  faHome,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons';
import { faFile, faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faEnvelope = faEnvelope;
  faHome = faHome;
  faPhone = faPhoneAlt;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlus;
  faLaptop = faLaptop;
  faFilm = faFilm;
  faClock = faClock;
  faBuilding = faBuilding;
  faSearch = faSearch;
  faFile = faFile;
  faFilter = faFilter;
  faTh = faTh;
  faCalendar = faCalendar;
  faQuestion = faQuestion;
  faBriefcase = faBriefcase;
  faYoutubeSquare = faYoutubeSquare;
  faAngleUp = faAngleUp;
  constructor() {}

  ngOnInit(): void {}
}
