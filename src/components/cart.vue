<template>
  <div class="cart">
    <div class="page-cart">
      <div id="top">
       <h4>购物车</h4>
      </div>
    <div class="main" >
      <router-link to="/modified" >
      <table class="receive" width="100%">
        <tr>
          <th width="28%">
            <!-- 两个英文字符等于一个中文字的宽度 -->
            收&nbsp;&nbsp;货&nbsp;&nbsp;人
          </th>
          <td>{{user[index].name}}&nbsp;{{user[index].sex}}</td>
          <td width="17%" rowspan="3" class="more">修改</td>
        </tr>
        <tr> 
          <th>
            电<span class="text-hidden">&nbsp;&nbsp;&nbsp;</span><span class="text-hidden">&nbsp;&nbsp;&nbsp;</span>话
          </th>
          <td>{{user[index].phone}}</td>
        </tr>
        <tr>
          <th>收货地址</th>
          <td>{{user[index].address}}</td>
        </tr>
      </table>
    </router-link>
      <div class="cart-groups-wraper">
        <div class="cart-group">
          <div class="group-name">
            <span>闪送超市</span>
            <var>凑单专区</var>
          </div>
          <p class="group-proptext">¥0起送，22:00前满¥30免运费，22:00后满¥50免运费</p>
          <p class='group-receive more spline-top'>
            收货时间&nbsp;&nbsp;<select class="group-receive-select">
              <optgroup label="今天">
                <option value="30分钟送达">30分钟送达</option>
                <option value="15:00-16:00">15:00-16:00</option>
                <option value="16:00-17:00">16:00-17:00</option>
                <option value="17:00-18:00">17:00-18:00</option>
                <option value="18:00-19:00">18:00-19:00</option>
              </optgroup>
              <optgroup label="明天">
                <option value="明天 09:00-10:00">明天 09:00-10:00</option>
                <option value="明天 10:00-11:00">明天 10:00-11:00</option>
                <option value="明天 11:00-12:00">明天 11:00-12:00</option>
                <option value="明天 12:00-13:00">明天 12:00-13:00</option>
              </optgroup>
              <optgroup label="后天">
                <option value="后天 09:00-10:00">后天 09:00-10:00</option>
                <option value="后天 10:00-11:00">后天 10:00-11:00</option>
                <option value="后天 11:00-12:00">后天 11:00-12:00</option>
                <option value="后天 12:00-13:00">明天 12:00-13:00</option>
              </optgroup>
            </select>
            <span class="group-receive-ext">可预订</span>
          </p>
          <div class="group-comment spline-top spline-bottom f14 pl14">
            <span class="group-comment-txt">收货备注&nbsp;&nbsp;</span>
            <div class="group-comment-input-wrap">
              <input type="text" placeholder="可输入100字以内特殊要求内容" class="group-comment-input"/>
            </div>
          </div>
          <table width="100%" class="tableScroll">
            <tr class="group-item-tr" v-for="(item,index) in value" :key="item.id">
              <td class="group-item-checkbox " :class="{active:item.choose}" @click="choose(index)">&nbsp;</td>
              <td class="group-item-img">
                <img :src="item.imgs.small" alt="">
              </td>
              <td class="group-item-detail">
                <div>{{item.title}}</div>
                <div class="product-specifics-wrap">
                  
                  <div class="product-specifics">
                    <span>￥{{item.price}}</span>
                  </div>
                  <div class="product-operates">
                    <span class="inner"  @click="subCart(item)">-</span>
                    <span class="product-operates-item">{{item.num}}</span>
                    <span class="inner"  @click="addCart(item)">+</span>
                  </div>
                </div>
              </td>
            </tr>
          </table>
          <div class="group-footer spline-top spline-bottom pl14 f14">
            <span class="selectAll" @click="choose_All()">全选</span>
            共：<span class="redfont">￥{{total.toFixed(2)}}</span>
            <span class="group-btn">选好了</span>
          </div>
        </div>
      </div>
    </div>
</div>


  </div>
</template>

<script>
export default {
  created () {
    if (!this.userPhone.id) {
      this.$router.push('/login')
    } else {
      // 如果注册了   在判断有没有填写地址
      if (this.user.length > 0) {
      } else {
        this.$router.push('/site')
      }
    }
  },
  data () {
    return {
      chackBol: false
    }
  },
  methods: {
    hide () {
      this.$store.state.hide = false
    },
    subCart (item) {
      this.$store.dispatch('subCart', item)
      console.log(this.$store.state.user)
    },
    addCart (item) {
      this.$store.dispatch('addCart', item)
    },
    choose (index) {
      this.$store.state.cart[index].choose = !this.$store.state.cart[index].choose
    },
    choose_All () {
    }
  },
  computed: {
    value () {
      return this.$store.state.cart
    },
    total () {
      return this.$store.getters.total
    },
    user () {
      return this.$store.state.user
    },
    userPhone () {
      return this.$store.state.userPhone
    },
    index () {
      return this.$store.state.index
    }
  }
}
</script>

