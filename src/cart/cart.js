/** Class representing a Cart. */
export class Cart {
  constructor() {
    // Unique key for cookies of our app
    this.key = "PIGI_SPA_CART";

    if (!this.exists()) {
      this.setItSpaCart([]);
    }
  }

  get() {
    // Made array from string with cookies
    const cookies = document.cookie.split(";");
    // Looking for our cookie - return string ("PIGI_SPA_CART=value") or undefined
    // Define cookie with key 'PIGI_SPA_CART'
    let cookieFirst = cookies.find((cookie) => cookie.startsWith(this.key));
    // Define cookie with key ' PIGI_SPA_CART'
    let cookieSecond = cookies.find((cookie) =>
      cookie.startsWith(" " + this.key)
    );

    // Return this cookie, which exist
    if (cookieFirst) {
      return cookieFirst;
    } else {
      return cookieSecond;
    }
  }

  // Check if our cookie PIGI_SPA_CART is set
  exists() {
    return this.get() !== undefined;
  }

  // Read value from our cookie PIGI_SPA_CART
  getItSpaCart() {
    // Define variale for cookie value
    let cookieValue;
    // If cookie with key 'PIGI_SPA_CART' exists
    if (this.get() === "PIGI_SPA_CART") {
      // Remove key name from begining and set value of this cookie to cookieValue variable
      cookieValue = this.get().slice(13);
    } else {
      // Remove key name with white space before from begining and set value of this cookie to cookieValue variable
      cookieValue = this.get().slice(14);
    }
    const parsedValue = JSON.parse(cookieValue);

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
    const itemInCart = cartValue.findIndex((val) => val.name === item.name);

    if (itemInCart !== -1) {
      cartValue.splice(itemInCart, 1);
      this.setItSpaCart(cartValue);
    }
  }
}
