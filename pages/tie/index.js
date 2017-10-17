Page({
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
    dataList: [
      { title: '咨询', eTitle: 'NEWS', url: '' },
      { title: '话题', eTitle: 'TOPIC', url: '' },
      { title: '故事会', eTitle: 'STORY', url: '' }
    ],

  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})