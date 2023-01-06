const fs = require('fs')
// fs 是 node 的文件系统模块，通过此模块的 readFile方法，可以读取文件
fs.readFile('hello.txt', (err, data) => {
  if (err) {
    console.log(err, 'err')
  }
  console.log(data.toString(), 'data')
})
