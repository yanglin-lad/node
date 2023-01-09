const fs = require('fs')

fs.readFile('数据.txt', 'utf-8', (err, data) => {
  if (err) {
    return console.log('读取失败', err)
  }
  // console.log('读取成功', data)
  // 将data以空格分割为数组
  const arrOld = data.split(' ')
  const arrNew = []
  arrOld.forEach(item => {
    // 遍历数组的每一项，将 = 进行替换
    arrNew.push(item.replace('=', ':'))
  })
  // 将新数组拼接为字符串
  const str = arrNew.join('\r\n')

  fs.writeFile('新数据.txt', str, 'utf-8', err1 => {
    if (err1) {
      return console.log('写入失败', err1)
    }
    console.log('success')
  })

})
