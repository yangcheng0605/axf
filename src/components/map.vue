<template>
  <div id="map-box">
    <div id="top">
        <span @click="hide"></span>
         <input type="search" placeholder="请输入地址" @input="bindsearch()">
    </div>
    <div id="content">
    <div style="width:375px;height:300px;border:#ccc solid 1px;font-size:12px" id="map"></div>
    </div>
     <!-- 根据搜索框内容变化而生成的列表 -->
     <div class="sug-list" v-show="searchPlaces.length>0">
      <ul>
        <li class="spline-bottom" v-for="(item, index) in searchPlaces" :key="item.uid">
          <p class="pois-item-name">{{item.name}}</p>
          <p class="theme-font-gray">{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import jsonp from 'jsonp'

  /* eslint-disable */
export default {
  mounted () {
  //创建和初始化地图函数：
    function initMap(){
      createMap();//创建地图
      setMapEvent();//设置地图事件
      addMapControl();//向地图添加控件
      addMapOverlay();//向地图添加覆盖物
    }
    function createMap(){ 
      map = new BMap.Map("map"); 
      map.centerAndZoom(new BMap.Point(116.403874,39.914889),12);
    }
    function setMapEvent(){
      map.enableScrollWheelZoom();
      map.enableKeyboard();
      map.enableDragging();
      map.enableDoubleClickZoom()
    }
    function addClickHandler(target,window){
      target.addEventListener("click",function(){
        target.openInfoWindow(window);
      });
    }
    function addMapOverlay(){
      var markers = [
        {content:"",title:"",imageOffset: {width:-46,height:-21},position:{lat:22.58057,lng:113.917211}}
      ];
      for(var index = 0; index < markers.length; index++ ){
        var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
        var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
          imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
        })});
        var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
        var opts = {
          width: 200,
          title: markers[index].title,
          enableMessage: false
        };
        var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
        marker.setLabel(label);
        addClickHandler(marker,infoWindow);
        map.addOverlay(marker);
      };
    }
    //向地图添加控件
    function addMapControl(){
      var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
      scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
      map.addControl(scaleControl);
      var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
      map.addControl(navControl);
      var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
      map.addControl(overviewControl);
    }
    var map;
    this.city = this.$store.state.selectCity

      let placeApi = `http://api.map.baidu.com/place/v2/search?q=${this.city}&region=${this.city}&output=json&ak=8eXZEMmOWnsBTzZtxzYzM0Uk`
    jsonp(placeApi, (err, data) => {
      if (!err) {
        // 地址列表
        console.log(this.location)
        this.places = data.results
        initMap()
      }
    })
  },
  data () {
    return {
      searchPlaces: [],
    }
  },
  methods: {
     bindsearch () {
      let key = event.target.value
      let placeApi = `http://api.map.baidu.com/place/v2/suggestion?query=${key}&region=${this.City}&output=json&ak=qd2vWFz9Vr1GKkV23cD1d4CnhgLeMhCL`
      jsonp(placeApi, (err, data) => {
        if (!err) {
          console.log(data)
          this.searchPlaces = data.result
        }
      })
    },
    hide () {
      this.$router.go(-1)
      this.$store.state.hide = true
    }
  },
  computed: {
    city () {
      return this.$store.state.selectCity
    }
  }
}
</script>
<style  scoped>
#map-box{
    width: 100%;
    height: 100%;
    background: #eee;
  }
 #top{
    height: 9%;
    background: #f9fafd;
    font-size: 16px;
  }
  #top span{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAFiUExURUxpcZmZmZiYmJmZmZGRkZubm5mZmX9/f5iYmJmZmZeXl5mZmZqampmZmZmZmZmZmZiYmJiYmJmZmZmZmZubm5iYmJmZmZiYmJmZmZmZmZmZmZiYmKqqqpiYmJGRkZiYmJmZmZiYmKKiopmZmZmZmZiYmJmZmZOTk39/f5iYmJmZmZmZmY2NjZmZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZaWlpiYmJmZmZmZmZmZmZmZmZubm5iYmJmZmZmZmZiYmJmZmZiYmJiYmJiYmJmZmZSUlJmZmZmZmZiYmJiYmJWVlZmZmZaWlpeXl5mZmZiYmJmZmZiYmJmZmZiYmJqampqampiYmJiYmJiYmJiYmJaWlpiYmJiYmJiYmJiYmJmZmZmZmZiYmJqampaWlpeXl5mZmZmZmZmZmZmZmZiYmJmZmZiYmJmZmZiYmJiYmJiYmJiYmJmZmZmZmZeXl5mZmZmZmRmSHEgAAAB1dFJOUwCAnYoHEgoE/o8bvCHX69Dj9G74M3DVi5e1qLMGkA5t7JULpaanGRMCmsGUCXkjty3PP46MEay6++HEKTRvD4bf2fJrFBi0yX/CHXYiJf3FfXLSymAm/GbM9yfl+VJDN0bqUSwv8O7dX+9LV9PgTT459WJZ5pLKHGIAAAEbSURBVEjH7dXFcsNAFERROwYpjiFxHGZmZmZmZmbG/v+0/uB1ZetZnytNqeZpfL70+v+qDsQqFD/bD1QKfjULQKbdH+/Q95aafeoVcBftz/94A0637P49DuR82/3PF/D0YvcHucDvs92vrAOxTzN3Jlzg8Mbsgy38/EtRsw/V0g/MmX2kg76uz+yjw/QZYbMfSdD3NJr96BQw6BfOczYwPaYMjLd/aSKHeOBmlKB7ku9oU4rOLhYFjlC0N7MobBWK+iIWNeNCESpmMb8sFOEmFht7QuEEWCRulY+1uQ88XChFkjN9cqkUj3fA/ZlSXF8BR7tKcc6j6yaVIrXNwq8ck7UF728fFIqIdz+UKbtqKAHi0kSVV+XnpW/6P7TqQzbxwrmKAAAAAElFTkSuQmCC");
    background-size: 100% 100%;
    margin-right: 16%;
    vertical-align: middle;
    margin-top: 1%;
  }
  #top input{
    height: 3rem;
    border:1px solid #ddd;
    background: none;
    text-indent: 2em;
    margin-top: 3%;
  }
   #content{
    width: 100%;
    height: 40%;
    font-size: 16px;
  }
 .sug-list{
  padding-left: 1.5rem;
  background-color: #fff;
  overflow-y: scroll;
 }
 .sug-list li {
   cursor: pointer;
    padding: .5rem 0;
    font-size: 1.4rem;
 }
 .sug-list li .pois-item-name{
  line-height: 2rem; 
 }
</style>
