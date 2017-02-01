// pages/cart/cart.js
Page({
  data: {
    cartlist: [
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
        mode: 0,
        checked: false,
      },
      {
        id: 2,
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
          store: 14,
          "type": {
            id: 1,
            name: "键盘外设"
          }
        },
        num: 1,
        mode: 0,
        checked: false,
      },
      {
        id: 3,
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
          store: 14,
          "type": {
            id: 1,
            name: "键盘外设"
          }
        },
        num: 1,
        mode: 0,
        checked: false,
      },
      {
        id: 4,
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
          store: 14,
          "type": {
            id: 1,
            name: "键盘外设"
          }
        },
        num: 1,
        mode: 0,
        checked: false,
      },
      {
        id: 5,
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
          store: 14,
          "type": {
            id: 1,
            name: "键盘外设"
          }
        },
        num: 1,
        mode: 0,
        checked: false,
      }
    ],
    totalPrice: 0,
    totalCount: 0,
    isAll: false
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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
    this.updateData();
    setTimeout(function () {
      console.log("stopPull")
      wx.stopPullDownRefresh();
    }, 2000)
  },
  updateData: function () {
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/cart_getlist.do',
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        that.setData({
          cartlist: res.data
        })
        that.checkIsAll()
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
  changeMode: function (e) {
    var id = e.target.dataset.id;
    var cartlist = this.data.cartlist;
    console.log(id)
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].id == id) {
        cartlist[i].mode = cartlist[i].mode == 0 ? 1 : 0;
        break;
      }
    }
    console.log("over", cartlist);
    this.setData({
      cartlist: cartlist
    })
  }
  ,
  checkItem: function (e) {
    var id = e.target.dataset.id;
    var checked = e.detail.value;
    console.log(id)
    var cartlist = this.data.cartlist;
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].id == id) {
        cartlist[i].checked = checked;
        console.log(cartlist[i])
        break;
      }
    }
    this.setData({
      cartlist: cartlist
    })
    this.calcateTotal()
    this.checkIsAll()
  },
  checkAll: function (e) {
    var checked = e.detail.value;
    var cartlist = this.data.cartlist;
    for (var i = 0; i < cartlist.length; i++) {
      cartlist[i].checked = checked;
    }
    this.setData({
      cartlist: cartlist
    })
    this.calcateTotal()
  },
  calcateTotal: function () {
    var cartlist = this.data.cartlist;
    var totalPrice = 0;
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].checked) {
        totalPrice += cartlist[i].good.tcprices[cartlist[i].good.tc] * cartlist[i].num;
      }
    }
    console.log(totalPrice)
    this.setData({
      totalPrice: totalPrice
    })
  },
  checkIsAll: function () {
    var cartlist = this.data.cartlist;
    var isAll = cartlist.length!=0?true:false;
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].checked == false) {
        isAll = false;
        break;
      }
    }
    this.setData({
      isAll: isAll
    })
  },
  updateNum: function (id, num) {
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/cart_changeNum.do?id=' + id + '&num=' + num,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        if (res.data.flag) {
          setTimeout(function () {
            wx.showToast({
              title: "成功",
              duration: 1500
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
    this.calcateTotal()
  },
  updateTc: function (id, tc) {
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/cart_changeTc.do?id=' + id + '&tc=' + tc,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        if (res.data.flag) {
          setTimeout(function () {
            wx.showToast({
              title: "成功",
              duration: 1500
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
    this.calcateTotal()
  },
  changeTc: function (e) {
    var id = e.target.dataset.id;
    var cartlist = this.data.cartlist;
    var tc = e.detail.value;
    console.log(id)
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].id == id) {
        cartlist[i].good.tc = tc;
        this.updateTc(id, tc);
        break;
      }
    }
    console.log("over", cartlist);
    this.setData({
      cartlist: cartlist
    })
  },
  addNum: function (e) {
    var id = e.target.dataset.id;
    var cartlist = this.data.cartlist;
    var tc = e.detail.value;
    console.log(id)
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].id == id) {
        if (cartlist[i].num < cartlist[i].good.store) {
          cartlist[i].num = cartlist[i].num + 1;
          this.updateNum(id, cartlist[i].num);
        } else {
          wx.showToast({
            title: "不能再加了"
          })
        }
        cartlist[i].num - 1;
        break;
      }
    }
    console.log("over", cartlist);
    this.setData({
      cartlist: cartlist
    })
  },
  delNum: function (e) {
    var id = e.target.dataset.id;
    var cartlist = this.data.cartlist;
    var tc = e.detail.value;
    console.log(id)
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].id == id) {
        if (cartlist[i].num > 1) {
          cartlist[i].num = cartlist[i].num - 1;
          this.updateNum(id, cartlist[i].num);
        } else {
          wx.showToast({
            title: "不能再减了"
          })
        }
        cartlist[i].num - 1;
        break;
      }
    }
    console.log("over", cartlist);
    this.setData({
      cartlist: cartlist
    })
  },
  delItem: function (e) {
    var that = this;
    wx.showModal({
      title: "警告",
      content: "是否从购物车中移除此宝贝?",
      success: function (res) {
        if (res.confirm) {
          var id = e.target.dataset.id;
          var cartlist = that.data.cartlist;
          var tc = e.detail.value;
          console.log(id)
          for (var i = 0; i < cartlist.length; i++) {
            if (cartlist[i].id == id) {
              that.delCart(id);
              cartlist.splice(i, 1);
              break;
            }
          }
          console.log("over", cartlist);
          that.setData({
            cartlist: cartlist
          })
        }
      }
    })
  },
  submitCart: function (e) {
    var that = this;
    var cartlist = that.data.cartlist;
    for (var i = 0; i < cartlist.length; i++) {
      if (cartlist[i].checked) {
        that.updateCheck(cartlist[i].id);
      }
    }
    var that = this;
    setTimeout(function () {
      if (that.isAllOk) {
        wx.showToast({
          title: "Loading...",
          icon: "loading",
          duration: 300000
        })
        wx.request({
          url: 'http://localhost:8080/Wxmini/cart_submit.do',
          // data: {},
          method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
          // header: {}, // 设置请求的 header
          success: function (res) {
            console.log(res.data)
            if (res.data.flag) {
              setTimeout(function () {
                wx.showToast({
                  title: "结算成功",
                  duration: 1500
                })
                setTimeout(function () {
                  that.updateData();
                  that.calcateTotal()
                }, 1500)
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
    }, 300)

  },
  isAllOk: true,
  updateCheck: function (id) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/cart_check.do?id=' + id,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        if (res.data.flag) {

        } else {
          that.isAllOk = false;
        }
      },
      fail: function () {
        that.isAllOk = false;
      },
      complete: function () {
        wx.hideToast()
      }
    })
  },
  delCart: function (id) {
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    var that = this;
    wx.request({
      url: 'http://localhost:8080/Wxmini/cart_del.do?id=' + id,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        if (res.data.flag) {
          setTimeout(function () {
            wx.showToast({
              title: "成功",
              duration: 1500
            })
            that.calcateTotal()
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
  navigateToShopView :function(e){
    var typeId=e.currentTarget.dataset.id;
    console.log("NavigateToShopView--> typeId:",typeId)
    wx.navigateTo({
      url: '../index/good/good?typeId='+typeId
    })
  },
  navigateToGoodView :function(e){
    var id=e.currentTarget.dataset.id;
    console.log("NavigateToGoodView--> id:",id)
    wx.navigateTo({
      url: '../index/good/detail/detail?id='+id
    })
  }
})