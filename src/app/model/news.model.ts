export class NewsModel {
    id: number;
    title: string;
    likes: number;
    publishedAt: Date;
    image: string;
    content: string;
    link: string;    

    constructor(news: any) {
        Object.assign(this, news);
    }
}
