import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categoryArr = null;
  storeArr:Array<any> = [];
  isLoading = false;
  activeNode: string = '';
  constructor(
    private _dataService: DataService,
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      var targetCategoryId = paramMap.get('id');
      var targetCategoryName: string;
      this._dataService
        .fetchAPI('/userDisplay/fetchCategories')
        .subscribe((res) => {
          if (res.data) {
            this.categoryArr = res.data;
            res.data.forEach((element: any) => {
              if (element.categoryURL == targetCategoryId) {
                targetCategoryName = element.name;
                this.loadStores(element, element.categoryURL);
              }
            });
            this.activeNode = targetCategoryName || res.data[0].name;
            console.log(this.activeNode);
          }
        });
    });
  }
  switchTab(catNode: any) {
    this.activeNode = catNode.name;
    this.loadStores(catNode, catNode.categoryURL);
  }
  loadStores(catNode: any, slctdURL: any) {
    if (this.isLoading) return;
    this.isLoading = true;
    this.storeArr = [];
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
          console.log(this.storeArr)
          this.isLoading = false;
        }
        // else this.errorHandler(res.message);
      });
  }
}