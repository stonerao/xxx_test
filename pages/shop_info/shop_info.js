var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.Quantity, Zan.Tab, {
  data: {
    quantity1: {
      quantity: 1,
      min: 1,
      max: 99
    },
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
    tab1: {
      list: [{
        id: 'all',
        title: '商品介绍'
      }, {
        id: 'topay',
        title: '规格参数'
      }, {
        id: 'tosend',
        title: '售后保障'
      }],
      selectedId: 'all',
      scroll: false
    },
  },

  handleZanQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;

    this.setData({
      [`${componentId}.quantity`]: quantity
    });
  },
  handleZanTabChange(e) {
    var componentId = e.componentId;
    var selectedId = e.selectedId;

    this.setData({
      [`${componentId}.selectedId`]: selectedId
    });
  }
}));
