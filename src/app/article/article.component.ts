import { Article } from './article.model';
import { Component, OnInit, HostBinding } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article('Angular', 'http://angular.io', 10);
  }

  ngOnInit() {}

  upvote(): boolean {
    this.article.upvote();
    return false;
  }

  downvote(): boolean {
    this.article.downvote();
    return false;
  }
}
