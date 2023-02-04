import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogsArr = null;
  skipNo = 0;
  isFetching = false;
  limitVar: Number = 980;
  faCalendar = faCalendar;
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.fetchBlogs();
  }
  fetchBlogs() {
    this.isFetching = true;
    this._dataService
      .fetchAPIWithLimit('/userDisplay/fetchBlogsWithLimit', 6, '', this.skipNo)
      .subscribe((res) => {
        if (res.data) {
          // this.blogsArr = { ...this.blogsArr, ...res.data };
          // this.blogsArr = this.blogsArr.concat(res.data);
          this.blogsArr = null;
          this.blogsArr = res.data;
          console.log(this.blogsArr);
          this.isFetching = false;
          window.scrollTo(0, 0);
        } else {
          this._dataService.errorToast(res.message);
          this.isFetching = false;
          if (this.skipNo) this.skipNo -= 6;
        }
      });
  }
  getInnerText(el: any) {
    return el.innerText;
  }
  loadNext() {
    if (this.isFetching) return;
    this.skipNo += 6;
    this.fetchBlogs();
  }
  loadPrev() {
    if (!this.skipNo) {
      this._dataService.errorToast('No more previous data exist');
      return;
    }
    if (this.isFetching) return;
    this.skipNo -= 6;
    this.fetchBlogs();
  }
  openLink(blogURL: any) {
    // window.open("http://localhost:4000/blog/" + blogURL, "_blank");
    window.open('https://www.fettleforum.com/blog/' + blogURL, '_blank');
  }
}
