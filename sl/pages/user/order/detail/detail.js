// pages/user/order/detail/detail.js
Page({
  data: {
    order: {
      id: 1,
      good: {
        title: "雷柏v500 RGB机械游戏键盘 机械键盘 黑轴 青轴 游戏键盘 有线背光",
        pic: "",
        tc: 1,
        tcs: [
          "官方标配",
          "套餐一",
          "套餐二",
          "套餐三"
        ],
        tcprices: [
          169,
          200,
          300,
          400
        ],
        price: 169,
        prevprice: 599,
        store: 4,
        "type": {
          id: 1,
          name: "键盘外设"
        }
      },
      num: 1,
      status: "未付款",
      totalPrice: 338
    },
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    if (options) {
      if (options.id) {
        wx.showToast({
          title: "Loading...",
          icon: "loading",
          duration: 390000
        })
        var id = options.id;
        var that = this;
        wx.request({
          url: 'http://localhost:8080/Wxmini/order_get.do?id=' + id,
          // data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function (res) {
            // success
            if (res.data) {
              console.log(res.data);
              that.setData({
                order: res.data
              })
            }
          },
          fail: function () {
            // fail
            setTimeout(function () {
              wx.showToast({
                title: "数据加载失败",
                duration: 1500
              })
              wx.navigateBack({
                delta: 1
              })
            }, 100)
          },
          complete: function () {
            // complete
            wx.hideToast();
          }
        })
      }
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  cancelOrder: function (e) {
    var that = this;
    wx.showModal({
      title: "警告",
      content: "是否确认取消订单?",
      success: function (res) {
        if (res.confirm) {

          var id = e.target.dataset.id;
          console.log("cancelOrder--> id:", id)
          wx.showToast({
            title: "Loading...",
            icon: "loading",
            duration: 300000
          })
          wx.request({
            url: 'http://localhost:8080/Wxmini/order_cancel.do?id=' + id,
            // data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
              console.log(res.data)
              if (res.data.flag) {
                setTimeout(function () {
                  wx.showToast({
                    title: "成功"
                  })
                  wx.navigateBack({
                    delta: 1
                  })
                }, 100)
              }
            },
            fail: function () {
              setTimeout(function () {
                wx.showToast({
                  title: "操作失败"
                })
              }, 100)
            },
            complete: function () {
              wx.hideToast()
            }
          })
        }
      }
    })
  },
  delOrder: function (e) {
    var that = this;
    wx.showModal({
      title: "警告",
      content: "是否确认取消订单?",
      success: function (res) {
        if (res.confirm) {
          var id = e.target.dataset.id;
          console.log("delOrder--> id:", id)
          wx.showToast({
            title: "Loading...",
            icon: "loading",
            duration: 300000
          })
          wx.request({
            url: 'http://localhost:8080/Wxmini/order_del.do?id=' + id,
            // data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
              console.log(res.data)
              if (res.data.flag) {
                setTimeout(function () {
                  wx.showToast({
                    title: "删除成功"
                  })
                  wx.navigateBack({
                    delta: 1
                  })
                }, 100)
              }
            },
            fail: function () {
              setTimeout(function () {
                wx.showToast({
                  title: "操作失败"
                })
              }, 100)
            },
            complete: function () {
              wx.hideToast()
            }
          })
        }
      }
    })
  },
  payOrder: function (e) {
    var id = e.target.dataset.id;
    console.log("payOrder--> id:", id)
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/order_pay.do?id=' + id,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        if (res.data.flag) {
          setTimeout(function () {
            wx.showToast({
              title: "支付成功"
            })
            wx.navigateBack({
              delta: 1
            })
          }, 100)
        }
      },
      fail: function () {
        setTimeout(function () {
          wx.showToast({
            title: "操作失败"
          })
        }, 100)
      },
      complete: function () {
        wx.hideToast()
      }
    })
  },
  viewWuLiu: function (e) {
    console.log(e)
    var id = e.target.dataset.id;
    console.log("viewWuLiu--> id:", id)
    wx.navigateTo({
      url: '../wuliu/wuliu?id=' + id
    })
  },
  confirmOrder: function (e) {
    var id = e.target.dataset.id;
    console.log("confirmOrder--> id:", id)
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/order_confirm.do?id=' + id,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        if (res.data.flag) {
          setTimeout(function () {
            wx.showToast({
              title: "成功"
            })
            wx.navigateBack({
              delta: 1
            })
          }, 100)
        }
      },
      fail: function () {
        setTimeout(function () {
          wx.showToast({
            title: "操作失败"
          })
        }, 100)
      },
      complete: function () {
        wx.hideToast()
      }
    })
  },
  navigateToShop: function (e) {
    var id = e.target.dataset.id;
    console.log("navigateToShop--> id:", id)
    wx.navigateTo({
      url: '../../../index/good/good?typeId=' + id
    })
  },
  navigateToGoodView: function (e) {
    console.log(e)
    var id = e.currentTarget.dataset.id;
    console.log("navigateToGoodView--> id:", id)
    wx.navigateTo({
      url: '../../../index/good/detail/detail?id=' + id
    })
  }
})