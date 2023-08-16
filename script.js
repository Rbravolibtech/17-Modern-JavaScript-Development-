//////////// EXPORTING AND IMPORTING IN ES6 MODULES ///////////
/*
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

//////////// TOP LEVEL AWAIT (ES2022 ///////////
// console.log('START FETCHING');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

const lastPost2 = await getLastPost();
console.log(lastPost2);
*/
//////////// THE MODULE PATTERN ///////////
/*
const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ORDERED FROM SUPPLIER`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
*/
//////////// COMMON JS MODULES///////////
/*
//EXPORT
export.addTocart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
    );
  };

  //IMPORT
  const { addTocart } = require('./shoppingCart.js')
  */
//////////// INTRODUCTION TO NPM ///////////

// import cloneDeep from 'lodash/cloneDeep';

// const state = {
//   cart: [
//     { product: 'bread', quantity: 5 },
//     { product: 'pizza', quantity: 5 },
//   ],
//   user: { loggedIn: true },
// };
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);

// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }

// class Person {
//   #greeting = 'Hey';
//   constructor(name) {
//     this.name = name;
//     console.log(`${this.#greeting}, ${this.name}`);
//   }
// }
// const jonas = new Person('Jonas');

// console.log('Jonas' ?? null);

// console.log(cart.find(el => el.quantity >= 2));
// Promise.resolve('TEST').then(x => console.log(x));

// import 'core-js/stable';
// // import 'core-js/stable/array/find';
// // import 'core-js/stable/promise';

// // Polifilling async functions
// import 'regenerator-runtime/runtime';
