import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}

  addArticle(title: string, link: string): boolean {
    console.log(`Adding article: ${title} and link: ${link}`);
    return false;
  }
}
