<template>
  <div class="mdAddress">
    <div id="top" >
        <span @click="hide"></span>
         <strong>修改地址</strong>
          <button @click="midUser(index)">保存</button>
    </div>
    <div>
      <table>
        <tr>
          <td>联系人</td>
          <td><input type="text" placeholder="收货人姓名" v-model="user[index].name"></td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="radio" id="man" value="先生" v-model="user[index].sex"><label for="man">先生</label>
            <input type="radio" id="woman" value="女士" v-model="user[index].sex"><label for="woman">女士</label>
            </td>
        </tr>
        <tr>
          <td>手机号码</td>
          <td><input type="number" placeholder="鲜蜂侠联系您的电话" v-model="user[index].phone"></td>
        </tr>
        <tr>
          <td>所在城市</td>
          <td>
            <select name="" id="" >
              <option value="" >请选择城市</option>
              <option :value="user[index].city" selected>{{user[index].city}}</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>所在地区</td>
          <td>
            <span><input type="text" placeholder="请选择您的住宅小区、大厦或者公寓"></span>
          </td>
        </tr>
        <tr>
          <td>详细地址</td>
          <td><input type="text" placeholder="请输入楼号门牌号等详细信息" v-model="user[index].address"> </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    hide () {
      this.$store.state.hide = true
      this.$router.go(-1)
    },
    // 修改用户地址
    midUser (index) {
      if (this.name !== '' && this.sex !== '' && this.phone !== '' && this.city !== '' && this.address !== '') {
        var obj = {
          name: this.user[index].name,
          sex: this.user[index].sex,
          phone: this.user[index].phone,
          city: this.user[index].city,
          address: this.user[index].address,
          userid: this.user[index].id
        }
        this.$store.dispatch('midUser', obj).then(data => {
          this.$msg('提示', '保存地址成功')
        })
      } else {
        this.$msg('提示', '您还没有修改完毕')
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    citys () {
      return this.$store.state.citys
    },
    index () {
      return this.$store.state.index
    }
  }
}
</script>

<style scoped>
 #mdAddress{
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
