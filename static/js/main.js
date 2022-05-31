particlesJS("particles-js",{
  "particles":{
    "number":{
      "value":50,//この数値を変更すると幾何学模様の数が増減できる
      "density":{
        "enable":true,
        "value_area":800
      }
    },
    "color":{
      "value":"#000"//色
    },
    "shape":{
      "type":"polygon",//形状はpolygonを指定
      "stroke":{
        "width":0,
      },
  "polygon":{
    "nb_sides":3//多角形の角の数
  },
  "image":{
    "width":190,
    "height":100
  }
  },
    "opacity":{
    "value":0.664994832269074,
    "random":false,
    "anim":{
      "enable":true,
      "speed":2.2722661797524872,
      "opacity_min":0.08115236356258881,
      "sync":false
    }
    },
    "size":{
      "value":3,
      "random":true,
      "anim":{
        "enable":false,
        "speed":40,
        "size_min":0.1,
        "sync":false
      }
    },
    "line_linked":{
      "enable":true,
      "distance":150,
      "color":"#000",
      "opacity":0.6,
      "width":1
    },
    "move":{
      "enable":true,
      "speed":2,//この数値を小さくするとゆっくりな動きになる
      "direction":"none",//方向指定なし
      "random":false,//動きはランダムにしない
      "straight":false,//動きをとどめない
      "out_mode":"out",//画面の外に出るように描写
      "bounce":false,//跳ね返りなし
      "attract":{
        "enable":false,
        "rotateX":600,
        "rotateY":961.4383117143238
      }
    }
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{
        "enable":false,
        "mode":"repulse"
      },
  "onclick":{
    "enable":false
  },
  "resize":true
    }
  },
  "retina_detect":true
});
