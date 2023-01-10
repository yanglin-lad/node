const path = require('path')
// path 模块的 join方法，可以拼接路径

let domain = 'http://www.younglin.com'
let url = 'docs'
let id = '23'

let result = path.join(domain, url, id)

console.log(result)

const pathStr = path.join('/a', '/b/c','../', '/d')
console.log(pathStr) // \a\b\d  ../ 会抵消掉一层路径

const pathStr2 = path.join(__dirname, 'path.js')
console.log(pathStr2)
