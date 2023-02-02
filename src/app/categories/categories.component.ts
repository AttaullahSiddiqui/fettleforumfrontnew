import { Component, OnInit } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  faList = faList;
  categoryArr = null;
  isLoading = false;
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService
      .fetchAPI('/userDisplay/fetchCategories')
      .subscribe((res) => {
        if (res.data) {
          this.categoryArr = res.data;
          this.isLoading = false;
        }
      });
  }
}
