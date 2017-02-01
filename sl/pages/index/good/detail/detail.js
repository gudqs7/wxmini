// pages/index/good/detail/detail.js
Page({
  data: {
    good: {
      id: 1,
      title: "雷柏vv500 机械键盘 背光键盘 游戏键盘",
      price: 169.00,
      prevprice: 599.00,
      tcs: [
        "官方标配",
        "套餐一",
        "套餐二",
        "套餐三"
      ],
      tcprices: [
        169,
        204,
        259,
        409
      ],
      tc: 1,
      pics: [
        "../../../../image/01.jpg",
        "../../../../image/02.jpg",
        "../../../../image/03.jpg",

      ],
      xqs: [
        {
          type: 0,
          content: "../../../../image/01.jpg",
        },
        {
          type: 0,
          content: "../../../../image/02.jpg",
        },
        {
          type: 0,
          content: "../../../../image/03.jpg",
        },
        {
          type: 1,
          content: "史上第一好键盘,各种机械轴俱全,欢迎选购!"
        }
      ]
    },
    id: 1
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    if (options) {
      if (options.id) {
        console.log(options.id)
        this.setData({
          id: options.id
        })
      }
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var id = this.data.id;
    console.log("onShow --> id:", id);
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 390000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/good_get.do?id=' + id,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        that.setData({
          good: res.data
        })
      },
      fail: function () {
        // fail
        setTimeout(function () {
          wx.showToast({
            title: "加载失败",
            duration: 1500
          })
        }, 100)
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  buyNow: function (e) {
    var id = this.data.good.id;
    var tc = this.data.good.tc;
    console.log("buyNow --> id:", id);
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 390000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/good_buy.do?id=' + id + '&tc=' + tc,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        if (res.data.flag) {
          var orderId = res.data.orderId;
          wx.navigateTo({
            url: '../../../user/order/detail/detail?id=' + orderId
          })
        } else {
          setTimeout(function () {
            wx.showToast({
              title: "操作失败",
              duration: 1500
            })
          }, 100)
        }
      },
      fail: function () {
        // fail
        setTimeout(function () {
          wx.showToast({
            title: "操作失败",
            duration: 1500
          })
        }, 100)
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  },
  addToCart: function (e) {
    var id = this.data.good.id;
    var tc = this.data.good.tc;
    console.log("onShow --> id:", id);
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 390000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/good_addToCart.do?id=' + id + '&tc=' + tc,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res.data);
        if (res.data.flag) {
          setTimeout(function () {
            wx.showToast({
              title: "加入购物车成功",
              duration: 1500
            })
          }, 100)
        } else {
          setTimeout(function () {
            wx.showToast({
              title: "操作失败",
              duration: 1500
            })
          }, 100)
        }
      },
      fail: function () {
        // fail
        setTimeout(function () {
          wx.showToast({
            title: "操作失败",
            duration: 1500
          })
        }, 100)
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })



  },
  changeTc: function (e) {
    var tc = e.detail.value;
    console.log("changeTc--> tc:", tc)
    this.setData({
      "good.tc": tc
    })
  }
})