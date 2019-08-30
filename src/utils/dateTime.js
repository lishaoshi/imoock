function getDateTime(date) {
  if(!date) return false
  let data = new Date(date)
  let info = `${data.getFullYear()}-${data.getMonth()+1}-${data.getDay()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
  return info
}

export {
  getDateTime
}