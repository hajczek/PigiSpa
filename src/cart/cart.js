// cart.js

export class Cart {
  constructor() {
    // Unique key for cookies of our app
    this.key = "IT_SPA_CART";

    if (!this.exists()) {
      this.setItSpaCart([]);
    }
  }

  get() {
    // Made array from string with cookies
    const cookies = document.cookie.split(";");
    // Looking for our cookie - return string ("IT_SPA_CART=value") or undefined
    return cookies.find(cookie => cookie.startsWith(this.key));
  }

  // Check if our cookie IT_SPA_CART is set
  exists() {
    return this.get() !== undefined;
  }

  // Read value from our cookie IT_SPA_CART
  getItSpaCart() {
    const cookieValue = this.get();
    // "{foo: 1, bar:[1,2,3]}" --> {foo: 1, bar:[1,2,3]}
    const parsedValue = JSON.paarse(cookieValue);

    return parsedValue;
  }

  // Set cookie
  setItSpaCart(value) {
    const stringifiedValue = JSON.stringify(value);
    document.cookie = `${this.key}=${stringifiedValue}`;
  }

  // Methods for basket - if basket is an array
  add(item) {
    // Add product to basket
    const cartValue = this.getItSpaCart();
    this.setItSpaCart([...cartValue, item]);
  }

  remove(item) {
    // Remove produkct from basket
    const cartValue = this.getItSpaCart();
    const itemInCart = cartValue.findIndex(val => val.name === item.name);

    if (itemInCart !== -1) {
      cartValue.splice(itemInCart, 1);
      this.setItSpaCart(cartValue);
    }
  }
}
