const axios = require('axios')
const moment = require('moment')
const md5 = require('md5')
const { listConfig, START_DAY } = require('../../src/config/config')
const { getContent } = require('./getContent')
const { getWeatherTips, getWeatherData } = require('./getWeatherContent')
const week = {
  1: '一',
  2: '二',
  3: '三',
  4: '四',
  5: '五',
  6: '六',
  7: '天',
}
const getAllDataAndSend = (param) => {
  let today = new Date()
  let initDay = new Date(START_DAY)
  let lastDay = Math.floor((today - initDay) / 1000 / 60 / 60 / 24)
  listConfig.babyBirthday.value = `距离宝宝的生日还有${reckonBirthday()}天🎂 `
  const weekDay = today.getDay()
  listConfig.loveDate.value = `今天是我们恋爱的第${lastDay}天🥰`
  const todaystr = moment().format('YYYY-MM-DD')
  listConfig.nowDate.value = `${todaystr} 星期${week[weekDay]}📆`
  listConfig.loveWords.value = `不管哪一天，每天都是爱你的一天💘`
  return Promise.all([getContent(), getWeatherTips(), getWeatherData()]).then(
    async (data) => {
      console.log(data, 'data')
      listConfig.enText.value = await translateLoveText(data[0].data.text)
      listConfig.zhText.value = data[0].data.text
      const { WeatherImgUrl, WeatherText, Temperature, WindDirection } = data[2]
      listConfig.weather.value = `${WeatherText},${WindDirection},${data[1]}🌈`
      listConfig.minTemperature.value =
        Temperature.split('/')[0].replace(' ', '') + '🥶'
      listConfig.maxTemperature.value =
        Temperature.split('/')[1].replace(' ', '') + '🥵'
      return sendMessage(param, listConfig)
    }
  )
}

// 调用百度翻译 api 实现中文 -> 英文
async function translateLoveText(text) {
  const salt = moment().unix()
  const sign = md5(`20220615001249031${text}${salt}iHX_Wz5jsWL3OuAfxXGL`)
  const path = `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${encodeURI(
    text
  )}&from=zh&to=en&appid=20220615001249031&salt=${salt}&sign=${sign}`
  const {
    data: { trans_result },
  } = await axios.post(path)
  const { dst } = trans_result[0]
  // `${dst}\n${src}`
  return dst
}

// 计算生日
function reckonBirthday() {
  let birthdayTime = moment().format('YYYY-') + '12-19'
  if (moment().unix() >= moment(birthdayTime).unix()) {
    birthdayTime = moment(birthdayTime).add(1, 'y').format('YYYY-MM-DD')
  }
  return parseInt(
    (moment(birthdayTime).unix() - moment().unix()) / (60 * 60 * 24)
  )
}

function sendMessage(data, listConfig) {
  console.log(listConfig, 'listConfig')
  return axios.post(
    'https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=' +
      data.access_token,
    {
      touser: data.touser,
      template_id: data.template_id,
      data: listConfig || {},
    }
  )
}

module.exports = getAllDataAndSend
