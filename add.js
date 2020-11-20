class Goods {
  constructor(price, name) {
    this.price = price;
    this.name = name;

    this.store = 10;
    this.element = undefined;
  }

  buy(count = 1) {
    this.store -= count;
  }

  // getHTML() {
  //   return `<article class="product">
  //           <img class="product__img" src="img/product_list_1.png" alt="photo product">
  //           <div class="product__content">
  //               <p class="product__name">${this.name}</p>
  //               <p class="product__price">${this.price}</p>
  //           </div>
  //           </article>`;
  // }

  render() {
    const product = document.createElement("article");
    product.classList.add("product");

    const img = document.createElement("img");
    img.classList.add("product__img");
    img.src = "img/product_list_1.png";
    img.alt = "product_list_1";
    product.appendChild(img);

    const content = document.createElement("div");
    content.classList.add("product__content");
    product.appendChild(content);

    const name = document.createElement("div");
    name.classList.add("product__name");
    name.innerText = this.name;
    content.appendChild(name);

    const price = document.createElement("div");
    price.classList.add("product__price");
    price.innerText = this.price;
    content.appendChild(price);

    this.element = product;
    return this.element;
  }

  goodsList(){
   
  }
}

class Clothes extends Goods {
  constructor(price, name, calor, size = "M") {
    super(price, name);

    this.calor = calor;
    this.size = size;
  }
}

class Foods extends Goods {
  constructor(price, name, expires = true) {
    super(price, name);

    this.expires = expires;
  }

  get price() {
    return this.price;
  }

  set price(price) {
    this.price = price;
  }

  isFresh() {
    return this.expires;
  }

  buy(count = 1) {
    if (this.isFresh()) {
      this.store -= count;
    }
  }

  render() {
    const product = this.render();

    this.element = product;
    return this.element;
  }
}

class Basket { //Корзина
  constructor(name, quantity, cost, deletion) { //Имя, Колличество, Цена, Удаление товара
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
    this.deletion = deletion;
  }

  add_quantity(count = 1) { //добавить колличество копий

  }

  arrange(){ //Оформить покупку

  }

}

const goods = new Goods(250, "T-shirt");

goods.buy();
console.log(goods);
goods.buy(4);
console.log(goods);

const arrClothes = [
  new Clothes(250, "T-shirt1", "green"),
  new Clothes(300, "T-shirt2", "black"),
  new Clothes(35023, "T-shirt3", "red"),
  new Clothes(400, "T-shirt4", "white"),
  new Clothes(4502, "T-shirt5", "green"),
  new Clothes(345, "T-shirt6", "gray"),
  new Clothes(845, "T-shirt7", "black"),
  new Clothes(4335, "T-shirt8", "white"),
  new Clothes(897, "T-shirt9", "black"),
  new Clothes(45, "T-shirt10", "red"),
  new Clothes(4756, "T-shirt11", "green"),
  new Clothes(2, "T-shirt12", "pink"),
];

console.log(arrClothes[0]);

const app = document.getElementById("app");

// for (let el of arrGoods) {
//   //Object.keys(<object>) | .values(<object>)
//   app.innerHTML += el.getHTML();
// }

for (let el of arrClothes) {
  //Object.keys(<object>) | .values(<object>)
  app.appendChild(el.render());
}

/*ПО СТАРИНОЧКЕ*/
function OldGoods() {
  this.store = 45;
  this.render = () =>
    `<article class="product">
      <img class="product__img" src="img/product_list_1.png" alt="photo product">
      <div class="product__content">
        <p class="product__name">name</p>
        <p class="product__price">price</p>
      </div>
    </article>`;
}

OldGoods.prototype.render = function () {
  return `<article class="product">
            <img class="product__img" src="img/product_list_1.png" alt="photo product">
            <div class="product__content">
              <p class="product__name">name</p>
              <p class="product__price">price</p>
            </div>
          </article>`;
};

const oldGoods = new OldGoods();
console.log(oldGoods, oldGoods.render);

function OldClothes(color, size = "M") {
  const parent = new OldGoods();
  for (let prop in parent) {
    this[prop] = parent[prop];
  }

  this.color = color;
  this.size = size;
}

OldClothes.prototype = Object.create(OldGoods.prototype);
OldClothes.prototype.constructor = OldClothes;

const oldClothes = new OldClothes("red");
console.log(oldClothes, oldClothes.render);
