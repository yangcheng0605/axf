<template>
  <div class="site">
    <div id="top">
      <router-link to="/cart">
      <span ></span>
      </router-link>
       <h4>购物车</h4>
      </div>
    <div class="main">···
      <!-- 没有地址的时候 -->
      <div class="empty-notice" >
        <div class="notice-icon"></div>
        您还没地址哦~
      </div>
      <!-- 显示地址列表 -->
      <ul class="addr-list block">
        <li class="addr-item" v-if="sites.length>0">
          <div class="addr-desc" >
            <p class="no-wrap">item.linkman&nbsp;&nbsp;&nbsp;item.phone</p>
            <p class="no-wrap theme-font-gray">item.cityitem.site</p>
          </div>
          <div class="addr-edit"></div>
        </li>
      </ul>
      <div class="pub-footer">
        <p class="newAddress theme-btn-big" @click="addSite()">新增地址</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created () {
    this.$store.state.hide = false
  },
  computed: {
    sites () {
      console.log(this.$store.state.site)
      return this.$store.state.site
    }
  },
  methods: {
    addSite () {
      this.$router.push('/address')
    },
    hide () {
      this.$router.go(-1)
    }
  }
}
</script>
<style  scoped>
.site{
  background: #eee;
  width: 100%;
  height: 100%;
}
.main{
  bottom: 0;
}
.empty-notice{
  padding-top: 20%;
  text-align: center;
  line-height: 4rem;
  font-size: 1.4rem;
}
#top{
  width: 100%;
  height: 8.5%;
  background: #fff;
}
#top h4{
  position: absolute;
  top:1%;
  left: 43%;
  font-weight: bold;
}
#top span{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFiUExURUxpcZmZmZiYmJmZmZGRkZubm5mZmX9/f5iYmJmZmZeXl5mZmZqampmZmZmZmZmZmZiYmJiYmJmZmZmZmZubm5iYmJmZmZiYmJmZmZmZmZmZmZiYmKqqqpiYmJGRkZiYmJmZmZiYmKKiopmZmZmZmZiYmJmZmZOTk39/f5iYmJmZmZmZmY2NjZmZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZaWlpiYmJmZmZmZmZmZmZmZmZubm5iYmJmZmZmZmZiYmJmZmZiYmJiYmJiYmJmZmZSUlJmZmZmZmZiYmJiYmJWVlZmZmZaWlpeXl5mZmZiYmJmZmZiYmJmZmZiYmJqampqampiYmJiYmJiYmJiYmJaWlpiYmJiYmJiYmJiYmJmZmZmZmZiYmJqampaWlpeXl5mZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZiYmJiYmJiYmJiYmJmZmZmZmZeXl5mZmZmZmRmSHEgAAAB1dFJOUwCAnYoHEgoE/o8bvCHX69Dj9G74M3DVi5e1qLMGkA5t7JULpaanGRMCmsGUCXkjty3PP46MEay6++HEKTRvD4bf2fJrFBi0yX/CHXYiJf3FfXLSymAm/GbM9yfl+VJDN0bqUSwv8O7dX+9LV9PgTT459WJZ5pLKHGIAAAEbSURBVEjH7dXFcsNAFERROwYpjiFxHGZmZmZmZmbG/v+0/uB1ZetZnytNqeZpfL70+v+qDsQqFD/bD1QKfjULQKbdH+/Q95aafeoVcBftz/94A0637P49DuR82/3PF/D0YvcHucDvs92vrAOxTzN3Jlzg8Mbsgy38/EtRsw/V0g/MmX2kg76uz+yjw/QZYbMfSdD3NJr96BQw6BfOczYwPaYMjLd/aSKHeOBmlKB7ku9oU4rOLhYFjlC0N7MobBWK+iIWNeNCESpmMb8sFOEmFht7QuEEWCRulY+1uQ88XChFkjN9cqkUj3fA/ZlSXF8BR7tKcc6j6yaVIrXNwq8ck7UF728fFIqIdz+UKbtqKAHi0kSVV+XnpW/6P7TqQzbxwrmKAAAAAElFTkSuQmCC");
    background-size: 100% 100%;
    margin-right: 32%;
    margin-top: 4%;
  }
.notice-icon{
  width: 8rem;
  height: 8rem;
  border-radius: 4rem;
  background: url("../../static/images/empty_addrlist.png") center center no-repeat;
  -webkit-background-size: contain;
  background-size: contain;
  margin: 0 auto;
}
.theme-btn-big:before{
  content: '+ ';
}
.addr-list{
  font-size: 1.4rem;
}
.addr-item{
  height: 8rem;
  position: relative;
}
.addr-desc{
  position: absolute;
  left: 0;
  top: .5rem;
  right: 8rem;
  bottom: .5rem;
  line-height: 2.8rem;
  padding-top: .7rem;
  padding-left: 1rem;
  border-left: 0.5rem solid transparent;
}
.addr-desc.selected{
  border-left: 0.5rem solid #ffd600;
}
.addr-edit{
  position: absolute;
  width: 8rem;
  height: 5.2rem;
  top: 1.5rem;
  right: 0;
  background: url("../../static/images/addr-edit.png") center center no-repeat;
  -webkit-background-size: 2.2rem;
  background-size: 2.2rem;
  border-left: 1px solid #e0e0e0;
}
.pub-footer{
  width: 100%;
  height: 6rem;
  background: #fff;
  position: absolute;
  bottom:0;
}
.newAddress{
  width: 15rem;
  height: 4rem;
  background: #ffd600;
  text-align: center;
  margin: 1rem auto 0; 
  line-height: 4rem;
  font-size:16px;
}
</style>
