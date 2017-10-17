// pages/member/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moreList: [
      { title: '待付款', index: 1, img: '../../images/member/mcc_01.png' },
      { title: '待发货', index: 1, img: '../../images/member/mcc_02.png' },
      { title: '待收货', index: 1, img: '../../images/member/mcc_03.png' },
      { title: '待评价', index: 1, img: '../../images/member/mcc_04.png' },
      { title: '退款/退货', index: 1, img: '../../images/member/mcc_05.png' },
    ],
    priceList: [
      { title: '熊猫币', index: 1, img: '../../images/member/mcc_06.png' },
      { title: '代金券', index: 2, img: '../../images/member/mcc_08.png' },
      { title: '积分', index: 3, img: '../../images/member/mcc_10_b.png' },
      { title: '积分兑换', index: 4, img: '../../images/member/mcc_07.png' },
    ],
    urlList: [
      { title: '贴吧', index: 1, img: '../../images/member/mc_03.png' },
      { title: '图吧', index: 1, img: '../../images/member/mc_04.png' },
      { title: '收货地地址管理', index: 1, img: '../../images/member/mc_05.png' },
      { title: '用户设置', index: 1, img: '../../images/member/mc_08.png' },
    ],
    userInfo: {
      avatarUrl:'',
      nickName:''
    } 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})