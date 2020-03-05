
// var http = require('http');
// var querystring = require('querystring');

// var postHTML = 
//   '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
//   '<body>' +
//   '<form method="post">' +
//   '网站名： <input name="name"><br>' +
//   '网站 URL： <input name="url"><br>' +
//   '<input type="submit">' +
//   '</form>' +
//   '</body></html>';

// http.createServer(function (req, res) {
//   res.setHeader('Access-Control-Allow-Origin', 'file:///D:/node/server.html'); 
//   var body = "";
//   req.on('data', function (chunk) {
//     body += chunk;
//   });
//   req.on('end', function () {
//     // 解析参数
//     body = querystring.parse(body);
//     // 设置响应头部信息及编码
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});

//     if(body.name && body.url) { // 输出提交的数据
//         res.write("网站名：" + body.name);
//         res.write("<br>");
//         res.write("网站 URL：" + body.url);
//     } else {  // 输出表单
//         res.write(postHTML);
//     }
//     res.end('成功');
//   });
// }).listen(3000);

//1.导入http模块
var http = require('http');
//导入文件模块
var fs = require('fs');
//导入路径模块
var path = require('path');
//导入url模块
var url = require('url');
let canRead = ['file://', 'undefined'];   //设置可访问的源列表
http.createServer(function (req, res) {
  let origin = req.headers.origin;
  //  if(canRead.includes(origin)){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7000');  //设置可以访问的源，cors,因为使用文件系统测试，只能为null
  res.setHeader('Access-Control-Allow-Headers', 'name');
  res.setHeader('Access-Control-Allow-Methods', 'PUT');
  res.setHeader('Access-Control-Allow-Credentials', true);  //是否允许cookies
  res.setHeader('Access-Control-Max-Age', 6);   //设置最大预检响应时间
  res.setHeader('Access-Control-Expose-Headers', 'name');  //是否允许unsafe Header
  //  }
  res.setHeader('name', 'guojunqing');     //设置头部信息
  res.writeHead(200, { 'Content-Type': 'text/html','Set-Cookie': 'myCookie=test', });//设置cookie
  res.se
  //1.默认情况下，如果url路径中有中文，则会对中文进行URI编码，所以服务端要想获取中文需要对url进行URI解码
  //  console.log(encodeURI(req.url));
  console.log(req);
  // 2.url.parse 方法可以将一个 URL 路径解析为一个方便操作的对象
  // 将第二个可选参数指定为 true， 表示将结果中的 query 解析为一个对象
  let parseObj = url.parse(req.url, true);
  let pathname = parseObj.pathname; //相当于无参数的url路径
  // 这里将解析拿到的查询字符串对象作为一个属性挂载给 req 对象，这样的话在后续的代码中就可以直接通过 req.query 来获取查询字符串了
  req.query = parseObj.query;
  fs.readFile('/node/server.html', function (err, data) {
    res.end('show(456)');  //应该是query中的$cd()
  })


}).listen(8000);

console.log('Server running on port 8080.');
