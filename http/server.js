const http = require("http")

// 创建 服务器
// req：require，请求，包含了请求的信息
// res：response，响应
const server = http.createServer((req, res) => {
  // end 定义响应的文本
  res.end('Hello word')
})
server.listen(8618, () => {
  console.log('Server is running')
})
