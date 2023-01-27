import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import {
  faEnvelope,
  faHome,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  iFrameObj = null;
  responseError = '';
  blogNode: any = [];
  isFetching = false;
  blogURL: string = '';
  mobile: boolean = false;
  faCalendar = faCalendar;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faPhone = faPhoneAlt;
  constructor(
    private route: ActivatedRoute,
    private _dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    if (window.screen.width < 450) this.mobile = true;
    this.route.paramMap.subscribe((paramMap: any) => {
      this.blogURL = paramMap.get('id');
      this.isFetching = true;
      this._dataService
        .fetchWithQuery('/userDisplay/fetchSingleBlog', this.blogURL)
        .subscribe((res: any) => {
          if (res.data) {
            this.titleService.setTitle(res.data['metaTitle']);
            // document
            //   .querySelector('meta[name="description"]')
            //   .setAttribute("content", res.data["metaDes"]);
            // document
            //   .querySelector('meta[property="og:description"]')
            //   .setAttribute("content", res.data["metaDes"]);
            this.blogNode = res.data;
            this.isFetching = false;
          } else this.errorHandler(res.message);
        });
      // this._dataService
      //   .postAPI('/userDisplay/increaseBlogViews', { id: this.blogURL })
      //   .subscribe((res: any) => {});
    });
  }
  // loadBlogImages(id) {
  //   this._dataService
  //     .fetchWithQuery("/userDisplay/fetchBlogItems", id)
  //     .subscribe((res) => {
  //       if (res.data) this.blogItems = res.data;
  //     });
  // }
  loadBlog(id: any) {
    this.isFetching = true;
    this._dataService
      .fetchWithQuery('/userDisplay/fetchSingleBlog', id)
      .subscribe((res: any) => {
        if (res.data) {
          this.blogNode = res.data;
          this.titleService.setTitle(res.data['0']['metaTitle']);
          this.metaService.updateTag({
            name: 'description',
            content: res.data['0']['metaDes'],
          });
          this.isFetching = false;
        } else this.errorHandler(res.message);
      });
  }
  errorHandler(err: any) {
    this.isFetching = false;
    this.responseError = err;
    window.scrollTo(0, 0);
  }
  openLink(link: any) {
    window.open(link, '_blank');
  }
}