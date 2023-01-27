import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faGooglePlus = faGooglePlus;
  constructor() {}

  ngOnInit(): void {}
}
