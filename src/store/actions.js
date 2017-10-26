import http from 'axios'
import router from '../router'

export default {
  data1 ({commit}) {
    return http.get('http://10.3.151.187:8081/data1').then(data => {
      commit('DATA1', data.data)
      return {status: true}
    })
  },
  data2 ({commit}) {
    return http.get('http://10.3.151.187:8081/data2').then(data => {
      // console.log(data.data[0].obj)
      commit('DATA2', data.data[0].obj)
    })
  },
  classifys ({commit}) {
    return http.get('http://10.3.151.187:8081/classifys').then(data => {
      commit('CLASSIFYS', data.data)
    })
  },
  user (store) {
    return http.get('http://10.3.151.187:8081/user').then(data => {
      store.commit('USER', data.data)
    })
  },
  citys (store) {
    return http.get('http://10.3.151.187:8081/citys').then(data => {
      store.commit('CITYS', data.data)
    })
  },
  Add (store, items) {
    return http.get('http://10.3.151.187:8081/carts').then(data => {
      store.commit('ADD', items)
    })
  },
  subCart (store, item) {
    store.commit('SUB_CART', item)
  },
  addCart (store, item) {
    store.commit('ADD_CART', item)
  },
  choose (store, item) {
    store.commit('CHOOSE', item)
  },
  chooseUser (store, index) {
    store.commit('CHOOSE_USER', index)
  },
  detail (store, item) {
    store.commit('DETAIL', item)
  },
  // 注册 登录
  login (store, phone) {
    return http.get('http://10.3.151.187:8081/phone?phone=' + phone).then(data => {
      if (data.data.length > 0) {
        let phone = data.data[0]
        console.log(phone)
        store.commit('LOGIN', phone)

        return '登录成功'
      } else {
        // 如果没有号码 =》注册
        var obj = {
          phone: phone,
          level: 'V0',
          current_score: 0,
          dif_score: '距下一等级还需 30 成长值',
          selectedSite: {}
        }
        return http.post('http://10.3.151.187:8081/phone', obj).then(data => {
          store.commit('LOGIN', data.data)
          console.log(data.data)
          return '注册成功'
        })
      }
    })
  },
  save (store, obj) {
    return http.post('http://10.3.151.187:8081/user', obj).then(data => {
      store.commit('SAVE', data.data)
    })
  },
  midUser (store, obj) {
    return http.put('http://10.3.151.187:8081/user/' + obj.userid, obj).then(data => {
      router.push('/cart')
    })
  }
}
