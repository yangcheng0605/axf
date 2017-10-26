<template>
    <div id="search" >
      <div id="top">
          <span @click="hide"></span>
          <form action="">
              <input type="text" placeholder="请输入商品名称">
              <span></span>
          </form>
          <a href="">搜 索</a>
      </div>
      <div id="bottom">
          <p>热门搜索</p>
          <span>芒果</span>
          <span>水果</span>
          <span>火龙果</span>
          <span>三七女王节</span>
          <span>香烟</span>
          <span>酒</span>
          <span>燕塘</span>
          <span>奇异果</span>
          <span>奶</span>
      </div>
    </div>
</template>
<script>
  export default {

    methods: {
      hide () {
        this.$store.state.hide = true
        this.$router.go(-1)
      }
    },
    computed: {
    }
  }
</script>
<style scoped>
#search{
    width: 100%;
    height: 100%;
    background:#efefef;
}
#search #top{
    width: 100%;
    height: 8.5%;
    background: #f9fafd;
    font-size: 16px;
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10%;
}
#search input[type="text"]{
    width: 220px;
    height: 35px;
    background: transparent;
    border: 1px solid #ddd;
    text-indent: 1.7em;
}
#search #top span{
    display: block;
    width: 30px;
    height: 30px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFiUExURUxpcZmZmZiYmJmZmZGRkZubm5mZmX9/f5iYmJmZmZeXl5mZmZqampmZmZmZmZmZmZiYmJiYmJmZmZmZmZubm5iYmJmZmZiYmJmZmZmZmZmZmZiYmKqqqpiYmJGRkZiYmJmZmZiYmKKiopmZmZmZmZiYmJmZmZOTk39/f5iYmJmZmZmZmY2NjZmZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZaWlpiYmJmZmZmZmZmZmZmZmZubm5iYmJmZmZmZmZiYmJmZmZiYmJiYmJiYmJmZmZSUlJmZmZmZmZiYmJiYmJWVlZmZmZaWlpeXl5mZmZiYmJmZmZiYmJmZmZiYmJqampqampiYmJiYmJiYmJiYmJaWlpiYmJiYmJiYmJiYmJmZmZmZmZiYmJqampaWlpeXl5mZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZiYmJiYmJiYmJiYmJmZmZmZmZeXl5mZmZmZmRmSHEgAAAB1dFJOUwCAnYoHEgoE/o8bvCHX69Dj9G74M3DVi5e1qLMGkA5t7JULpaanGRMCmsGUCXkjty3PP46MEay6++HEKTRvD4bf2fJrFBi0yX/CHXYiJf3FfXLSymAm/GbM9yfl+VJDN0bqUSwv8O7dX+9LV9PgTT459WJZ5pLKHGIAAAEbSURBVEjH7dXFcsNAFERROwYpjiFxHGZmZmZmZmbG/v+0/uB1ZetZnytNqeZpfL70+v+qDsQqFD/bD1QKfjULQKbdH+/Q95aafeoVcBftz/94A0637P49DuR82/3PF/D0YvcHucDvs92vrAOxTzN3Jlzg8Mbsgy38/EtRsw/V0g/MmX2kg76uz+yjw/QZYbMfSdD3NJr96BQw6BfOczYwPaYMjLd/aSKHeOBmlKB7ku9oU4rOLhYFjlC0N7MobBWK+iIWNeNCESpmMb8sFOEmFht7QuEEWCRulY+1uQ88XChFkjN9cqkUj3fA/ZlSXF8BR7tKcc6j6yaVIrXNwq8ck7UF728fFIqIdz+UKbtqKAHi0kSVV+XnpW/6P7TqQzbxwrmKAAAAAElFTkSuQmCC");
    background-size: 100% 100%;
}
#search #top>form>span{
    position: absolute;
    top: 3%;
    left: 22%;
    display: block;
    width: 15px;
    height: 15px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcdDQ0sPDxZ+fo87O0KWlqdfX2Y6Ok5GRlvT09Nra3KGhpZ6eo6Kipu7u77Ozt52dodHR09vb3ZycoZuboLS0t+zs7e3t7uHh4re3us3N0JKSl5SUmZ+fpJubn5eXnJqan6CgpNvb3OLi49zc3uHh48PDxtzc3djY2ZKSlq2tsLKytfHx8rm9tvQAAAABdFJOUwBA5thmAAAAsklEQVQoz7WR1xKCMBBFA0buGnoXBHvX//8+cQwl0Tx6n07mzGy2MPaJqCJqdpVgeo4eZLyLamzArUvGytoFbNWs4p4twnk0Ceg0vpaE/fDIYE1rWMh6vMJXf/bhSMrBVcWRS0oRqCpAKukGfUqQhMasWr1gMRT80UYoyTE3r48cYz2wAB2URQnjerf6UXjXZ8G7o2wwn7pkPGWymKmOOWFEFIXv3r7cJH9xLR5Gd38yc17eIAjU+rgU/wAAAABJRU5ErkJggg==");
    background-size: 100% 100%;
}
#search #bottom span{
    display: inline-block;
    padding: 3% 7%;
    background: #fff;
    border-radius: 2em;
    margin-bottom: 2%;
}
</style>
