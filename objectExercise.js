const user = {
  name: "Alice",
  email: "example@example.com",
  isOnline: false,
  login() {
    return (this.isOnline = true);
  },
  logout() {
    return (this.isOnline = false);
  },
};

const cart = {
  items: [],
  addItem(item) {},
  removeItem(item) {},
  getTotalPrice() {},
};

console.log(user.login());
console.log(user.isOnline);
console.log(user.logout());
console.log(user.isOnline);
