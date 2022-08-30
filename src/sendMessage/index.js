var axios = require('axios')
var moment = require('moment')
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
  listConfig.babyBirthday.value = `距离宝宝的生日还有${20}天🎂 `

  const weekDay = today.getDay()
  listConfig.loveDate.value = `今天是我们恋爱的第${lastDay}天🥰`
  const todaystr = moment().format('YYYY-MM-DD')
  listConfig.nowDate.value = `${todaystr} 星期${week[weekDay]}`
  listConfig.loveWords.value = `不管哪一天，每天都是爱你的一天💘`
  return Promise.all([getContent(), getWeatherTips(), getWeatherData()]).then(
    (data) => {
      console.log(data, 'data')
      listConfig.txt.value = data[0].data.text
      const { WeatherImgUrl, WeatherText, Temperature, WindDirection } = data[2]
      listConfig.weather.value = `${WeatherText},${WindDirection},${data[1]}🌞`
      listConfig.minTemperature.value =
        Temperature.split('/')[0].replace(' ', '') + '😬'
      listConfig.maxTemperature.value =
        Temperature.split('/')[1].replace(' ', '') + '🥵'
      return sendMessage(param, listConfig)
    }
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
