import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryArr = null;
  storeArr = null;
  isLoading = false;
  activeNode: string = '';
  constructor(
    private _dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this._dataService
      .fetchAPI('/userDisplay/fetchCategories')
      .subscribe((res) => {
        if (res.data) {
          this.categoryArr = res.data;
          this.activeNode = res.data[0].name;
        }
      });
  }
  switchTab(catNode: any) {
    this.activeNode = catNode.name;
    this.loadStores(catNode, catNode.categoryURL);
  }
  loadStores(catNode: any, slctdURL: any) {
    if (this.isLoading) return;
    this.isLoading = true;
    this.storeArr = null;
    this.titleService.setTitle(catNode['metaTitle']);
    this.metaService.updateTag({
      name: 'description',
      content: catNode['metaDescription'],
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: catNode['metaDescription'],
    });
    this._dataService
      .fetchWithQuery('/userDisplay/fetchStores', catNode._id)
      .subscribe((res) => {
        if (res.data) {
          this.storeArr = res.data;
          this.isLoading = false;
        } 
        // else this.errorHandler(res.message);
      });
  }
}
