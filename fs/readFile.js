const fs = require('fs')
// fs 是 node 的文件系统模块，通过此模块的 readFile方法，可以读取文件

// err 是错误
// data 是数据，buffer数据类型的 一个二进制类型，需要 toString()
fs.readFile('hello.txt', (err, data) => {
  if (err) {
    console.log(err, 'err')
  }
  console.log(data.toString(), 'data')
})
