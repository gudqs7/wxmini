// pages/addr/addr.js
Page({
  data: {
    addrlist: [
      {
        id: 1,
        name: "大全",
        phone: "18670321728",
        postNo: "41000",
        province: "湖南",
        city: "长沙",
        area: "开福区",
        street: "湘江中路",
        desc: "重建十号地8栋栋2单元501",
        isDefault: true,
        isLast: false
      },
      {
        id: 2,
        name: "大全2",
        phone: "18670321728",
        postNo: "41000",
        province: "湖南",
        city: "长沙",
        area: "开福区",
        street: "湘江中路",
        desc: "重建十号地8栋栋2单元501",
        isDefault: false,
        isLast: false
      },
      {
        id: 4,
        name: "大全4",
        phone: "18670321728",
        postNo: "41000",
        province: "湖南",
        city: "长沙",
        area: "开福区",
        street: "湘江中路",
        desc: "重建十号地8栋栋2单元501",
        isDefault: false,
        isLast: false
      },
      {
        id: 3,
        name: "大全3",
        phone: "18670321728",
        postNo: "41000",
        province: "湖南",
        city: "长沙",
        area: "开福区",
        street: "湘江中路",
        desc: "重建十号地8栋栋2单元501",
        isDefault: false,
        isLast: false
      },
      {
        id: 5,
        name: "大全5",
        phone: "18670321728",
        postNo: "41000",
        province: "湖南",
        city: "长沙",
        area: "开福区",
        street: "湘江中路",
        desc: "重建十号地8栋栋2单元501",
        isDefault: false,
        isLast: true
      },
    ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  updateAddr: function () {
    var that = this;
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 300000
    })
    wx.request({
      url: 'http://192.168.43.63:8080/Wxmini/addr_getlist.do',
      //data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log('getlist:',res.data)
        for (var i = 0; i < res.data.length; i++) {
          var addr = res.data[i];
          if (i == res.data.length - 1) {
            addr.isLast = true;
          } else {
            addr.isLast = false;
          }
        }
        that.setData({
          addrlist: res.data
        })
      },
      fail: function () {
        // fail
        setTimeout(function () {
          wx.showToast({
            title: "获取地址失败",
            duration: 2000
          })
          // setTimeout(function () {
          //   wx.navigateBack({
          //     delta: 1, // 回退前 delta(默认为1) 页面
          //   })
          // }, 2000)
        }, 100)
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    this.updateAddr();
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onPullDownRefresh: function () {
    var that = this;
    setTimeout(function () {
      that.updateAddr();
      wx.stopPullDownRefresh();
      console.log("stoppull")
    }, 2000)
  },
  beDefault: function (e) {
    //console.log(e.target)
    var id = e.target.dataset.id;
    var flag = e.detail.value
    if (flag) {
      console.log(id)
      wx.showToast({
        title: "Loading",
        icon: "loading",
        duration: 900000
      })
      var that = this;
      wx.request({
        url: 'http://192.168.43.63:8080/Wxmini/addr_bedefault.do?id=' + id,
        // data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          'content-type': 'application/json'
        }, // 设置请求的 header
        success: function (res) {

          var addrs = that.data.addrlist;
          console.log(addrs)
          for (var i = 0; i < addrs.length; i++) {
            //console.log(addrs[i])
            var addr = addrs[i]
            if (addr.id == id) {
              addr.isDefault = true;
              //console.log(addr)
            } else {
              addr.isDefault = false;
            }
            if (i == addrs.length - 1) {
              addr.isLast = true;
            } else {
              addr.isLast = false;
            }
          }
          console.log("over", addrs)
          that.setData({
            addrlist: addrs
          })
          setTimeout(function () {
            wx.showToast({
              title: "更改成功",
              duration: 1500
            })
          }, 100)
        },
        fail: function () {
          wx.showModal({
            content: "更改默认地址失败",
            showCancel: false
          })
        },
        complete: function () {
          wx.hideToast();
        }
      })
    }
  },
  navigateToAdd: function (e) {
    wx.navigateTo({
      url: './edit/edit'
    })
  },
  navigateToEdit: function (e) {
    var id = e.target.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: './edit/edit?id=' + id
    })
  },
  delAddr: function (e) {
    var id = e.target.dataset.id;
    console.log(id)
    var that = this;
    wx.showModal({
      title: "警告",
      content: "是否删除该地址?",
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: "Loading",
            icon: "loading",
            duration: 900000
          })
          wx.request({
            url: 'http://192.168.43.63:8080/Wxmini/addr_del.do?id=' + id,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
              setTimeout(function () {
                wx.showToast({
                  title: "删除成功",
                  duration: 1500
                })
              }, 100)
              var addrs = that.data.addrlist;
              for (var i = 0; i < addrs.length; i++) {
                var addr = addrs[i]
                if (addr.id == id) {
                  addrs.splice(i, 1);
                }
              }
              //根据索引顺序更改对应的 isLast值,确保页面正确显示
              for (var i = 0; i < addrs.length; i++) {
                if (i == addrs.length - 1) {
                  addrs[i].isLast = true;
                } else {
                  addrs[i].isLast = false;
                }
              }

              console.log("over", addrs)
              that.setData({
                addrlist: addrs
              })

            },
            fail: function () {
              wx.showModal({
                content: "操作失败,未删除此地址!",
                showCancel: false
              })

            },
            complete: function () {
              wx.hideToast();
            }
          })
        }
      }
    })
  }
})