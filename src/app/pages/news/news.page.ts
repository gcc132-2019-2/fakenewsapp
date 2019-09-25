import { Component, OnInit } from '@angular/core';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  private lstNews: NewsModel[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.lstNews = this.newsService.getAll();
  }

  public updateListNews(event: any) {
    this.lstNews = this.newsService.searchByTitle(event.target.value);
  }

  public get LstNews(): NewsModel[] {
    return this.lstNews;
  }
}
