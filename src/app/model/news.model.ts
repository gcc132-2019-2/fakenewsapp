export class NewsModel {
    private _id: number;
    private _title: string;
    private _likes: number;
    private _publishedAt: Date;
    private _image: string;
    private _content: string;
    private _link: string;    
    
    public constructor(news: any) {
        Object.assign(this, news);
    }

    // Getters and setters
    public get id(): number {
        return this._id;
    }
    public set id(id: number) {
        this._id = id;
    }
    public get title(): string {
        return this._title;
    }
    public set title(title: string) {
        this._title = title;
    }    
    public get likes(): number {
        return this._likes;
    }
    public set likes(likes: number) {
        this._likes = likes;
    }  
    public get publishedAt(): Date {
        return this._publishedAt;
    }
    public set publishedAt(publishedAt: Date) {
        this._publishedAt = publishedAt;
    } 
    public get image(): string {
        return this._image;
    }
    public set image(image: string) {
        this._image = image;
    }  
    public get content(): string {
        return this._content;
    }
    public set content(content: string) {
        this._content = content;
    }  
    public get link(): string {
        return this._link;
    }
    public set link(link: string) {
        this._link = link;
    }  
}