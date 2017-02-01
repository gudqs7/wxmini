// pages/user/order/order.js
Page({
  data: {
    orderlist: [
      {
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
      {
        id: 2,
        good: {
          title: "雷柏v500 RGB机械游戏键盘 机械键盘 黑轴 青轴 游戏键盘 有线背光",
          pic: "",
          tc: 2,
          tcs: [
            "官方标配",
            "套餐一",
            "套餐二",
            "套餐三"
          ],
          tcprices: [
            169,
            188,
            299,
            400
          ],
          price: 169,
          prevprice: 499,
          store: 4,
          "type": {
            id: 1,
            name: "键盘外设"
          }
        },
        num: 1,
        status: "待收货",
        totalPrice: 338
      },
      {
        id: 3,
        good: {
          title: "雷柏v500 RGB机械游戏键盘 机械键盘 黑轴 青轴 游戏键盘 有线背光",
          pic: "",
          tc: 0,
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
        status: "交易关闭",
        totalPrice: 338
      },
    ],
    typeId: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    if (options) {
      if (options.typeId) {
        this.setData({
          typeId: options.typeId
        })
      }
    }
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    this.updateData();
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPullDownRefresh: function (e) {
    var that = this;
    setTimeout(function () {
      that.updateData();
      console.log("stopPull")
      wx.stopPullDownRefresh();
    }, 2000)
  },
  updateData: function () {
    //return;
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    var that = this;
    var typeId = this.data.typeId;
    console.log("LoadingNewData--> TYPEID:", typeId)
    wx.request({
      url: 'http://localhost:8080/Wxmini/order_getlist.do?typeId=' + typeId,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        that.setData({
          orderlist: res.data
        })
      },
      fail: function () {
        setTimeout(function () {
          wx.showToast({
            title: "加载失败"
          })
        }, 100)
      },
      complete: function () {
        wx.hideToast()
      }
    })
  },
  isUpdate: false,
  changeType: function (e) {
    var typeId = e.detail.current;
    console.log(typeId);
    this.setData({
      typeId: typeId
    })
    this.updateData();
    this.isUpdate = true;
  },
  changeToAll: function () {
    this.setData({
      typeId: 0
    })
  },
  changeToPay: function () {
    this.setData({
      typeId: 1
    })
  },
  changeToShou: function () {
    this.setData({
      typeId: 2
    })
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
                }, 100)
                that.updateData();
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
                }, 100)
                that.updateData();
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
          }, 100)
          that.updateData();
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
      url: './wuliu/wuliu?id=' + id
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
          }, 100)
          that.updateData();
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
      url: '../../index/good/good?typeId=' + id
    })
  },
  navigateToOrderView: function (e) {
    console.log(e)
    var id = e.currentTarget.dataset.id;
    console.log("navigateToOrderView--> id:", id)
    wx.navigateTo({
      url: './detail/detail?id=' + id
    })
  }
})