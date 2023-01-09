const fs = require('fs')

fs.writeFile('hello.txt', '要写入的内容', (res) => {
  console.log(res, 'ss')
})
