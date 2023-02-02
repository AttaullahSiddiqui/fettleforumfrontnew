import { Component, OnInit } from '@angular/core';
import {
  faAngleUp,
  faEnvelope,
  faHome,
  faPhoneAlt,faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faEnvelope = faEnvelope;
  faHome = faHome;
  faAngleUp = faAngleUp;
  faPhone = faPhoneAlt;
  faUser = faUser;
  constructor() {}

  ngOnInit(): void {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
