<template>
  <div id="box">
    <div class="top">
   <header v-for='(item, index) in value' :key='item.id'>
        <h2>{{item.address}}<span class="glyphicon glyphicon-triangle-bottom" ></span></h2>
        <div id="top_search"  @click="hide">
            <router-link to="/search" >
                <span ></span>
                <a href="" >搜 索</a>
            </router-link>
        </div>
    </header>
  </div>
    <div id="make_left">
      <ul >
        <li  v-for='(item, index) in classifys' :key='item.id' :class="{active:activeBol === index}" @click="changeValue(index)">{{item.classify_title}}</li>
        <li id="make_rebase"></li>
      </ul>
    </div>
    <div id="make_right">
      <div id="make_rTop">
        <p @click="arrows()">全部分类<span :class="{transform:arrowsBol}"></span></p>
        <p @click="arrows2()">综合排序<span :class="{transform:arrowsBol2}"></span></p>
      </div>
      <div id="make_list">
        <ul >
          <li v-for="(item,index) in classifysList " :key="item.id" >
            <div id="make_list_left" @click="detail(item)">
            <img v-lazy="item.imgs.small" alt="">
            </div>
            <div id="make_list_right">
              <p>{{item.title}}</p>
              <p>{{item.unit}}</p>
              <span>￥{{item.price}}</span>
              <button  class="btn glyphicon glyphicon-plus" @click="Add(item)"></button>
            </div>
          </li>
        </ul>
      </div>
      <div class="make_rbottom" v-show="arrowsBol">
        <div class="make_ul_box" >
          <ul >
            <li v-for='(item, index) in classifys2' :class='{sortStyle: cidsIndex === index}' :key="item.id" @click="changeValue2(index)">{{item.name}}</li>
          </ul>
        </div>
      </div>
      <div class="make_rbottom" v-show="arrowsBol2">
        <div class="make_ul_box" >
          <ul>
            <li>价格排序</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // function sort () {
  // }
  export default {
    data () {
      return {
        ClassifysTitle: 0,
        cidsIndex: 0,
        activeBol: 0,
        arrowsBol: false,
        arrowsBol2: false
      }
    },
    methods: {
      hide () {
        this.$store.state.hide = false
      },
      changeValue (index) {
        console.log(index)
        this.ClassifysTitle = index
        this.activeBol = index
      },
      changeValue2 (index) {
        console.log(index)
        this.cidsIndex = index
      },
      arrows () {
        this.arrowsBol = !this.arrowsBol
        this.arrowsBol2 = false
      },
      arrows2 () {
        this.arrowsBol2 = !this.arrowsBol2
        this.arrowsBol = false
      },
      Add (item) {
        this.$store.dispatch('Add', item)
        console.log(item)
      },
      detail (item) {
        this.$store.dispatch('detail', item).then(data => {
          this.$router.push('/details')
        })
      }
    },
    computed: {
      value () {
        return this.$store.state.first
      },
      classifys () {
        return this.$store.state.classifys
      },
      classifys2 () {
        return this.classifys[this.ClassifysTitle].cids
      },
      classifysList () {
        var arr = []
        if (this.cidsIndex === 0) {
          return this.classifys[this.ClassifysTitle].products
        } else {
          for (var i = 0; i < this.classifys[this.ClassifysTitle].products.length; i++) {
            if (this.cidsIndex === this.classifys[this.ClassifysTitle].products[i].cids) {
              arr.push(this.classifys[this.ClassifysTitle].products[i])
            }
          }
          return arr
        }
      }
    }
  }
</script>
<style scoped>
  #box {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 8.5%;
  }
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
  #make_left {
    float: left;
    width: 25%;
    height: 100%;
    background: #fafafa;
    position: fixed;
    overflow: scroll;
    color: #6d6d6d;
  }
  #make_left ul {
    width: 100%;
    height: 100%;
    overflow: scroll;
  }
  #make_left li {
    padding: 20% 0;
    border-bottom: 1px solid #ccc;
  }
 #make_left #make_list_right{
   width: 70%;
 }
  #make_rebase {
    width: 100%;
    height: 9rem;
  }

  #make_right {
    float: right;
    width: 75%;
    height: 100%;
    background: rgba(250,250,250,.6)
  }

  #make_rTop {
    position: fixed;
    width: 75%;
    display: flex;
    height:4.9rem;
    flex-flow: row nowrap;
    justify-content: space-around;
    line-height: 4.9rem;
    border-bottom: 1px solid #ccc;
    background:rgba(250,250,250,.9);
  }

  #make_rTop p:first-of-type {
    border-right: 1px solid #ccc;
    padding-right: 15%;
  }

  #make_rTop span {
    display: inline-block;
    width: 13px;
    height: 7px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAOCAMAAAAG0/xxAAAANlBMVEX////y8vLn5+fX19jMzMy9vL6op6qmpKebmp1+fIFycXVjYGZRTlRLSU9JRkxAPUQuKzItKjGYPIi+AAAAAXRSTlMAQObYZgAAAFtJREFUGNNtzkESgCAMQ9FYxIKgNfe/rBsZkJLdn7cJIBGLhR2QeqsXrVeAPDRnamQEMp2pkXkDxFkyMgvgrctsychTWo32l9Fm6aZOmq3ks+HbbGsB5CjlGOQFS24F+jg8XL0AAAAASUVORK5CYII=");
    background-size: 100% 100%;
  }
  #make_list{
    width: 100%;
    height: 100%;
    padding-top: 20%;
    overflow: scroll;
  }
  #make_list img{
    width: 88px;
    height: 88px;
    float: left;
    margin: 0 10% ;
    padding: 2%;
  }
  #make_list ul{
    width: 100%;
    height: 20%;
  }
   #make_list li{
     border-bottom: 1px solid #ccc;
     height: 100%;
     display: flex;
     flex-flow: row nowrap;
     align-items: center;
  }
  #make_list span{
    color:red;
  }
  #make_list #make_list_left{
    margin-right: 10%
  }
  .make_rbottom{
    position:fixed;
    top:16%;
    width: 100%;
    height: 100%;
  }
  .make_rbottom ul{
    position: fixed;
    top: 16%;
    width: 75%;
    background: rgba(250,250,250,1);
    border-bottom:  1px solid #ccc;
  }
  .make_rbottom li{
    width:40%;
    border:1px solid #ccc ;
    padding: 4%;
    border-radius: 5em;
    text-align: center;
    float: left;
    margin: 2%;
    font-size: 14px;
  }
  .make_ul_box{
    position: relative;
    top: 0;
    width: 75%;
    height: 100%;
    overflow: scroll;
    background: rgba(0,0,0,.2);
    z-index: 0;
  }
  .make_ul_box .sortStyle{
    border-color: yellow;
    background:#ffd600;
  }
  .active{
    border-left:5px solid #ffd600;
    /* background: #eee; */
    box-shadow: inset 0px 1px 1px 0px #ccc;
  }
  .transform{
    transform: rotate(180deg);
    transition: all .5s;
  }
  .btn {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    background: none;
    line-height: 5px;
    color: #f00;
    border: 1px solid orange;
    padding: 5px;
    margin-left: 3%;
    outline: none !important;
  }
    img[lazy=loading] {
    width: 50px;
    height: 50px;
    margin: auto;
    background: url('../../static/images/loading.gif') no-repeat;
    background-size: 30px 30px;
    background-position: center center;
  }
</style>
