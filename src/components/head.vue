<template>
  <main >
    <div class="top">
   <header v-for='(item, index) in value' :key='item.id'>
        <h2>{{item.address}}<span class="glyphicon glyphicon-triangle-bottom" ></span></h2>
        <div id="top_search"  @click="hide">
            <router-link to="/search" >
                <span></span>
                <a href="" >搜 索</a>
            </router-link>
        </div>
    </header>
  </div>
  <div id="bottom">
    <div id="home_banner" v-for="(item, index) in value" :key='item.id'>
      <img :src="item.banner" alt="">
    </div>
    <div id="home_list">
      <ul v-for="(item, index) in value2" :key='item.id' >
        <li>
          <div class="home_top">
            <p >{{item.name}}</p>
            <span> 更多> </span>
          </div>
          <div class="home_bottom" >
            <img :src="item.sbanner">
            <ul >
              <li v-for="(items, index) in item.goods" :key='items.id' >
                <img v-lazy="items.imgs.small" alt="" @click="detail(items)">
                <p>{{items.title}}</p>
                <p>{{items.unit}}{{items.measure}}</p>
                <span>{{items.price}}</span>
                <button class="btn glyphicon glyphicon-plus" @click="Add(items)"></button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div id="home_rebase"></div>
  </div>
  </main>
</template>

