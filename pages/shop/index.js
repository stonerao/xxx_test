// pages/shop/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/index/banner1.jpg',
      '../../images/index/banner2.jpg',
      '../../images/index/banner1.jpg',
      '../../images/index/banner2.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 2000,
    area: ['省份', '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
    areaIndex: 0,
    area1: ['省份', '北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台湾省', '香港特别行政区', '澳门特别行政区'],
    areaIndex1: 0,
    navList: [
      { title: "产品分类", img: '../../images/index/cl_1.png', url: '../class_list/class_list' },
      { title: "一县一品", img: '../../images/index/cl_2.png', url: '' },
      { title: "我的收藏", img: '../../images/index/cl_3.png', url: '' },
      { title: "每日签到", img: '../../images/index/cl_4.png', url: '' },
      { title: "限时抢购", img: '../../images/index/cl_5.png', url: '' },
      { title: "限时折扣", img: '../../images/index/cl_6.png', url: '' },
      { title: "组合套餐", img: '../../images/index/cl_7.png', url: '' },
      { title: "满即送", img: '../../images/index/cl_8.png', url: '' },
    ],
    shopList: [
      { title: "来自四川凉山的顶级橄榄油，现买即送价值128元精油 家庭半年套餐（双支礼盒*6,分6次邮寄）", img: '../../images/index/3_05561240221505660_240.jpg', url: '../shop_info/shop_info', price: '1515.00' }, { title: "来自四川凉山的顶级橄榄油，现买即送价值128元精油 家庭半年套餐（双支礼盒*6,分6次邮寄）", img: '../../images/index/3_05561240221505660_240.jpg', url: '', price: '1515.00' }, { title: "来自四川凉山的顶级橄榄油，现买即送价值128元精油 家庭半年套餐（双支礼盒*6,分6次邮寄）", img: '../../images/index/3_05561240221505660_240.jpg', url: '', price: '1515.00' }, { title: "来自四川凉山的顶级橄榄油，现买即送价值128元精油 家庭半年套餐（双支礼盒*6,分6次邮寄）", img: '../../images/index/3_05561240221505660_240.jpg', url: '', price: '1515.00' }, { title: "来自四川凉山的顶级橄榄油，现买即送价值128元精油 家庭半年套餐（双支礼盒*6,分6次邮寄）", img: '../../images/index/3_05561240221505660_240.jpg', url: '', price: '1515.00' }, { title: "来自四川凉山的顶级橄榄油，现买即送价值128元精油 家庭半年套餐（双支礼盒*6,分6次邮寄）", img: '../../images/index/3_05561240221505660_240.jpg', url: '', price: '1515.00' },
    ]
  },
  onAreaChange: function (e) {
    this.setData({
      areaIndex: e.detail.value
    });
  }, onAreaChange1: function (e) {
    this.setData({
      areaIndex1: e.detail.value
    });
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