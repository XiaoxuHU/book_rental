import { Comment } from '../comments/comment.model';


export class Book{
    public id: number;
    public name: string;
    public author: string;
    public description: string;
    public imagePath:string;
    public rates: number[];
    public comments: Comment[];
    public price: number;
    constructor(id:number,name:string,author:string,description:string,imagePath:string,rates:number[],price:number) {
      this.id = id;
      this.name = name;
      this.author = author;
      this.description = description;
      this.rates = rates;
      this.imagePath = imagePath;
      this.comments = [];
      this.price = price;
    }
  }