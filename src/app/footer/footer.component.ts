import { Component, OnInit } from '@angular/core';
import {
  faAngleUp,
  faEnvelope,
  faHome,
  faPhoneAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faPinterest = faPinterest;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faAngleUp = faAngleUp;
  faPhone = faPhoneAlt;
  faUser = faUser;
  isBusy: Boolean = false;
  contactEmail: string = '';
  contactName: string = '';
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }
  addEmailToDB(emailId: any, name: any) {
    if (this.isBusy) return;
    if (!emailId || !name) {
      this._dataService.errorToast('Please fill out both fields');
      return;
    }
    this.isBusy = true;
    this._dataService
      .postAPI('/userDisplay/addEmailToDB', { emailId: emailId })
      .subscribe((res) => {
        if (res.data) {
          this.contactEmail = '';
          this.contactName = '';
          this.isBusy = false;
          this._dataService.successToast(
            'Successfully subscribed to our newsletter'
          );
        } else {
          this.isBusy = false;
          this._dataService.errorToast(res.message);
        }
      });
  }
}
