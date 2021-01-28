import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private static list: Array<Product> = [
    {
      "id": 1,
      "catId": 2,
      "name": "Veal - Inside, Choice",
      "description": "elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
      "image": "http://dummyimage.com/216x186.bmp/dddddd/000000",
      "price": 54,
      "stock": 51,
      "featured": true,
      "active": false
    }, {
      "id": 2,
      "catId": 1,
      "name": "Kippers - Smoked",
      "description": "volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut",
      "image": "http://dummyimage.com/138x129.jpg/ff4444/ffffff",
      "price": 10,
      "stock": 14,
      "featured": false,
      "active": false
    }, {
      "id": 3,
      "catId": 2,
      "name": "Crab - Blue, Frozen",
      "description": "lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus",
      "image": "http://dummyimage.com/198x102.jpg/ff4444/ffffff",
      "price": 78,
      "stock": 92,
      "featured": false,
      "active": true
    }, {
      "id": 4,
      "catId": 1,
      "name": "Turkey Tenderloin Frozen",
      "description": "vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque",
      "image": "http://dummyimage.com/104x119.png/ff4444/ffffff",
      "price": 94,
      "stock": 99,
      "featured": true,
      "active": true
    }, {
      "id": 5,
      "catId": 1,
      "name": "Nut - Walnut, Pieces",
      "description": "suspendisse potenti cras in purus eu magna vulputate luctus cum sociis",
      "image": "http://dummyimage.com/139x124.jpg/cc0000/ffffff",
      "price": 4,
      "stock": 36,
      "featured": true,
      "active": true
    }, {
      "id": 6,
      "catId": 1,
      "name": "Seedlings - Clamshell",
      "description": "augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi",
      "image": "http://dummyimage.com/192x222.png/ff4444/ffffff",
      "price": 77,
      "stock": 85,
      "featured": true,
      "active": true
    }, {
      "id": 7,
      "catId": 1,
      "name": "Chicken - Bones",
      "description": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique",
      "image": "http://dummyimage.com/238x230.png/dddddd/000000",
      "price": 43,
      "stock": 43,
      "featured": false,
      "active": false
    }, {
      "id": 8,
      "catId": 2,
      "name": "Wine - Prosecco Valdobiaddene",
      "description": "duis bibendum felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis",
      "image": "http://dummyimage.com/149x140.png/ff4444/ffffff",
      "price": 74,
      "stock": 22,
      "featured": true,
      "active": false
    }, {
      "id": 9,
      "catId": 1,
      "name": "Turnip - White",
      "description": "leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis convallis tortor",
      "image": "http://dummyimage.com/223x240.jpg/dddddd/000000",
      "price": 7,
      "stock": 58,
      "featured": false,
      "active": true
    }, {
      "id": 10,
      "catId": 2,
      "name": "Soup - Campbells Broccoli",
      "description": "ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus",
      "image": "http://dummyimage.com/156x137.jpg/cc0000/ffffff",
      "price": 36,
      "stock": 74,
      "featured": false,
      "active": true
    }, {
      "id": 11,
      "catId": 1,
      "name": "Bread Base - Italian",
      "description": "consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi",
      "image": "http://dummyimage.com/172x122.bmp/5fa2dd/ffffff",
      "price": 1,
      "stock": 39,
      "featured": false,
      "active": false
    }, {
      "id": 12,
      "catId": 2,
      "name": "Juice - V8 Splash",
      "description": "quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
      "image": "http://dummyimage.com/194x176.jpg/cc0000/ffffff",
      "price": 98,
      "stock": 36,
      "featured": true,
      "active": true
    }, {
      "id": 13,
      "catId": 1,
      "name": "Soup - Campbells, Chix Gumbo",
      "description": "proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis",
      "image": "http://dummyimage.com/226x161.bmp/ff4444/ffffff",
      "price": 73,
      "stock": 33,
      "featured": false,
      "active": true
    }, {
      "id": 14,
      "catId": 2,
      "name": "Chocolate Liqueur - Godet White",
      "description": "potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis",
      "image": "http://dummyimage.com/222x106.png/5fa2dd/ffffff",
      "price": 63,
      "stock": 49,
      "featured": true,
      "active": true
    }, {
      "id": 15,
      "catId": 2,
      "name": "Wine - Prem Select Charddonany",
      "description": "ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien",
      "image": "http://dummyimage.com/117x132.jpg/ff4444/ffffff",
      "price": 33,
      "stock": 32,
      "featured": true,
      "active": false
    }, {
      "id": 16,
      "catId": 2,
      "name": "White Baguette",
      "description": "massa donec dapibus duis at velit eu est congue elementum in hac",
      "image": "http://dummyimage.com/100x180.bmp/5fa2dd/ffffff",
      "price": 84,
      "stock": 3,
      "featured": true,
      "active": true
    }, {
      "id": 17,
      "catId": 1,
      "name": "Pate - Cognac",
      "description": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel",
      "image": "http://dummyimage.com/227x183.jpg/ff4444/ffffff",
      "price": 25,
      "stock": 37,
      "featured": true,
      "active": true
    }, {
      "id": 18,
      "catId": 2,
      "name": "Wine - Casillero Deldiablo",
      "description": "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae",
      "image": "http://dummyimage.com/120x116.png/5fa2dd/ffffff",
      "price": 75,
      "stock": 96,
      "featured": false,
      "active": false
    }, {
      "id": 19,
      "catId": 2,
      "name": "Pork - Ham, Virginia",
      "description": "orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer",
      "image": "http://dummyimage.com/156x248.jpg/cc0000/ffffff",
      "price": 48,
      "stock": 78,
      "featured": true,
      "active": true
    }, {
      "id": 20,
      "catId": 2,
      "name": "Tomatoes - Heirloom",
      "description": "erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis",
      "image": "http://dummyimage.com/211x222.bmp/ff4444/ffffff",
      "price": 84,
      "stock": 37,
      "featured": false,
      "active": true
    }, {
      "id": 21,
      "catId": 1,
      "name": "Coffee - Cafe Moreno",
      "description": "potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet",
      "image": "http://dummyimage.com/228x180.bmp/cc0000/ffffff",
      "price": 30,
      "stock": 75,
      "featured": true,
      "active": false
    }, {
      "id": 22,
      "catId": 2,
      "name": "Wine - Wyndham Estate Bin 777",
      "description": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium",
      "image": "http://dummyimage.com/110x171.bmp/dddddd/000000",
      "price": 55,
      "stock": 86,
      "featured": false,
      "active": false
    }, {
      "id": 23,
      "catId": 2,
      "name": "Leeks - Large",
      "description": "ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
      "image": "http://dummyimage.com/181x242.png/5fa2dd/ffffff",
      "price": 4,
      "stock": 39,
      "featured": false,
      "active": true
    }, {
      "id": 24,
      "catId": 2,
      "name": "Sprouts - Onion",
      "description": "enim blandit mi in porttitor pede justo eu massa donec dapibus",
      "image": "http://dummyimage.com/224x123.jpg/5fa2dd/ffffff",
      "price": 19,
      "stock": 86,
      "featured": false,
      "active": false
    }, {
      "id": 25,
      "catId": 1,
      "name": "Iced Tea Concentrate",
      "description": "curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a",
      "image": "http://dummyimage.com/202x197.jpg/ff4444/ffffff",
      "price": 85,
      "stock": 85,
      "featured": true,
      "active": false
    }, {
      "id": 26,
      "catId": 2,
      "name": "Langers - Cranberry Cocktail",
      "description": "imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium",
      "image": "http://dummyimage.com/109x170.jpg/cc0000/ffffff",
      "price": 41,
      "stock": 48,
      "featured": true,
      "active": true
    }, {
      "id": 27,
      "catId": 1,
      "name": "Cheese - Asiago",
      "description": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum",
      "image": "http://dummyimage.com/212x111.jpg/5fa2dd/ffffff",
      "price": 13,
      "stock": 49,
      "featured": true,
      "active": true
    }, {
      "id": 28,
      "catId": 2,
      "name": "Tomato Puree",
      "description": "donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et",
      "image": "http://dummyimage.com/217x193.bmp/5fa2dd/ffffff",
      "price": 88,
      "stock": 30,
      "featured": false,
      "active": true
    }, {
      "id": 29,
      "catId": 1,
      "name": "Juice - Grape, White",
      "description": "ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor",
      "image": "http://dummyimage.com/215x233.jpg/5fa2dd/ffffff",
      "price": 65,
      "stock": 3,
      "featured": true,
      "active": true
    }, {
      "id": 30,
      "catId": 2,
      "name": "Water - Green Tea Refresher",
      "description": "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at",
      "image": "http://dummyimage.com/230x212.bmp/5fa2dd/ffffff",
      "price": 87,
      "stock": 41,
      "featured": true,
      "active": true
    }, {
      "id": 31,
      "catId": 2,
      "name": "Cheese - Mozzarella, Shredded",
      "description": "pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet",
      "image": "http://dummyimage.com/107x199.jpg/5fa2dd/ffffff",
      "price": 68,
      "stock": 11,
      "featured": false,
      "active": true
    }, {
      "id": 32,
      "catId": 2,
      "name": "Cookie - Dough Variety",
      "description": "nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula",
      "image": "http://dummyimage.com/200x149.png/5fa2dd/ffffff",
      "price": 56,
      "stock": 55,
      "featured": false,
      "active": false
    }, {
      "id": 33,
      "catId": 1,
      "name": "Table Cloth - 53x69 Colour",
      "description": "neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean",
      "image": "http://dummyimage.com/150x115.jpg/cc0000/ffffff",
      "price": 94,
      "stock": 83,
      "featured": false,
      "active": false
    }, {
      "id": 34,
      "catId": 1,
      "name": "Juice - Orange",
      "description": "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa",
      "image": "http://dummyimage.com/222x159.png/5fa2dd/ffffff",
      "price": 30,
      "stock": 16,
      "featured": false,
      "active": false
    }, {
      "id": 35,
      "catId": 1,
      "name": "Sugar - Brown",
      "description": "lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam",
      "image": "http://dummyimage.com/139x190.jpg/dddddd/000000",
      "price": 3,
      "stock": 4,
      "featured": true,
      "active": false
    }, {
      "id": 36,
      "catId": 2,
      "name": "Salt - Sea",
      "description": "integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas",
      "image": "http://dummyimage.com/199x229.png/ff4444/ffffff",
      "price": 17,
      "stock": 95,
      "featured": false,
      "active": false
    }, {
      "id": 37,
      "catId": 2,
      "name": "Pears - Bosc",
      "description": "nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum",
      "image": "http://dummyimage.com/136x185.png/cc0000/ffffff",
      "price": 5,
      "stock": 68,
      "featured": true,
      "active": false
    }, {
      "id": 38,
      "catId": 2,
      "name": "Mcgillicuddy Vanilla Schnap",
      "description": "id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla",
      "image": "http://dummyimage.com/119x188.bmp/5fa2dd/ffffff",
      "price": 86,
      "stock": 12,
      "featured": false,
      "active": false
    }, {
      "id": 39,
      "catId": 1,
      "name": "Dc Hikiage Hira Huba",
      "description": "dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris",
      "image": "http://dummyimage.com/133x189.jpg/dddddd/000000",
      "price": 40,
      "stock": 36,
      "featured": false,
      "active": true
    }, {
      "id": 40,
      "catId": 2,
      "name": "Soup - Knorr, Classic Can. Chili",
      "description": "orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet",
      "image": "http://dummyimage.com/179x153.bmp/ff4444/ffffff",
      "price": 65,
      "stock": 56,
      "featured": true,
      "active": false
    }, {
      "id": 41,
      "catId": 2,
      "name": "Rum - White, Gg White",
      "description": "libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante",
      "image": "http://dummyimage.com/139x238.jpg/cc0000/ffffff",
      "price": 66,
      "stock": 6,
      "featured": true,
      "active": false
    }, {
      "id": 42,
      "catId": 1,
      "name": "Mushroom - Trumpet, Dry",
      "description": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus",
      "image": "http://dummyimage.com/153x194.png/5fa2dd/ffffff",
      "price": 58,
      "stock": 53,
      "featured": true,
      "active": false
    }, {
      "id": 43,
      "catId": 1,
      "name": "Wine - Ruffino Chianti Classico",
      "description": "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh",
      "image": "http://dummyimage.com/226x230.bmp/ff4444/ffffff",
      "price": 60,
      "stock": 86,
      "featured": true,
      "active": false
    }, {
      "id": 44,
      "catId": 2,
      "name": "Cornish Hen",
      "description": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum",
      "image": "http://dummyimage.com/124x176.png/5fa2dd/ffffff",
      "price": 17,
      "stock": 50,
      "featured": false,
      "active": false
    }, {
      "id": 45,
      "catId": 1,
      "name": "Mousse - Banana Chocolate",
      "description": "nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu",
      "image": "http://dummyimage.com/214x178.bmp/5fa2dd/ffffff",
      "price": 57,
      "stock": 97,
      "featured": true,
      "active": true
    }, {
      "id": 46,
      "catId": 2,
      "name": "Soup - Campbells, Beef Barley",
      "description": "ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus",
      "image": "http://dummyimage.com/249x102.bmp/cc0000/ffffff",
      "price": 15,
      "stock": 93,
      "featured": true,
      "active": true
    }, {
      "id": 47,
      "catId": 2,
      "name": "Island Oasis - Banana Daiquiri",
      "description": "rutrum neque aenean auctor gravida sem praesent id massa id",
      "image": "http://dummyimage.com/201x238.bmp/dddddd/000000",
      "price": 35,
      "stock": 96,
      "featured": true,
      "active": true
    }, {
      "id": 48,
      "catId": 2,
      "name": "Shrimp - 16/20, Iqf, Shell On",
      "description": "in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
      "image": "http://dummyimage.com/228x231.jpg/dddddd/000000",
      "price": 80,
      "stock": 92,
      "featured": true,
      "active": true
    }, {
      "id": 49,
      "catId": 2,
      "name": "Wine - Redchard Merritt",
      "description": "nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in",
      "image": "http://dummyimage.com/154x178.png/5fa2dd/ffffff",
      "price": 56,
      "stock": 28,
      "featured": false,
      "active": true
    }, {
      "id": 50,
      "catId": 1,
      "name": "Longos - Burritos",
      "description": "a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
      "image": "http://dummyimage.com/168x207.bmp/5fa2dd/ffffff",
      "price": 99,
      "stock": 22,
      "featured": true,
      "active": false
    }, {
      "id": 51,
      "catId": 1,
      "name": "General Purpose Trigger",
      "description": "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
      "image": "http://dummyimage.com/141x182.png/5fa2dd/ffffff",
      "price": 62,
      "stock": 10,
      "featured": true,
      "active": false
    }, {
      "id": 52,
      "catId": 2,
      "name": "Gloves - Goldtouch Disposable",
      "description": "volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam",
      "image": "http://dummyimage.com/124x227.jpg/dddddd/000000",
      "price": 46,
      "stock": 96,
      "featured": false,
      "active": true
    }, {
      "id": 53,
      "catId": 1,
      "name": "Pork - Smoked Back Bacon",
      "description": "nunc donec quis orci eget orci vehicula condimentum curabitur in libero",
      "image": "http://dummyimage.com/201x145.png/cc0000/ffffff",
      "price": 77,
      "stock": 1,
      "featured": true,
      "active": true
    }, {
      "id": 54,
      "catId": 2,
      "name": "Cherries - Frozen",
      "description": "pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
      "image": "http://dummyimage.com/103x215.bmp/ff4444/ffffff",
      "price": 52,
      "stock": 88,
      "featured": false,
      "active": false
    }, {
      "id": 55,
      "catId": 1,
      "name": "Canadian Emmenthal",
      "description": "non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas",
      "image": "http://dummyimage.com/157x188.png/5fa2dd/ffffff",
      "price": 2,
      "stock": 45,
      "featured": true,
      "active": true
    }, {
      "id": 56,
      "catId": 1,
      "name": "Cheese - Pont Couvert",
      "description": "sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
      "image": "http://dummyimage.com/235x180.png/cc0000/ffffff",
      "price": 56,
      "stock": 71,
      "featured": true,
      "active": true
    }, {
      "id": 57,
      "catId": 1,
      "name": "Pineapple - Canned, Rings",
      "description": "velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget",
      "image": "http://dummyimage.com/153x107.bmp/ff4444/ffffff",
      "price": 50,
      "stock": 37,
      "featured": true,
      "active": true
    }, {
      "id": 58,
      "catId": 2,
      "name": "Nut - Walnut, Chopped",
      "description": "sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae",
      "image": "http://dummyimage.com/176x104.png/5fa2dd/ffffff",
      "price": 19,
      "stock": 22,
      "featured": true,
      "active": false
    }, {
      "id": 59,
      "catId": 2,
      "name": "Soup - Knorr, Ministrone",
      "description": "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at",
      "image": "http://dummyimage.com/112x151.jpg/5fa2dd/ffffff",
      "price": 62,
      "stock": 40,
      "featured": true,
      "active": false
    }, {
      "id": 60,
      "catId": 1,
      "name": "Fiddlehead - Frozen",
      "description": "lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in",
      "image": "http://dummyimage.com/200x119.bmp/cc0000/ffffff",
      "price": 98,
      "stock": 21,
      "featured": false,
      "active": false
    }, {
      "id": 61,
      "catId": 2,
      "name": "Pork - Ham, Virginia",
      "description": "mauris vulputate elementum nullam varius nulla facilisi cras non velit",
      "image": "http://dummyimage.com/204x225.bmp/ff4444/ffffff",
      "price": 77,
      "stock": 16,
      "featured": true,
      "active": false
    }, {
      "id": 62,
      "catId": 2,
      "name": "Beef - Cooked, Corned",
      "description": "donec dapibus duis at velit eu est congue elementum in hac habitasse platea",
      "image": "http://dummyimage.com/210x178.jpg/ff4444/ffffff",
      "price": 44,
      "stock": 20,
      "featured": true,
      "active": false
    }, {
      "id": 63,
      "catId": 1,
      "name": "Wine - Gato Negro Cabernet",
      "description": "faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan",
      "image": "http://dummyimage.com/231x136.png/ff4444/ffffff",
      "price": 78,
      "stock": 73,
      "featured": true,
      "active": false
    }, {
      "id": 64,
      "catId": 2,
      "name": "Turkey - Whole, Fresh",
      "description": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
      "image": "http://dummyimage.com/120x172.bmp/5fa2dd/ffffff",
      "price": 53,
      "stock": 86,
      "featured": true,
      "active": true
    }, {
      "id": 65,
      "catId": 1,
      "name": "Bar Mix - Lemon",
      "description": "id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac",
      "image": "http://dummyimage.com/215x140.bmp/ff4444/ffffff",
      "price": 12,
      "stock": 24,
      "featured": false,
      "active": false
    }, {
      "id": 66,
      "catId": 2,
      "name": "Skirt - 29 Foot",
      "description": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero",
      "image": "http://dummyimage.com/208x225.jpg/cc0000/ffffff",
      "price": 61,
      "stock": 46,
      "featured": true,
      "active": false
    }, {
      "id": 67,
      "catId": 1,
      "name": "Wooden Mop Handle",
      "description": "libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu",
      "image": "http://dummyimage.com/102x227.png/5fa2dd/ffffff",
      "price": 82,
      "stock": 85,
      "featured": true,
      "active": false
    }, {
      "id": 68,
      "catId": 1,
      "name": "Longos - Chicken Caeser Salad",
      "description": "nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
      "image": "http://dummyimage.com/236x162.bmp/cc0000/ffffff",
      "price": 14,
      "stock": 55,
      "featured": false,
      "active": false
    }, {
      "id": 69,
      "catId": 1,
      "name": "Wine - Touraine Azay - Le - Rideau",
      "description": "ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien in sapien",
      "image": "http://dummyimage.com/180x104.bmp/cc0000/ffffff",
      "price": 47,
      "stock": 18,
      "featured": false,
      "active": false
    }, {
      "id": 70,
      "catId": 2,
      "name": "Pepper - Scotch Bonnet",
      "description": "volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus",
      "image": "http://dummyimage.com/209x217.bmp/dddddd/000000",
      "price": 7,
      "stock": 86,
      "featured": false,
      "active": true
    }, {
      "id": 71,
      "catId": 1,
      "name": "Table Cloth 54x54 White",
      "description": "iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo",
      "image": "http://dummyimage.com/142x154.jpg/dddddd/000000",
      "price": 91,
      "stock": 3,
      "featured": false,
      "active": false
    }, {
      "id": 72,
      "catId": 1,
      "name": "Longos - Lasagna Beef",
      "description": "odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie",
      "image": "http://dummyimage.com/105x198.png/cc0000/ffffff",
      "price": 68,
      "stock": 92,
      "featured": true,
      "active": false
    }, {
      "id": 73,
      "catId": 2,
      "name": "Island Oasis - Magarita Mix",
      "description": "ut erat curabitur gravida nisi at nibh in hac habitasse platea",
      "image": "http://dummyimage.com/172x115.jpg/ff4444/ffffff",
      "price": 19,
      "stock": 98,
      "featured": true,
      "active": true
    }, {
      "id": 74,
      "catId": 1,
      "name": "Catfish - Fillets",
      "description": "aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend",
      "image": "http://dummyimage.com/238x195.bmp/dddddd/000000",
      "price": 48,
      "stock": 66,
      "featured": true,
      "active": true
    }, {
      "id": 75,
      "catId": 1,
      "name": "Coffee Cup 16oz Foam",
      "description": "turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
      "image": "http://dummyimage.com/200x233.png/5fa2dd/ffffff",
      "price": 25,
      "stock": 55,
      "featured": true,
      "active": false
    }, {
      "id": 76,
      "catId": 2,
      "name": "Durian Fruit",
      "description": "curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel",
      "image": "http://dummyimage.com/217x245.jpg/cc0000/ffffff",
      "price": 74,
      "stock": 7,
      "featured": false,
      "active": false
    }, {
      "id": 77,
      "catId": 1,
      "name": "Wine - Magnotta - Red, Baco",
      "description": "fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti in eleifend quam",
      "image": "http://dummyimage.com/163x103.bmp/ff4444/ffffff",
      "price": 76,
      "stock": 76,
      "featured": false,
      "active": true
    }, {
      "id": 78,
      "catId": 2,
      "name": "Filter - Coffee",
      "description": "morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel",
      "image": "http://dummyimage.com/211x180.bmp/dddddd/000000",
      "price": 10,
      "stock": 88,
      "featured": true,
      "active": false
    }, {
      "id": 79,
      "catId": 1,
      "name": "Lychee - Canned",
      "description": "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris",
      "image": "http://dummyimage.com/149x132.png/5fa2dd/ffffff",
      "price": 7,
      "stock": 93,
      "featured": false,
      "active": true
    }, {
      "id": 80,
      "catId": 2,
      "name": "Raisin - Golden",
      "description": "turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel",
      "image": "http://dummyimage.com/235x201.png/5fa2dd/ffffff",
      "price": 87,
      "stock": 10,
      "featured": false,
      "active": false
    }, {
      "id": 81,
      "catId": 1,
      "name": "Sponge Cake Mix - Chocolate",
      "description": "neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis",
      "image": "http://dummyimage.com/232x210.jpg/5fa2dd/ffffff",
      "price": 97,
      "stock": 8,
      "featured": true,
      "active": true
    }, {
      "id": 82,
      "catId": 2,
      "name": "Trout - Hot Smkd, Dbl Fillet",
      "description": "justo in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing",
      "image": "http://dummyimage.com/102x220.bmp/5fa2dd/ffffff",
      "price": 77,
      "stock": 4,
      "featured": false,
      "active": true
    }, {
      "id": 83,
      "catId": 2,
      "name": "Scampi Tail",
      "description": "placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi",
      "image": "http://dummyimage.com/246x100.png/ff4444/ffffff",
      "price": 74,
      "stock": 89,
      "featured": true,
      "active": false
    }, {
      "id": 84,
      "catId": 1,
      "name": "Pasta - Fett Alfredo, Single Serve",
      "description": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed",
      "image": "http://dummyimage.com/145x135.png/5fa2dd/ffffff",
      "price": 91,
      "stock": 74,
      "featured": true,
      "active": false
    }, {
      "id": 85,
      "catId": 1,
      "name": "Pepper - Green Thai",
      "description": "dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id",
      "image": "http://dummyimage.com/111x208.bmp/ff4444/ffffff",
      "price": 75,
      "stock": 93,
      "featured": false,
      "active": false
    }, {
      "id": 86,
      "catId": 2,
      "name": "Soup Bowl Clear 8oz92008",
      "description": "non pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst",
      "image": "http://dummyimage.com/139x241.jpg/ff4444/ffffff",
      "price": 31,
      "stock": 16,
      "featured": true,
      "active": true
    }, {
      "id": 87,
      "catId": 1,
      "name": "Cape Capensis - Fillet",
      "description": "et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare",
      "image": "http://dummyimage.com/173x173.bmp/cc0000/ffffff",
      "price": 80,
      "stock": 64,
      "featured": false,
      "active": true
    }, {
      "id": 88,
      "catId": 1,
      "name": "Soup - Campbells Chicken",
      "description": "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci",
      "image": "http://dummyimage.com/180x236.jpg/5fa2dd/ffffff",
      "price": 13,
      "stock": 17,
      "featured": false,
      "active": false
    }, {
      "id": 89,
      "catId": 2,
      "name": "Beer - Camerons Cream Ale",
      "description": "mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in",
      "image": "http://dummyimage.com/124x201.jpg/5fa2dd/ffffff",
      "price": 73,
      "stock": 9,
      "featured": false,
      "active": true
    }, {
      "id": 90,
      "catId": 1,
      "name": "Cinnamon - Ground",
      "description": "et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus",
      "image": "http://dummyimage.com/163x116.png/dddddd/000000",
      "price": 64,
      "stock": 100,
      "featured": false,
      "active": true
    }, {
      "id": 91,
      "catId": 2,
      "name": "Wine - Magnotta, Merlot Sr Vqa",
      "description": "sed magna at nunc commodo placerat praesent blandit nam nulla integer pede justo lacinia eget tincidunt",
      "image": "http://dummyimage.com/109x175.jpg/cc0000/ffffff",
      "price": 14,
      "stock": 11,
      "featured": true,
      "active": true
    }, {
      "id": 92,
      "catId": 2,
      "name": "Island Oasis - Lemonade",
      "description": "feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium",
      "image": "http://dummyimage.com/148x133.bmp/5fa2dd/ffffff",
      "price": 98,
      "stock": 70,
      "featured": false,
      "active": true
    }, {
      "id": 93,
      "catId": 1,
      "name": "Soup - Campbells, Chix Gumbo",
      "description": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor",
      "image": "http://dummyimage.com/245x217.bmp/ff4444/ffffff",
      "price": 30,
      "stock": 59,
      "featured": false,
      "active": true
    }, {
      "id": 94,
      "catId": 2,
      "name": "Chickhen - Chicken Phyllo",
      "description": "leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit",
      "image": "http://dummyimage.com/119x214.jpg/cc0000/ffffff",
      "price": 6,
      "stock": 48,
      "featured": true,
      "active": true
    }, {
      "id": 95,
      "catId": 1,
      "name": "Juice - Cranberry, 341 Ml",
      "description": "tortor quis turpis sed ante vivamus tortor duis mattis egestas",
      "image": "http://dummyimage.com/193x187.bmp/ff4444/ffffff",
      "price": 75,
      "stock": 30,
      "featured": false,
      "active": false
    }, {
      "id": 96,
      "catId": 2,
      "name": "Syrup - Pancake",
      "description": "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo",
      "image": "http://dummyimage.com/213x137.bmp/dddddd/000000",
      "price": 44,
      "stock": 2,
      "featured": true,
      "active": false
    }, {
      "id": 97,
      "catId": 2,
      "name": "Lettuce - Mini Greens, Whole",
      "description": "et commodo vulputate justo in blandit ultrices enim lorem ipsum dolor",
      "image": "http://dummyimage.com/105x128.bmp/cc0000/ffffff",
      "price": 46,
      "stock": 21,
      "featured": false,
      "active": true
    }, {
      "id": 98,
      "catId": 2,
      "name": "Oil - Sunflower",
      "description": "augue a suscipit nulla elit ac nulla sed vel enim sit amet nunc",
      "image": "http://dummyimage.com/191x214.png/5fa2dd/ffffff",
      "price": 81,
      "stock": 25,
      "featured": true,
      "active": true
    }, {
      "id": 99,
      "catId": 2,
      "name": "Beef - Short Loin",
      "description": "nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat",
      "image": "http://dummyimage.com/172x237.jpg/5fa2dd/ffffff",
      "price": 6,
      "stock": 6,
      "featured": false,
      "active": true
    }, {
      "id": 100,
      "catId": 2,
      "name": "Oyster - In Shell",
      "description": "eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget",
      "image": "http://dummyimage.com/199x159.bmp/cc0000/ffffff",
      "price": 24,
      "stock": 85,
      "featured": true,
      "active": false
    }
  ];

  constructor() { }

  static getProducts(categoryId: number = 0, filterStr: string = ''): Array<Product> {
    let filteredList = this.list;

    if (categoryId > 0) {
      filteredList = this.list.filter(product => product.catId === categoryId);
    }
    if (filterStr) {
      return filteredList.filter(product => product.name.toLocaleLowerCase().includes(filterStr.toLocaleLowerCase()));
    } else {
      return filteredList;
    }
  }
}
