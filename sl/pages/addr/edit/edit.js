// pages/addr/edit/edit.js
Page({
  data: {
    addr:{

    },
    provinces: [
      "江西",
      "湖南"
    ],
    citys: [
      "赣州",
      "长沙"
    ],
    areas: [
      "宁都县",
      "开福区"
    ],
    streets: [
      "清塘镇",
      "芙蓉北路",
      "湘江中路"
    ],
    street_idx: 0,
    province_idx: 0,
    city_idx: 0,
    area_idx: 0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    //console.log(options)
    if (options.id) {
      this.setData({
        "addr.id": options.id
      })
    }

    var id = this.data.addr.id;
    if (id) {
      var that = this;
      wx.showToast({
        title: "Loading...",
        icon: "loading",
        duration: 900000
      })
      wx.request({
        url: 'http://localhost:8080/Wxmini/addr_get.do?id=' + id,
        // data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res.data);
          var addr = res.data;
          that.setData({
            addr: addr
          })
        },
        fail: function () {
          // fail
          wx.showModal({
            content: "数据加载失败,请检查网络后重试!",
            showCancel: false,
            success: function (res) {
              wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
              })
            }
          })
        },
        complete: function () {
          // complete
          wx.hideToast();
          var addr = that.data.addr;
          var provinces = that.data.provinces;
          var areas = that.data.areas;
          var citys = that.data.citys;
          var streets = that.data.streets;
          var province_idx = 0;
          var city_idx = 0;
          var area_idx = 0;
          var street_idx = 0;
          //记得移走到success里面
          for (var i = 0; i < provinces.length; i++) {
            if (provinces[i] == addr.province) {
              province_idx = i;
              break;
            }
          }
          for (var i = 0; i < citys.length; i++) {
            if (citys[i] == addr.city) {
              city_idx = i;
              break;
            }
          }
          for (var i = 0; i < areas.length; i++) {
            if (areas[i] == addr.area) {
              area_idx = i;
              break;
            }
          }
          for (var i = 0; i < streets.length; i++) {
            if (streets[i] == addr.street) {
              street_idx = i;
              break;
            }
          }
          that.setData({
            "province_idx": province_idx,
            "city_idx": city_idx,
            "area_idx": area_idx,
            "street_idx": street_idx,
          })
        }
      })
    }else{
      wx.setNavigationBarTitle({
        title: '新增地址'
      })
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
  provinceChange: function (e) {
    var idx = e.detail.value;
    console.log(idx);
    this.setData({
      province_idx: idx
    })
  },
  cityChange: function (e) {
    var idx = e.detail.value;
    console.log(idx);
    this.setData({
      city_idx: idx
    })
  },
  areaChange: function (e) {
    var idx = e.detail.value;
    console.log(idx);
    this.setData({
      area_idx: idx
    })
  },
  streetChange: function (e) {
    var idx = e.detail.value;
    console.log(idx);
    this.setData({
      street_idx: idx
    })
  },
  saveAddr: function (e) {
    console.log(e)
    var provinces = this.data.provinces;
    var areas = this.data.areas;
    var citys = this.data.citys;
    var streets = this.data.streets;

    var addr = e.detail.value;
    addr.province = provinces[addr.province];
    addr.area = areas[addr.area];
    addr.city = citys[addr.city];
    addr.street = streets[addr.street];
    var id = this.data.addr.id;
    addr.id=id;
    console.log(addr)
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 900000
    })
    wx.request({
      url: 'http://localhost:8080/Wxmini/addr_saveOrUpdate.do',
      data: addr,
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        setTimeout(function () {
          if (res.data.flag == 'true') {
            wx.showToast({
              title: "保存成功",
              duration: 1500
            })
            setTimeout(function () {
              wx.navigateBack({
                delta: 1, // 回退前 delta(默认为1) 页面
              })
            }, 2000)
          } else {
            wx.showToast({
              title: "操作失败",
              duration: 1500
            })
          }
        }, 100)
      },
      fail: function () {
        // fail
        wx.showModal({
          content: "操作失败,未保存成功,请检查网络后重试",
          showCancel: false
        })
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  },
  delAddr: function (e) {
    var id = e.target.dataset.id;
    console.log(id)
    wx.showToast({
      title: "Loading...",
      icon: "loading",
      duration: 900000
    })
    wx.request({
      url: 'http://localhost:8080/Wxmini/addr_del.do?id=' + id,
      // data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        setTimeout(function () {
          wx.showToast({
            title: "删除成功",
            duration: 1500
          })
          setTimeout(function () {
            wx.navigateBack({
              delta: 1, // 回退前 delta(默认为1) 页面
            })
          }, 2000)
        }, 100)
      },
      fail: function () {
        wx.showModal({
          content: "操作失败,未删除该地址,请检查网络后重试",
          showCancel: false
        })
      },
      complete: function () {
        // complete
        wx.hideToast();
      }
    })
  }
})