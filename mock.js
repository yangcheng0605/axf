var Mock = require('mockjs')
var Fs = require('fs')
/* eslint-disable */
var data = Mock.mock({
    'data1': [{
      'address':'@county(深圳)',
      'banner':"@image('320x113',@color,banner)",
    }],
    'data2': [{
      'obj|4':[{
        'id|+1': 1,
        'name':'@cword(4)',
        'sbanner':"@image('303x72',@color,sbanner)",
        'goods|3':[{
          //商品id
          'good_id|+1':1,
          //商品图片
          "imgs":{
            // 首页展示的小图
            "small": "@image('88x88',@color,@ctitle(3))",
            // 点击图片进入的列表页图片
            "big": "@image('320x200',@color,@ctitle(3))"
          },
          //商品名称
          'title':'@cword(4,6)',
          //商品价格
          'price|1-50.1-2':11,
          //商品数量
          'unit|10-300':22,
          'measure':"@pick(['m/l','包','g'])",
          'num':0
        }],
      }]
    }],
    // 商品列表
    "classifys|11": [{
      // 分类id
      "classify_id|+1": 1,
      // 分类图片
      "imgs":{
        // 首页展示的小图
        "small": "@image('88x88',@color,@ctitle(3))",
        // 点击图片进入的列表页图片
        "big": "@image('320x200',@color,@ctitle(3))"
      },
      // 分类的名称
      "classify_title": "@ctitle(3,4)",
      // 子分类
      "cids|3": [{
        "name": "@ctitle(3,4)"
      }],
      // 每个分类下的商品数据
      "products|9-20": [{
        // 商品id
        "good_id|+1": 1, 
        // 商品对应的子分类
        "cids|0-2":100,
        // 图片
        "imgs": {
          // 列表页展示的小图
          "small": "@image('355x355',@color,@ctitle(3))",
          // 商品详情页的大图
          "big": "@image('500x500',@color,@ctitle(3))"
        },
        // 商品名称
        "title": "@ctitle(5,10)",
        // 商品详情
        "details": "@cparagraph",
        // 价格
        "price|40-70.1": 100,
        "subprice|20-40.1": 100,
        // 单位
        "unit|50-500": 100,
        // 品牌-详情页
        "brand": "@ctitle(2,5)",
        // 数量
        "num": 0,
        // 选择
        'choose':true
      }]
    }],
    'user':[],
    'phone':[],
    "citys": ["北京市", "上海市", "广州市", "深圳市", "天津市", "承德市", "廊坊市", "南京市"],
    "carts": []
})

Fs.writeFile('db.json', JSON.stringify(data, null, 2), function (err) {
  if (err) {
    return console.error(err);
  }
  console.log('数据写入成功')
})
