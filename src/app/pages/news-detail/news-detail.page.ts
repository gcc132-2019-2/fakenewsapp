import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsModel } from 'src/app/model/news.model';
import { NewsService } from 'src/app/services/news.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  currentNews: NewsModel;

  constructor(private activatedRoute: ActivatedRoute, 
    private newsService: NewsService, private socialSharing: SocialSharing) { }

  async shareWhatsApp() {
    this.socialSharing.shareViaWhatsApp(this.currentNews.title, 
      this.currentNews.image, this.currentNews.link);
  }

  ngOnInit() {}

  ionViewDidEnter() {
    let newsId: number = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.currentNews = this.newsService.searchById(newsId);
  }  
}
