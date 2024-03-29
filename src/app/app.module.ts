import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SwiperModule } from 'swiper/angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import { StoresComponent } from './stores/stores.component';
import { StoreComponent } from './store/store.component';
import { ServicesComponent } from './services/services.component';
import { SortbyPipe } from './sortby.pipe';
import { TermsofuseComponent } from './termsofuse/termsofuse.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TermsComponent,
    AboutComponent,
    PrivacyComponent,
    BlogComponent,
    BlogsComponent,
    SanitizeHtmlPipe,
    CategoriesComponent,
    CategoryComponent,
    StoresComponent,
    StoreComponent,
    ServicesComponent,
    SortbyPipe,
    TermsofuseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    SwiperModule,
  ],
  providers: [
    Title,
    Meta,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
