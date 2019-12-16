// 템플릿엔진 모듈
const Engine = function(selector) {
    const dom = document.querySelector(selector);
    if (undefined === Engine[selector]) {
      // Init template
      Engine[selector] = dom.innerHTML.trim().replace(/>\s+</g, '><');
      dom.innerHTML = '';
    }
  
    const render = function(data) {
      const arr = Array.isArray(data) ? data : [data];
      dom.innerHTML = arr.reduce((html, data) => {
        html += Engine[selector].replace(/{{ *(\w+) *}}/g, (m, key) => data[key] || '');
        return html;
      }, '');
      return this;
    };
  
    return {
      dom: dom,
      render: render,
    };
  };
  
  
  if(undefined === sessionStorage.cart) {
    sessionStorage.cart = '[{"name":"상품명1","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/01.jpg","price":5000,"quantity":2},{"name":"상품명2","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/02.jpg","price":7000,"quantity":2},{"name":"상품명3","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/03.jpg","price":6000,"quantity":3},{"name":"상품명4","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/04.jpg","price":10000,"quantity":1},{"name":"상품명5","src":"https://raw.githubusercontent.com/it-crafts/mockapi/master/img/05.jpg","price":3000,"quantity":5}]';
  }
  
  const store = (function() {
    let state = {};
    let commit = function(key, value) {
        state[key] = value;
    }
    return {
        commit: commit,
        get state() {
            return Object.create(state);
        }
    }
  }());
  
  const Item = function(param = {}) {
    const src= param.src;
    const name = param.name;
    const price = param.price;
    const quantity = param.quantity;
    const total = param.total;
    console.log(param)
    const _cart = new Engine('#cart');
    const _sum = new Engine('#sum');
  
    const create = function() {
      _sum.render(param);
      _cart.render(param);
    }
  
    create();
  }
  
  const Cart = function(param = {}) {
    const items = param.items.map((item, i) => {
      console.log(i)
      return new Item(item);
    });
  }
  
  const Total = function() {
  
  }
  
  const CartPage = function(param = {}) {
    const keyQuantity = Symbol('Quantity');
    const keyTotal = Symbol('Total');
    const cart = new Cart(param);
    const total = new Total();
  }
  
  
  const root = (function() {
    // TODO header
    const cart = {};
    const items = JSON.parse(sessionStorage.cart).map(item => {
      return {
          name: item.name,
          src: item.src,
          price: item.price,
          quantity: item.quantity,
          get total() {
              return this.price * this.quantity;
          }
      }
    });
  
    cart.items = items;  
    const page = new CartPage(cart);
  
  }());