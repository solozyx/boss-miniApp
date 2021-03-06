const dateFormat = function (timestamp = new Date().getTime(), fmt = "yyyy-MM-dd hh:mm") {
  timestamp = parseFloat(timestamp)
  var date = new Date(timestamp)
  function timeFormat(num) {
    return num < 10 ? '0' + num : num
  }
  var o = [
    ['M+', date.getMonth() + 1], //月份
    ['d+', date.getDate()], //日
    ['h+', date.getHours()], //小时
    ['m+', date.getMinutes()], //分
    ['s+', date.getSeconds()], //秒
    ['q+', Math.floor((date.getMonth() + 3) / 3)], //季度
    ['S', date.getMilliseconds()], //毫秒
  ];
  var regYear = new RegExp("(y+)", "i")
  var reg1 = regYear.exec(fmt)
  if (reg1) {
    fmt = fmt.replace(reg1[1], (date.getFullYear() + '').substring(4 - reg1[1].length))
  }
  for (var k = 0; k < o.length; k++) {
    var key = o[k][0]
    var val = o[k][1]
    var reg2 = new RegExp('(' + key + ')').exec(fmt)
    if (reg2) {
      fmt = fmt.replace(reg2[1], (reg2[1].length == 1) ? val : ('00' + val).substring(('' + val).length))
    }
  }
  return fmt
}

export default dateFormat