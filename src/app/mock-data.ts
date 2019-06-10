import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemBookService extends InMemoryDbService {
    createDb(){
        let books = [
            {
                "id": 1,
                "author": "Delia Owens",
                "name": "Where the Crawdads Sing",
                "description":"This novel has a mystery at its core, but it can be read on a variety of levels. There is great nature writing; there is coming of age; and there is literature. Crawdads is a story lovingly told—one that takes its time in developing its characters and setting, and in developing the story. You’ll want to relax and take your time as well, and when you’re done you will want to talk about it with another reader.",
                "imagePath":"https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL.jpg",
                "rates":["12","100","360","540","780"],
                "price":0.5,
            },
            {
                "id": 2,
                "author": "Tara Westover",
                "name":"Educated: A Memoir",
                "description":"Number-one New York Times, Wall Street Journal, and Boston Globe best seller Named One of the Ten Best Books of the Year by The New York Times Book Review.One of President Barack Obama's Favorite Books of the Year.Bill Gates's Holiday Reading List",
                "imagePath":"https://images-na.ssl-images-amazon.com/images/I/41dIDDpGepL._SX342_.jpg",
                "rates":["50","100","150","200","250"],
                "price":1,  
            },
            {
                "id": 3,
                "author": "Michelle Obama",
                "name":"Becoming",
                "description":"In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As first lady of the United States of America - the first African American to serve in that role",
                "imagePath":"https://images-na.ssl-images-amazon.com/images/I/51w4zG9Dn6L._SX342_.jpg",
                "rates":[100,30,40,50,1000],
                "price":1.3,     
            },
            {
                "id": 4,
                "author": "George R. R. Martin",
                "name":"A Storm of Swords ",
                "description":"The third volume of the high fantasy saga that began with A Game of Thrones and continued in A Clash of Kings is one of the more rewarding examples of gigantism in contemporary fantasy. As Martin's richly imagined world slides closer to its 10-year winter, both the weather and the warfare worsen. In the north, King Joffrey of House Lannister sits uneasily on the Iron Throne. ",
                "imagePath":"https://images-na.ssl-images-amazon.com/images/I/51e9blEl%2BLL.jpg",
                "rates":[10,30,40,50,1000],
                "price":2.4,    
            },
            {
                "id": 5,
                "author": "Lisa Wingate",
                "name":"Before We Were Yours: A Novel",
                "description":"For fans of Orphan Train and The Nightingale comes a 'thought-provoking [and] complex tale about two families, two generations apart...based on a notorious true-life scandal.'",
                "imagePath":"https://images-na.ssl-images-amazon.com/images/I/51qUEEH95YL._SX342_.jpg",
                "rates":[27,38,49,54,875],
                "price":1.5,  
            },
            
        ];
        return {books};
    }
}