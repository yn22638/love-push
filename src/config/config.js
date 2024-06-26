// 微信测试公众号
const params = {
  ppid: 'wxd179226b0027bccc',
  secret: 'f7704528a48b1715ffc8a54c083f9f9c',
  touser: 'oR4tY6mY2y3zoj3YOAXSMWgxCPcM',
  template_id: 'uCKaj0onj7kDelWu3gXsJ9JE1G6FwY_eUDgSz5CsnTk',
}
// const params = {
//   appid: 'wx23ad660d6f2f710c',
//   secret: 'f1c258e0e81dc0e7960f1eb9debdfc6c',
//   touser: 'ooaVN5kI6lms-HZl_moCiMBlJ6Wk',
//   template_id: 'xvcbGOhKlMtPZaKuNxmTx8a0_SrjeXTeL7yH6EfKLTk',
// }

// 纪念日
const START_DAY = '2020/9/12'
// 每日发送时间
const SEND_HOUR = 9
const SEND_MINUTE = 00
// 情话 api 备份 https://api.mcloc.cn/love/  https://api.vvhan.com/api/love  https://api.shadiao.pro/chp
// 获取每日情话链接
const CHP_URL = 'https://api.shadiao.pro/chp'
// 当地拼音,需要在下面的墨迹天气url确认
const LOCAL = 'hebei/lulong-county'
// 获取天气链接
const WEATHER_URL = 'https://tianqi.moji.com/weather/china/' + LOCAL

const listConfig = {
  nowDate: {
    value: '',
    color: '#FFA500',
  },
  loveWords: {
    value: '',
    color: '#FF69B4',
  },
  city: {
    value: '卢龙县🏡',
    color: '#A020F0',
  },
  weather: {
    value: '',
    color: '#F4A460',
  },
  minTemperature: {
    value: '',
    color: '#7CD47D',
  },
  maxTemperature: {
    value: '',
    color: '#FF7256',
  },
  loveDate: {
    value: '',
    color: '#00BFFF',
  },
  babyBirthday: {
    value: '',
    color: '#FFC125',
  },
  enText: {
    value: '',
    color: '#CC3299',
  },
  zhText: {
    value: '',
    color: '#FF1CAE',
  },
}

module.exports = {
  params,
  listConfig,
  START_DAY,
  SEND_HOUR,
  SEND_MINUTE,
  CHP_URL,
  WEATHER_URL,
}
