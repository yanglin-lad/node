const path = require('path')
// path 模块的 join方法，可以拼接路径

let domain = 'http://www.younglin.com'
let url = 'docs'
let id = '23'

let result = path.join(domain, url, id)

console.log(result)
