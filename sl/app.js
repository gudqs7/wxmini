//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          console.log("Login Success!")
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              //console.log(res)
              wx.request({
                url: 'http://localhost:8080/Wxmini/login.do?nickName='+res.userInfo.nickName,
                // data: res.userInfo,
                method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                  'content-type': 'application/json'
                }, // 设置请求的 header
                success: function (res) {
                  // success
                  if(res.data.flag=='true'){
                    // wx.showToast({
                    //   title:"Login OK!"
                    // })
                  }
                },
                fail: function () {
                  // fail
                }
              })
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})