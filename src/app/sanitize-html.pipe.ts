import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml',
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(value: any, ...args: any[]): any {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Pipe({
  name: 'sanitizeURL',
})
export class SanitizeURLPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  transform(value: any, ...args: any[]): any {
    return this._sanitizer.bypassSecurityTrustResourceUrl;
  }
}
