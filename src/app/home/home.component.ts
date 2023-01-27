import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
} from 'swiper';
SwiperCore.use([Pagination, Navigation, EffectCreative, Autoplay]);
import {
  faLaptop,
  faFilm,
  faClock,
  faBuilding,
  faFilter,
  faTh,
  faQuestion,
  faBriefcase,
  faAngleUp,
  faEnvelope,
  faHome,
  faPhoneAlt,
  faSlidersH,faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { faFile, faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faGooglePlus,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  faArrowRight = faArrowRight;
  faSlider = faSlidersH;
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
  faFilter = faFilter;
  faTh = faTh;
  faCalendar = faCalendar;
  faQuestion = faQuestion;
  faBriefcase = faBriefcase;
  faYoutubeSquare = faYoutubeSquare;
  faAngleUp = faAngleUp;
  config: SwiperOptions = {
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    direction: 'horizontal',
    loop: true,
    loopFillGroupWithBlank: true,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
  };
  storeArray = null;
  slideArray = null;
  blogArray = null;
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService
      .fetchOnlyLimit('/userDisplay/fetchTopStores', 18)
      .subscribe((res) => {
        if (res.data) this.storeArray = res.data;
        // else this.errorHandler(res.message);
      });
    this._dataService
      .fetchOnlyLimit('/userDisplay/fetchTopBlogs', 9)
      .subscribe((res) => {
        if (res.data) this.blogArray = res.data;
        // else this.errorHandler(res.message);
      });
  }

  onSwiper(swiper: any) {
    swiper.update();
  }
  onSlideChange() {
    console.log('slide change');
  }
  getInnerText(el: any) {
    return el.innerText;
  }
}
