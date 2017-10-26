<template>
  <div id="modified">
    <div id="top" >
        <span @click="hide"></span>
        <strong>选择地址</strong>
      </div>
    <div id="modified_center">
      <ul>
          <li v-for='(item, index) in user' :key='item.id' :class="{choose:chooseid === index}" @click="chooseUser(index)">
            <div class="userIF">
              <span>{{item.name}} </span> <span> {{item.phone}}</span>
              <p>{{item.address}}</p>
            </div>
            <div id="address">
              <router-link to="/mdAddress">
              <span class="addAddress"></span>
              </router-link>
            </div>
          </li>
      </ul>
    </div>
    <router-link to="/address">
      <div id="bottom">
        <div id="bottom_text">新增地址+</div>
      </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        chooseid: 0
      }
    },
    created () {
      this.$store.state.hide = false
    },
    methods: {
      hide () {
        this.$store.state.hide = true
        this.$router.go(-1)
      },
      chooseUser (index) {
        this.$store.dispatch('chooseUser', index)
        this.chooseid = index
      }
    },
    computed: {
      user () {
        return this.$store.state.user
      }
    }
  }
</script>
<style scoped>
  #modified{
    width: 100%;
    height: 100%;
    background: #ddd;
  }
  #top{
    width: 100%;
    height: 8.5%;
    background: #f9fafd;
    font-size: 16px;
    line-height: 8.5%;
  }
  #top strong{
    position: relative;
    top: -15%;
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
  #modified_center{
    height: 69%;
    margin-top: 5%;
    cursor: pointer;
  }
  #modified_center ul {
    padding-bottom: 10rem;
  }
  #modified_center ul li{
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row;
    justify-content: flex-start;
    background: #fff;
    margin-bottom: 2%;
  }
  #bottom{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10.5%;
    background: rgba(255,255,255,.8);
    text-align:center;
    padding-top:5%;
  }
  #bottom_text{
    width: 50%;
    height: 75%;
    margin: auto;
    padding-top: 2%;
    border-radius: 2em;
    font-size: 16px;
    background: #ffd600;
    color:#000;
  }
  #address{
    border-left: 1px solid #ccc;
    text-align: center;
    margin: 5%;
    padding: 3% 10% 0 10%;
  }
  .addAddress{
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAMAAABwfJv6AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAGhUExURUxpcWRkZGNjY2VlZWNjY2JiYmNjY2NjY2NjY2RkZHFxcWRkZGZmZmpqamRkZGNjY39/f2lpaWZmZmhoaGRkZF1dXWNjY2NjY2RkZGNjY2VlZWNjY2NjY1VVVWFhYWNjY2NjY2RkZGRkZGNjY2RkZFxcXGRkZGRkZGZmZm1tbV9fX2NjY2RkZGRkZGNjY2NjY2RkZGRkZGRkZGNjY2JiYmNjY2NjY2NjY2RkZGRkZGNjY2RkZGNjY2NjY2JiYmRkZGNjY2NjY2RkZGRkZGNjY2NjY2VlZWNjY2NjY2ZmZn9/f2RkZGNjY2NjY2RkZGRkZF9fX2RkZGVlZWRkZGRkZGJiYmNjY2NjYwAAAGRkZGRkZGJiYmRkZFVVVWRkZGRkZGNjY2ZmZmNjY2NjY2VlZWRkZGNjY2RkZGNjY2RkZGNjY2RkZGRkZGNjY2RkZGNjY2RkZGRkZGRkZGRkZGZmZmRkZGRkZGZmZmFhYWJiYmNjY2RkZGRkZGNjY2RkZGNjY2NjY2NjY2NjY2NjY2JiYmNjY2RkZGRkZGNjY2NjY2RkZIwr3goAAACKdFJOUwBwXFNpQ4USxcwJ/AoMrasEEQUWmRPc9bp7P3MuAyLCUpHxuJsL6sQPBwix8olksMH3oPNGfn3X4n/Kd4M7Got20tEcjU1Ex5AeAnXNbM6WGNA6R09i9sMBWe0npQajosAUn6ZJvqm0riGsPYHZQhevUdaCN+9oKC9Q6Xo41JikYfveWkHw3WP9s1P6piIAAAGFSURBVDjL1ZNlU0JBFIaPIqKAtCCiYhFioGJ3d3d3d3e37692LiBchwX3kzM+X/a8d549u7N7lygih9n7xMNeJg4SOLyTUziQ+7uZfIUzlxpu+S/epQnXRBo3VDkRvQsT7oRRtwV1pJ7nRuD2RqiUG1gOv8/pI8RI4JEKtU2FucQwXmcfjokK4CnxRiuy2V5iO/KF8UGRJ5ibRkUv05ONo6PLW0U/ml4obRdRTC9hAYYJf/388fr+BjPTk69iJjWQ0u3wbSME5TrUumDUPKGY3W8NKtH5yj5RrGR5riXk2oLRqcY98wI1BmQ5g3F2Hipmv9QMWBd/TtMyN1iPHr0o9sPBvDpdJRrFXgsG9cx+ElTViWINmgbYN2xGuiiVobw5zC8ThdZgqIYxjcKKkkDdgIoU4hC7Ya8lDtGCvLaQNyn1MSSI275vo8gcDmmDbwQxI1qgYGpsJHS90lgfFqKdwKTJyC8+JcbPCv0JWhkXWlKACwUlxXGRRP+BwnguCqmI73iKvgDk9X/Ky85+tQAAAABJRU5ErkJggg==') 0 0;
    background-size: 100% 100%;
    background-position: center center;
  }
  .userIF{
    width: 60%;
    padding: 5% 7%;
  }
  .userIF p{
    margin-top: 8%;
  }
  .choose{
    border:2px solid #ffd600;
  }
</style>
