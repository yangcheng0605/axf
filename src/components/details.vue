<template>
  <div class="details">
      <div id="top" >
        <span @click="hide"></span>
        <strong>{{goodsDetil.title}}</strong>
      </div>
      <div id="content">
        <div id="content_top">
          <img v-lazy="goodsDetil.imgs.big" alt="">
        </div>
        <div id="content_bottom">
          <h3>{{goodsDetil.title}}</h3>
          <span>￥{{goodsDetil.subprice}}</span>
          <span>￥{{goodsDetil.price}}</span>
        </div>
      </div>
      <div id="bottom">
        <div id="bottom_left">
          <span class="glyphicon glyphicon-heart-empty"></span>
          <p>收藏</p>
        </div>
        <div id="bottom_center">
          <h4>添加商品：</h4>
          <button class=" btn glyphicon glyphicon-minus" @click="subCart(goodsDetil)"></button>
          <span> {{goodsDetil.num}} </span>
          <button class="btn glyphicon glyphicon-plus" @click="Add(goodsDetil)"></button>
        </div>
        <div id="bottom_right">
          <span class="glyphicon glyphicon-shopping-cart"></span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$store.state.hide = false
  },
  methods: {
    hide () {
      this.$router.go(-1)
      this.$store.state.hide = true
    },
    subCart (goodsDetil) {
      this.$store.dispatch('subCart', goodsDetil)
      console.log(this.$store.state.user)
    },
    Add (goodsDetil) {
      this.$store.dispatch('Add', goodsDetil)
      console.log(goodsDetil)
    }
  },
  computed: {
    goodsDetil () {
      console.log(this.$store.state.detail)
      return this.$store.state.detail
    }
  }
}
</script>

<style scoped>
#details{
  width: 100%;
  height: 100%;
}
#top{
    width: 100%;
    height: 10.5%;
    background: #f9fafd;
    font-size: 16px;
}
#top strong{
  position: relative;
  top: -15px;
}
#top span{
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFiUExURUxpcZmZmZiYmJmZmZGRkZubm5mZmX9/f5iYmJmZmZeXl5mZmZqampmZmZmZmZmZmZiYmJiYmJmZmZmZmZubm5iYmJmZmZiYmJmZmZmZmZmZmZiYmKqqqpiYmJGRkZiYmJmZmZiYmKKiopmZmZmZmZiYmJmZmZOTk39/f5iYmJmZmZmZmY2NjZmZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZaWlpiYmJmZmZmZmZmZmZmZmZubm5iYmJmZmZmZmZiYmJmZmZiYmJiYmJiYmJmZmZSUlJmZmZmZmZiYmJiYmJWVlZmZmZaWlpeXl5mZmZiYmJmZmZiYmJmZmZiYmJqampqampiYmJiYmJiYmJiYmJaWlpiYmJiYmJiYmJiYmJmZmZmZmZiYmJqampaWlpeXl5mZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZiYmJiYmJiYmJiYmJmZmZmZmZeXl5mZmZmZmRmSHEgAAAB1dFJOUwCAnYoHEgoE/o8bvCHX69Dj9G74M3DVi5e1qLMGkA5t7JULpaanGRMCmsGUCXkjty3PP46MEay6++HEKTRvD4bf2fJrFBi0yX/CHXYiJf3FfXLSymAm/GbM9yfl+VJDN0bqUSwv8O7dX+9LV9PgTT459WJZ5pLKHGIAAAEbSURBVEjH7dXFcsNAFERROwYpjiFxHGZmZmZmZmbG/v+0/uB1ZetZnytNqeZpfL70+v+qDsQqFD/bD1QKfjULQKbdH+/Q95aafeoVcBftz/94A0637P49DuR82/3PF/D0YvcHucDvs92vrAOxTzN3Jlzg8Mbsgy38/EtRsw/V0g/MmX2kg76uz+yjw/QZYbMfSdD3NJr96BQw6BfOczYwPaYMjLd/aSKHeOBmlKB7ku9oU4rOLhYFjlC0N7MobBWK+iIWNeNCESpmMb8sFOEmFht7QuEEWCRulY+1uQ88XChFkjN9cqkUj3fA/ZlSXF8BR7tKcc6j6yaVIrXNwq8ck7UF728fFIqIdz+UKbtqKAHi0kSVV+XnpW/6P7TqQzbxwrmKAAAAAElFTkSuQmCC") left center;
  background-size: 100% 100%;
  margin-right: 25%;
  margin-top: 5%;
}
#content{
  width: 100%;
  height: 60%;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 10%;
}
#content_top img{
  width: 320px;
  height: 370px;
}
#content_bottom span:nth-of-type(1){
  font-size: 22px;
  color:red;
  margin-right: 5%;
}
#content_bottom span:nth-of-type(2){
  font-size: 16px;
  text-decoration:line-through;
}
#bottom{
  width: 100%;
  height: 24.5%;
  border-top:1px solid #eee;
  position: fixed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
#bottom_left{
  width: 20%;
  text-align: center;
  margin-top:.5em;
}
#bottom_left span{
  font-size: 22px;
}
#bottom_center{
  width: 80%;
  margin-top: 1em;
  margin-left: 7%;
}
#bottom_center h4{
  display: inline-block
}
#bottom #bottom_right{
  position: absolute;
  top: -17%;
  right: 3%;
  background: #Fed859;
  width: 18%;
  height: 43%;
  border-radius: 50%;
  border: 3px solid #fff;
  text-align: center;
  font-size: 40px;
  line-height: 6rem;
  box-shadow: 0 -3px 0px 1px  #fff,0 -4px 0 1px #ddd;
}
#bottom #bottom_right span{
  color:#fff;
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
    margin-right: 3%;
    outline: none !important;
  }
</style>
