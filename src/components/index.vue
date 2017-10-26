<template>
   <div id="index" >
      <div id="b_a">
        <router-link to="/head">
          <a href="" class="home" :class="{active:listId === 'home'}" @click="listId='home'">
              <span ></span>首页
          </a>
        </router-link>
        <router-link to="/supermaket">
          <a href="" class="superMake"  :class="{active:listId === 'superMake'}" @click="listId = 'superMake'">
              <span ></span>闪送超市
          </a>
        </router-link>
        <router-link to="/cart">
          <a href="" class="cart" :class="{active:listId === 'cart'}" @click="listId = 'cart'">
              <span ></span>购物车
              <var >{{sumNum}}</var>
          </a>
        </router-link>
        <router-link to="/login">
          <a href="" class="login"  :class="{active:listId === 'login'}" @click="listId = 'login'">
              <span ></span>我的
          </a>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      listId: 'home'
    }
  },
  computed: {
    sumNum () {
      return this.$store.state.sumNum
    },
    hiden () {
      return this.$store.state.hide
    }
  }
}
</script>

<style>
#b_a{
    height: 8%;
    position: fixed;
    bottom:0;
    background: rgba(246,246,246,.95);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-end;
    border-top: 1px solid #bbb
}
#b_a a{
    font-size: 12px;
    color: #777;
    text-decoration: none;
    padding-top: 5%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
}
#index #b_a a span{
    display: inline-block;
    width:20px;
    height: 20px;
    background-size: 100% 100%;
}
#b_a .home>span{
    background: url("../../static/images/1-1.png") 0 0 no-repeat;
}
#b_a .superMake>span{
    background: url("../../static/images/1-2.png") 0 0 no-repeat;
}
#b_a .cart>span{
    background: url("../../static/images/1-3.png") 0 0 no-repeat;
}
#b_a .login>span{
    background: url("../../static/images/1-4.png") 0 0 no-repeat;
}
#b_a .home.active>span{
    background: url("../../static/images/2-1.png") 0 0 no-repeat;
    animation: bounceIn 1s 1;
}
#b_a .superMake.active>span{
    background: url("../../static/images/2-2.png");
    animation: bounceIn 1s 1;
}
#b_a .cart.active>span{
    background: url("../../static/images/2-3.png");
    animation: bounceIn 1s  1;
}
#b_a .login.active>span{
    background: url("../../static/images/2-4.png");
    animation: bounceIn 1s 1;
}
#b_a .cart{
    position: relative;
}
#b_a a.cart>var{
    position: absolute;
    top:0;
    left: 3rem;
    background: red;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    color: #fff;
    text-align: center;
    line-height: 1.5rem;
    transform: scale(1);
    transition:all 0.5s ;
}
#b_a a.cart>var.active{
    transform:scale(1.5);
}
</style>