<style scoped>
#cart{
}
.main{
  position: absolute;
  top: 8%;
  height: 85%;
  overflow: scroll;
}
.router-view{
  top: 0;
}
#top{
  width: 100%;
  height: 100%;
}
#top h4{
  position: absolute;
  top:1%;
  left: 43%;
  font-weight: bold;
}
.receive{
  font-size: 1.4rem;
  font-weight: 400;
  background-image: url('../../static/images/cart-bg.png'),url('../../static/images/cart-bg.png');
  background-position: left top,left bottom;
  background-repeat: repeat-x;
  -webkit-background-size: auto 0.3rem;
  background-size: auto 0.3rem;
  background-color: #fff;
  margin-bottom: 1rem;
  width: 375px;
  overflow: scroll;
}
.receive th{
  padding: .7rem 1rem .7rem 1.5rem;
  text-align: left;
}
.more{
  background: url('../../static/images/cart-more.png') right center no-repeat;
  -webkit-background-size: auto 1rem;
  background-size: auto 1rem;
  padding-right: 2.5rem;
  height: 5rem;
  line-height: 5rem;
}
.cart-group{
  padding-top: 0.5rem;
  font-size: 1.2rem;
  background-color: #fff;
}
.cart-group .group-name{
  padding-left: 1.4rem;
  overflow: hidden;
  padding-right: 1.2rem;
}
.cart-group .group-name>span{
  float: left;
  color: #999;
}
.cart-group .group-name>var{
  float: right;
  height: 2.4rem;
  line-height: 2.4rem;
  border: 0.1rem solid #ff3800;
  border-radius: 1.2rem;
  width: 7rem;
  text-align: center;
  color: #e64f1a;
}
.cart-group .group-name>span:before{
  content: '';
  display: inline-block;
  width: .4rem;
  height: 1.2rem;
  border-radius: .2rem;
  margin-right: .5rem;
  background-color: #ffd600;
  vertical-align: -0.2rem;
}
.group-proptext{
  color: #999;
  padding-left: 1.4rem;
  height: 2rem;
  line-height: 2rem;
}
.group-receive{
  padding-left: 1.4rem;
  font-size: 1.4rem;
}
.group-receive-ext{
  float: right;
}
.group-receive-select{
  color: #e64f1a;
  outline: none;
  border: none;
  font-size: 1.4rem;
  background-color: transparent;
}
.group-comment{
  height: 5rem;
  line-height: 5rem;
  display: -webkit-flex;
  display: flex;
}
.group-comment-txt{
  float: left;
}
.group-comment-input-wrap{
  flex:1;
  padding-right: 2.2rem;
}
.group-comment-input{
  height: 3.2rem;
  border: 1px solid #cecece;
  border-radius: .5rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  text-indent: .5rem;
  font-size: 1.4rem;
}
.group-item-checkbox{
  background: url("../../static/images/checkbox.png") center center no-repeat;
  -webkit-background-size: 1.8rem 1.8rem;
  background-size: 1.8rem 1.8rem;
  width: 5rem;
}

.group-item-checkbox.active{
   background: url('../../static/images/checkbox-selectd.png') center center no-repeat;
   background-size: 30% 20%;
}
.group-item-img{
  width: 5rem;
}
.group-item-img>img{
  width: 100%;
}
.product-operates{
  text-align: right;
}
.group-item-detail{
  padding-right: 1.2rem;
}
.group-item-detail>div{
  height: 4rem;
  line-height: 4rem;
  margin-left: 10%;
}
.group-footer{
  height: 5rem;
  line-height: 5rem;
}
.selectAll{
  display: inline-block;
  width: 5rem;
  padding-left: 2.5rem;
  -webkit-background-size: 1.8rem 1.8rem;
  background-size: 1.8rem 1.8rem;
  background-repeat: no-repeat;
  background-position: left center;
}
.selectAll-false{
  background-image: url("../../static/images/checkbox.png");
}
.selectAll-true{
  background-image: url('../../static/images/checkbox-selectd.png');
}
.group-btn{
  height: 100%;
  float: right;
  width: 10rem;
  text-align: center;
  background: yellow;
  font-size:14px;
  font-weight: 500;
}
.product-specifics-wrap{
  overflow: hidden;
}
.product-specifics{
  float: left;
  width: 30%;
  overflow: hidden;
}
.product-specifics>span{
  display: block;
  color: #858585;
  margin-bottom: 1rem;
}
.product-specifics>var{
  color: #f40;
}
.product-operates{
  float: right;
  width: 70%;
  overflow: hidden;
}
.product-operates>.inner{
  display: inline-block;
  font-size: 2.4rem;
  width: 2.9rem;
  height: 2.9rem;
  line-height: 2.9rem;
  color: #d73e00;
  text-align: center;
  /*padding: 0.8rem;*/
  border: 0.1rem solid #dcbd9e;
  border-radius: 50%;
}
.product-operates-item{
  display: inline-block;
  height: 2.8rem;
  line-height: 2.8rem;
  vertical-align: top;
  font-size: 1.2rem;
  margin: 0 0.5rem;
}
table:hover{
  cursor: pointer;
}

</style>
