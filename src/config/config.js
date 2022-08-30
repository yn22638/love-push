// 微信测试公众号
const params = {
  appid: 'wx23ad660d6f2f710c',
  secret: 'f1c258e0e81dc0e7960f1eb9debdfc6c',
  touser: 'ooaVN5kI6lms-HZl_moCiMBlJ6Wk',
  template_id: 'Oloz9Lquy-fh1zazhbaz_2-jBcg_m7Y4YpeW-8kvusU',
}

// 纪念日
const START_DAY = '2020/9/12'
// 每日发送时间
const SEND_HOUR = 9
const SEND_MINUTE = 00
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
    value: '卢龙县',
    color: '#00FFFF',
  },
  weather: {
    value: '',
    color: '#8B658B',
  },
  minTemperature: {
    value: '',
    color: '#7CD47D',
  },
  maxTemperature: {
    value: '',
    color: '	#FF7256',
  },
  loveDate: {
    value: '',
    color: '#ff9c6e',
  },
  babyBirthday: {
    value: '',
    color: '#173177',
  },

  txt: {
    value: '',
    color: '#3C4244',
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
