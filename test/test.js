const XmlRpcClient = require('../src/mimic')

const method = 'node.hello'
let request = new XmlRpcClient("http://172.28.128.3:26821/RPC2", method);
request.addParam("111");
request.addParam("222");
var response = request.send();
console.log(response)
console(response.parseXML());
