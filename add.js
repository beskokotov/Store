// class Goods {
//   constructor(price, name) {
//     this.price = price;
//     this.name = name;

//     this.store = 10;
//     this.element = undefined;
//   }

//   buy(count = 1) {
//     this.store -= count;
//   }

//   // getHTML() {
//   //   return `<article class="product">
//   //           <img class="product__img" src="img/product_list_1.png" alt="photo product">
//   //           <div class="product__content">
//   //               <p class="product__name">${this.name}</p>
//   //               <p class="product__price">${this.price}</p>
//   //           </div>
//   //           </article>`;
//   // }

//   render() {
//     const product = document.createElement("article");
//     product.classList.add("product");

//     const img = document.createElement("img");
//     img.classList.add("product__img");
//     img.src = "img/product_list_1.png";
//     img.alt = "product_list_1";
//     product.appendChild(img);

//     const content = document.createElement("div");
//     content.classList.add("product__content");
//     product.appendChild(content);

//     const name = document.createElement("div");
//     name.classList.add("product__name");
//     name.innerText = this.name;
//     content.appendChild(name);

//     const price = document.createElement("div");
//     price.classList.add("product__price");
//     price.innerText = this.price;
//     content.appendChild(price);

//     this.element = product;
//     return this.element;
//   }

//   goodsList() {}
// }

// class Clothes extends Goods {
//   constructor(price, name, calor, size = "M") {
//     super(price, name);

//     this.calor = calor;
//     this.size = size;
//   }
// }

// class Foods extends Goods {
//   constructor(price, name, expires = true) {
//     super(price, name);

//     this.expires = expires;
//   }

//   get price() {
//     return this.price;
//   }

//   set price(price) {
//     this.price = price;
//   }

//   isFresh() {
//     return this.expires;
//   }

//   buy(count = 1) {
//     if (this.isFresh()) {
//       this.store -= count;
//     }
//   }

//   render() {
//     const product = this.render();

//     this.element = product;
//     return this.element;
//   }
// }

class Basket {
  /*Корзина
   */
  constructor() {}

  add_product() {
    /* TODO
    добавить продукт
     */
    makeGETRequest(
      "https://github.com/GeekBrainsTutorial/online-store-api/blob/master/responses/addToBasket.json"
    );
  }

  del_product() {
    /* TODO
    удалить продукт
     */
    makeGETRequest(
      "https://github.com/GeekBrainsTutorial/online-store-api/blob/master/responses/deleteFromBasket.json"
    );
  }

  change__size_product() {
    /* TODO
    выбрать размер продукта
     */
    makeGETRequest(
      "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"
    );
  }

  change__pay_product() {
    /* TODO
    выбрать способ оплаты продукта
     */
    makeGETRequest(
      "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"
    );
  }

  deliver__place_product() {
    /* TODO
    выбрать место доставки продукта
     */
    makeGETRequest(
      "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"
    );
  }
  deliver__time_product() {
    /* TODO
    выбрать время доставки продукта
     */
    makeGETRequest(
      "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"
    );
  }

  arrange_product() {
    /* TODO
    оформить заказ
     */
    makeGETRequest(
      "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json"
    );
  }
}

// const goods = new Goods(250, "T-shirt");

// goods.buy();
// console.log(goods);
// goods.buy(4);
// console.log(goods);

// const arrGoods = [
//   new Goods(250, "T-shirt1", "green"),
//   new Goods(300, "T-shirt2", "black"),
//   new Goods(35023, "T-shirt3", "red"),
//   new Goods(400, "T-shirt4", "white"),
//   new Goods(4502, "T-shirt5", "green"),
//   new Goods(345, "T-shirt6", "gray"),
//   new Goods(845, "T-shirt7", "black"),
//   new Goods(4335, "T-shirt8", "white"),
//   new Goods(897, "T-shirt9", "black"),
//   new Goods(45, "T-shirt10", "red"),
//   new Goods(4756, "T-shirt11", "green"),
//   new Goods(2, "T-shirt12", "pink"),
// ];

function GoodsSum(Goods) {
  //TODO
  let summ = null;
  for (price in arrGoods) {
    return summ;
  }
}

// console.log(arrClothes[0]);

// const app = document.getElementById("app");

// for (let el of arrGoods) {
//   //Object.keys(<object>) | .values(<object>)
//   app.innerHTML += el.getHTML();
// }

// // for (let el of arrClothes) {
// //   //Object.keys(<object>) | .values(<object>)
// //   app.appendChild(el.render());
// // }

