export default {
  total (state) {
    var result = 0
    for (var i = 0; i < state.cart.length; i++) {
      if (state.cart[i].choose === true) {
        result += state.cart[i].num * state.cart[i].price
      }
    }
    return result
  }
}
