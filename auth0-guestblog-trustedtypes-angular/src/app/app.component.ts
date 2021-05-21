import { Component, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  value = `Hello!<img src="none" onerror="alert('This data has become code!')">`;
  renderedValue = "";
  unsafeRenderedValue;

  @ViewChild("divRender3") div : ElementRef;

  constructor(private sanitizer : DomSanitizer) {}

  renderData() {
    // Div 1
    this.renderedValue = this.value;

    // Div 2
    this.unsafeRenderedValue = this.sanitizer.bypassSecurityTrustHtml(this.value);

    // Div 3
    this.div.nativeElement.innerHTML = this.value;
  }
}
