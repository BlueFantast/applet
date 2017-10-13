
Page({
  data: {
    city: '深圳',
    picUrl: '../images/m1.png',
    weather: '',
    wind: '',
    temp: ''
  },
  onLoad: function (e) {
    this.getData(this.data.city);
  },
  bindKeyInput: function (e) {
    this.city = e.detail.value;
  },
  search: function (e) {
    this.getData(this.city || '深圳');
  },
  getData: function (querycity) {
    var that = this;
    var appkey = "d7f01b7ad38d3962791036cea440c326";
    var url = "https://way.jd.com/jisuapi/weather?city=" + querycity + "&appkey=" + appkey;
    wx.request({
      url: url,
      success: function (res) {
        var weatherData = res.data.result.result;
        that.setData({
          city: weatherData.city,
          temp: weatherData.temp,
          wind: weatherData.winddirect + weatherData.windpower,
          weather: weatherData.weather
        })
      }
    })
  }
})