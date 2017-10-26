<template>
  <div class="login">
     <div id="top" >
        <span @click="hide"></span>
        <strong>验证手机</strong>
      </div>
    <div class="main">
      <div class="login">
        <div class="pic theme-bg" :class="{'pic-hide': picHide}">
          <p class="pic-word">为了方便您及时查询订单信息，鲜蜂侠需要验证您的手机号为查询帐号</p>
        </div>
        <div class="inputs">
          <div class="phone-padding spline-bottom">
            <input class="phone" type="tel" placeholder="手机号码" v-model="phone" @focus="picHidefocus()" @blur="picHideBlue()" @keyup.enter="login">
          </div>
        </div>
        <div class="theme-bg login-submit" @click="login">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
var time
export default {
  data () {
    return {
      picHide: false,
      phone: ''
    }
  },
  methods: {
    picHidefocus () {
      clearTimeout(time)
      this.picHide = true
    },
    picHideBlue () {
      time = setTimeout(() => {
        this.picHide = false
      }, 2000)
    },
    hide () {
      this.$store.state.hide = false
      this.$router.go(-1)
    },
    login () {
      var phone = this.phone
      if (!(/^1[34578]\d{9}$/.test(phone))) {
        this.$msg('提示', '号码格式不正确')
      } else {
        this.$store.dispatch('login', this.phone).then(res => {
          this.$msg('提示', res)
        }).then(res => {
          this.$router.push('/cart')
        })
      }
    }
  }
}
</script>

<style scoped>

.main{
  bottom: 0;
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
    margin-right: 32%;
    margin-top: 5%;
  }
.theme-bg{
  background: #ffd600
}
.pic{
  height: 6.9rem;
  background-image: url("../../static//images/pic.png");
  background-repeat: no-repeat;
  background-position: 1rem bottom;
  -webkit-background-size: auto 80%;
  background-size: auto 80%;
  position: relative;
  overflow: hidden;
  -webkit-transition: height .4s;
  -o-transition: height .4s;
  transition: height .4s;
}
.pic-word{
  position: absolute;
  top: 1.7rem;
  width: 62%;
  right: 0;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #000;
}
.inputs{
  background-color: #fff;
}
.phone-padding{
  padding: 0 1.5rem;
}
.phone{
  font-size: 1.4rem;
  outline: none;
  height: 4rem;
  line-height: 4rem;
  width: 100%;
  border: 0;
}
.login-submit{
  margin: 2rem .6rem;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  font-size: 1.6rem;
}
.pic-hide{
  height: 0px !important;
}
</style>