// /*ПО СТАРИНОЧКЕ*/
// function OldGoods() {
//   this.store = 45;
//   this.render = () =>
//     `<article class="product">
//       <img class="product__img" src="img/product_list_1.png" alt="photo product">
//       <div class="product__content">
//         <p class="product__name">name</p>
//         <p class="product__price">price</p>
//       </div>
//     </article>`;
// }

// OldGoods.prototype.render = function () {
//   return `<article class="product">
//             <img class="product__img" src="img/product_list_1.png" alt="photo product">
//             <div class="product__content">
//               <p class="product__name">name</p>
//               <p class="product__price">price</p>
//             </div>
//           </article>`;
// };

// const oldGoods = new OldGoods();
// console.log(oldGoods, oldGoods.render);

// function OldClothes(color, size = "M") {
//   const parent = new OldGoods();
//   for (let prop in parent) {
//     this[prop] = parent[prop];
//   }

//   this.color = color;
//   this.size = size;
// }

// OldClothes.prototype = Object.create(OldGoods.prototype);
// OldClothes.prototype.constructor = OldClothes;

// const oldClothes = new OldClothes("red");
// console.log(oldClothes, oldClothes.render);

// //Ассинхронные запросы
// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   // console.log("onreadystatechange");
//   // console.log(xhr);
//   // debugger;
//   if (xhr.readyState === 4) {
//     console.log(xhr.responseText);
//     console.log(JSON.parse(xhr.responseText));

//     const res = JSON.parse(xhr.responseText);
//     for (let i of res) {
//       const item = new Goods(i.price, i.product_name);
//       app.appendChild(item.render());
//     }
//   }
// };

// xhr.open(
//   "GET",
//   "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json",
//   true
// );
// xhr.send();

// //Коллбек
// setTimeout(function () {
//   console.log("setTimeout");
// }, 2000);

// const sum = function (a, b, callbackFunction) {
//   setTimeout(function () {
//     const res = a + b;
//     callbackFunction(res);
//     // return res;
//   }, 2000);
// };

// sum(1, 2, console.log);

// // Промис
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const a = Math.round(Math.random() * 10);
//     const b = Math.round(Math.random() * 10);
//     const sum = a + b;

//     if (sum < 15) {
//       resolve(sum);
//     } else {
//       reject("So very big int");
//     }
//   }, 2000);
// });

// promise
//   .then((sum) => {
//     console.log("sum", sum);
//   })
//   .catch(console.error);

// // Фетч
// const func = () => {
//   fetch(
//     "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json",
//     {
//       method: "GET",
//       headers: {},
//       // body: "",
//     }
//   )
//     .then((res) => {
//       console.log("fetch", res);
//       throw new Error("TEST");
//       return res.json();
//     })
//     .then((res) => {
//       console.log("json res", res);
//       for (let i of res) {
//         const item = new Goods(i.price, i.product_name + "_fetch");
//         app.appendChild(item.render());
//       }
//     })
//     .catch((error) => {
//       setTimeout(() => {
//         console.log("catch error", error);
//         func();
//       }, 5000);
//     });
// };

// func();

// function makeGETRequest(url, callback) {
//   let xhr; // var -> let

//   if (window.XMLHttpRequest) {
//     xhr = new XMLHttpRequest();
//   } else if (window.ActiveXObject) {
//     xhr = new ActiveXObject("Microsoft.XMLHTTP");
//   }

//   xhr.onreadystatechange = () => {
//     // classic function -> lambda function
//     if (xhr.readyState === 4) {
//       callback(xhr.responseText);
//     }
//   };

//   xhr.open("GET", url, true);
//   xhr.send();
// }

makeGETRequest(
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json",
  (r) => console.log("end", r)
);

function makeGETRequest(url) {
  let xhr = null;
  return new Promise((resolve, reject) => {
    if (window.XMLHttpRequest) {
      resolve((xhr = new XMLHttpRequest()));
    } else {
      reject((xhr = new ActiveXObject("Microsoft.XMLHTTP")));
    }
  });
}

const promise = makeGETRequest();
promise.then(success, failure);

//РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ

const parag = `But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give 
you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
'No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure 
rationally encounter consequences that are extremely painful.' Nor aren't is there anyone who loves or pursues or desires to obtain 
pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
To take a trivial example, which of us aren't undertakes laborious physical exercise, except to obtain some advantage from it? 
But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain 
that produces no resultant pleasure?`;

const parag1 = parag.replace(/\'/gm, '"');
console.log(parag1.replace(/\b"/gm, "'"));