<script>
export default {
  methods: {
    hide () {
      this.$store.state.hide = false
    },
    Add (items) {
      this.$store.dispatch('Add', items)
      console.log(items)
    },
    detail (items) {
      this.$store.dispatch('detail', items).then(data => {
        this.$router.push('/details')
      })
    }
  },
  computed: {
    value () {
      return this.$store.state.first
    },
    value2 () {
      return this.$store.state.second
    }
  }
}
</script>
<style scoped>
header{
    height: 8.5%;
    background: #ffd600;
    position: fixed;
    top: 0;
    font-size: 13px;
    display:block;
    z-index: 10;
}
header h2{
    color: #000;
    font-size: 16px;
    text-align: center;
}
header a{
    display: block;
    color: #000;
}
header #top_search{
    position: absolute;
    top:10%;
    right: 2%;
}
header #top_search span {
    display: block;
    width: 25px;
    height: 25px;
    margin-left: 20%;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHdUExURUxpcUE3M0E4Mj8/KkE4MlVVVX8AAEI4MgAAAEE3MUI4Lz8/Pzg4OD8zM0M0NDMzM0QzM0E3MUI3MUI3MUE4MkI3MUE2MlUqKkE3MkQ7M0E3MkE3M0I3MkE3MkI4MUQ3M0E4MUI3MUE4MUM3MUI4MUI5M0I3MUE3MkI4MkE4MkA4M0I3M0I4MUE4MUE4MUI4M0E4MkI4M0U5Lj86L0I4MEE4MUI4MUQ6MUI3MkI3N0I3MkE3MkE3MUI4MkI2MEE4MUUuLkE4MUI3MkE3MUE3MUM4MUI4MUA2M0E3MkM4MkE3MkA3M0E3MkE4MkE4MkE4MkE4MD83L0E4MUI4MkE2MUI4MkE4MkE4M0E3MkY0NEA3MkI4MT85NEE5MUhIJEI4M0E3MUE3MUI3MkE4MkI3MTo6OkM5NEI2MEE3MkI4MkE3MUM6MUM4MD8/L0E5MUE2M0E5MEQ3MEE4MkE2MkI3MT8/P0A3M0E4MkE3MkE3Mj82MkI4MUM5MkI3MkI3MkI4MUQ3MUE4MUE3MkE4MkE3M0E3MkI4MkM4M0I4MUI3MUI3MUE3MUI2MkI3MUI3MUI4MkI3MUI3MUM3M0I4MUM1NUA4MEE3MkE3MUI4MkI3MkY4OEE3MUg2Nj82LUI4Mvk7IcoAAACedFJOUwBp+Qz9AwL+AfwbBAkUIgUPrvf2iPt0Bvget33bsmc87NhtcudV05yx0TtFlb7xMlY2FjBj9bka7xemM+F+KugLv6GBgEjrS7tblzfpq7Z1XiCMzF2thFplHWqLLD4HZO2PvNqKDTFU5cthOUQQH0ZZJdVCWAhu3uSJOPpM6vN2KXGT9ErGUV9oXLibPXel1IZ7QGwTP2avg8ES0g4c7kV8ugAAAdNJREFUOMuNlGVbG0EURpdkk9mNATECheJFizu0hRp1d3d3d+rurue3tsAmWZ3mfpn33uc8e212FMVuZX7lv9bzdeRXBsTYwIdOCVbdnCJv806VuWOxKrj9Mv1lMBL43PuiqQZqL7txKzsYWtqT94svXEIkA3ZM2waLo9ZYuD5D6VUbeATfBmeWzgaard8swtfmVs/FG9w0+8d84rh7h71xcSbvBU/S7jWyaxzOT+kKJ456gYEWduScFuq8t9BIbVaOck+y3fAaVhvyOyOy/a9iiaF+0CcDu5gw1BCjMnAhi2bFb/gpA8eheEb8gbD0kkLJzDkMERmnZcGIICQDo6QMNcZHGdhNpaG+8UYG7mKroT4xXwaW5hYc0tVz3tzZuLozq6s46A2mOZTTp4nHvLiSu5w3l7Ei6AG2WxoYXM4cd+6pSNw3+8t0UeTGtfbzXLH9hmKB5uAeP0I8s8Xm6lRstIYiSZUnOFJN1pDYZFr6vr7rpKa0B0KkbWRoLegD9a3DQcW/Z3vTgX/v2a3pVKqz0ep1qunZq9w/e1+36CQd1Zevr2iYhhKbd+/N9dbo46HmMhJ/eSxqHf+dDK8CSiHW1s/bcEHk6w7eFwQq3e+6lELtLwo6dyZRH5BEAAAAAElFTkSuQmCC");
    background-size: 100% 100%;
}
#bottom{
  width: 100%;
  position: absolute;
  top:8.5%;
}
  #home_banner {
    width: 100%;
    height: 50%;
    overflow: hidden;
  }
  #home_banner>img {
    width: 100%;
  }
  a{
    text-decoration: none;
  }
  #home_list ul li {
    margin-top: 4%;
  }
  #home_list .home_top {
    width: 100%;
    height: 100%;
  }
  #home_list .home_top p {
    display: inline-block;
    border-left: 10px solid;
    margin-left: 3%;
    padding-left: 1%;
    font-weight: 800;
    font-size: 16px;
  }
  #home_list .home_top span {
    float: right;
    color: #aaa;
  }
  .home_bottom img {
    width: 100%;
    height: 100%;
  }
  .home_bottom img:first-of-type {
    width: 94%;
    height: 100%;
    margin: 0 3%;
  }
  .home_bottom ul {
    width: 94%;
    height: 100%;
    margin: 0 3%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .home_bottom li {
    width: 33%;
    height: 100%;
    border-right: 1px solid #ccc;
  }
  .home_bottom li:last-of-type {
    border-right: none;
  }
  .home_bottom span {
    color: #f00;
  }
  .home_bottom p:first-of-type {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    background: none;
    line-height: 10px;
    color: #f00;
    border: 1px solid orange;
    padding: 8px;
    margin-left: 3%;
    outline: none !important;
  }
  button {
    outline: none;
    color: yellow;
  }
  #home_rebase {
    width: 100%;
    height: 5rem;
  }
  .addBtn{
    transform: scale(1.5)
  }
   img[lazy=loading] {
    width: 50px;
    height: 50px;
    margin: auto;
    background: url('../../static/images/loading.gif');
    background-size: 30% 30%;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
