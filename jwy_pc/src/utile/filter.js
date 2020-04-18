const timeDate = (value) => {
  if (value) {
    let arry = []
    arry = value.split(' ')
    arry = arry[0].split('-')
    return arry[1] + '-' + arry[2]
  } else {
    return ''
  }
}
const timeFilter = (value) => {
  if (value) {
    return value.split(' ')[0]
  } else {
    return ''
  }
}
const transcoder = (value) => {
  return String.fromCharCode(64 + value)
}
export {
  timeDate,
  timeFilter,
  transcoder
}
