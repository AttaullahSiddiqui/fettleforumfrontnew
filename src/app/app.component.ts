import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fettleforumfront';
  showLoader = true;

  ngOnInit() {
    setTimeout(() => {
      this.showLoader = false;
    }, 500);
  }
}
