export default {
  DATA1 (state, data) {
    state.first = data
  },
  DATA2 (state, data) {
    state.second = data
  },
  CLASSIFYS (state, data) {
    state.classifys = data
  },
  USER (state, data) {
    state.user = data
  },
  CITYS (state, data) {
    state.citys = data
  },
  // 添加商品
  ADD (state, items) {
    var boolean = state.cart.indexOf(items)
    state.sumNum++
    if (boolean === -1) {
      items.num += 1
      state.cart.push(items)
    } else {
      items.num += 1
    }
  },
  // 减少商品
  SUB_CART (state, item) {
    for (var i = 0; i < state.cart.length; i++) {
      if (item === state.cart[i]) {
        if (state.cart[i].num > 0) {
          state.cart[i].num--
          state.sumNum--
        } else {
          state.cart.splice(state.cart.indexOf(item), 1)
        }
        break
      }
    }
  },
  // 增加商品
  ADD_CART (state, item) {
    for (var i = 0; i < state.cart.length; i++) {
      if (item === state.cart[i]) {
        state.cart[i].num++
        state.sumNum++
        break
      }
    }
  },
  LOGIN (state, data) {
    state.userPhone = data
  },
  // 存储选取的城市
  CHANGE_CITY (state, city) {
    state.selectCity = city
  },
  // 保存用户信息
  SAVE (state, obj) {
    state.user.push(obj)
  },
  // 保存选取用户的下表
  CHOOSE_USER (state, index) {
    state.index = index
  },
  // 选中物品存入详情页
  DETAIL (state, data) {
    state.detail = data
  }
}
