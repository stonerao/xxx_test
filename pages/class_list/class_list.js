// pages/class_list/class_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classItems: [
      { title: '品牌推荐', index: 1 },
      { title: '四川特产', index: 2 },
      { title: '靓丽生活', index: 3 },
      { title: '信息生活', index: 4 },
      { title: '四川特产', index: 5 },
      { title: '靓丽生活', index: 6 },
      { title: '信息生活', index: 7 },
      { title: '四川特产', index: 8 },
      { title: '靓丽生活', index: 9 },
      { title: '信息生活', index: 10 },
      { title: '四川特产', index: 11 },
      { title: '靓丽生活', index: 12 },
      { title: '信息生活', index: 13 },
      { title: '信息生活', index: 14 },
      { title: '信息生活', index: 15 },
      { title: '信息生活', index: 16 },
    ],
    indexNum: 1,
    items: [
      { title: '阿迪达斯', img: '../../images/tubiao.jpg' },
      { title: '阿迪达斯', img: '../../images/tubiao.jpg' },
      { title: '阿迪达斯', img: '../../images/tubiao.jpg' },
      { title: '阿迪达斯', img: '../../images/tubiao.jpg' },
    ],
    datas: { title: '阿迪达斯', img: '../../images/tubiao.jpg' },
    hasSearchVal: false
  },
  // 点击左边
  itemsTab(e) {
    this.setData({
      indexNum: e.target.dataset.index
    })
    var num = Math.round(Math.random() * 100);
    var arr = [];
    this.data.items = [];
    for (var i = 0; i < num; i++) {
      arr.push(this.data.datas)
    }
    this.setData({
      items: arr
    })
  },
  searchFocus(e) {
    if (e.detail.value) {
      this.setData({
        hasSearchVal: true
      })
    } else {
      this.setData({
        hasSearchVal: false
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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