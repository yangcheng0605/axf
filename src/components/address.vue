<template>
  <div class="address">
    <div id="top" >
      <router-link to="/cart">
        <span @click="hide"></span>
      </router-link>
         <strong>添加地址</strong>
         <button @click="save">保存</button>
    </div>
    <div>
      <table >
        <tr>
          <td>联系人</td>
          <td><input type="text" placeholder="收货人姓名" v-model="name"></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="radio" id="man" value="先生" v-model="sex"><label for="man">先生</label>
            <input type="radio" id="woman" value="女士" v-model="sex"><label for="woman">女士</label>
            </td>
        </tr>
        <tr>
          <td>手机号码</td>
          <td><input type="number" placeholder="鲜蜂侠联系您的电话" v-model="phone"></td>
        </tr>
        <tr>
          <td>所在城市</td>
          <td>
            <select name="" id="" @change="changeCity" v-model="city">
              <option value="" selected>请选择城市</option>
              <option :value="item"  v-for="(item, index) in citys" :key="item.id">{{item}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>所在地区</td>
          <td>
            <router-link to="/map">
              <span><input type="text" placeholder="请选择您的住宅小区、大厦或者公寓" @click.prevent='addMap(city)'></span>
            </router-link>
          </td>
        </tr>
        <tr>
          <td>详细地址</td>
          <td><input type="text" placeholder="请输入楼号门牌号等详细信息" v-model='address'></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      sex: '',
      phone: '',
      city: '',
      address: ''
    }
  },
  methods: {
    hide () {
      this.$store.state.hide = true
    },
    // 选择城市
    changeCity () {
      this.$store.commit('CHANGE_CITY', this.city)
    },
    addMap (city) {
      // 切换页面到地图页面
      if (this.city !== '') {
        this.$router.push('/map')
      } else {
        this.$msg('提示', '请选择城市')
      }
    },
    save () {
      if (this.name !== '' && this.sex !== '' && this.phone !== '' && this.city !== '' && this.address !== '') {
        var obj = {
          name: this.name,
          sex: this.sex,
          phone: this.phone,
          city: this.city,
          address: this.address
        }
        this.$store.dispatch('save', obj).then(data => {
          this.$msg('提示', '保存地址成功')
          this.$store.state.hide = true
        }).then(data => {
          this.$router.push('/cart')
        })
      } else {
        this.$msg('提示', '信息不全，请继续填写信息')
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    citys () {
      return this.$store.state.citys
    }
  }
}
</script>

<style scoped>
 #address{
    width: 100%;
    height: 100%;
    background: #eee;
  }
 #top{
    background: #f9fafd;
    font-size: 16px;
  }
  #top strong{
    position: relative;
    top:-10px;
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
  #top button{
    position: absolute;
    top:1.5%;
    right: 7%;
    background: #ffd600;
    border: none;
    padding: 1% 2%;
  }
  input,select{
    border: none;
    outline: none;
  }
  table{
    width: 100%;
  }
  table tr{
    height: 3.5em;
    border-top: 1px solid #ccc;
  }
  table tr td:first-of-type{
    text-align: center;
  }
  table tr td:last-of-type{
    margin-left: 20px;
  }
</style>
