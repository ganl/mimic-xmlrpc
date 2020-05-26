# mimic-xmlrpc
rsync -aiv rsync://mimic-xmlrpc.cvs.sourceforge.net/cvsroot/mimic-xmlrpc/ mimic


Mimic (XML-RPC Client for JavaScript) v2.3 
Copyright (C) 2005-2013 Carlos Eduardo Goncalves (cadu.goncalves@gmail.com)

Mimic is dual licensed under the MIT (http://opensource.org/licenses/mit-license.php) 
and GPLv3 (http://opensource.org/licenses/gpl-3.0.html) licenses.

## usage

```
yarn add mimic-xmlrpc
npm i mimic-xmlrpc
```

```javascript
  import XmlRpcClient from 'mimic-xmlrpc'

  const method = 'node.ping'
  let request = new XmlRpcClient('https://172.28.128.3:58086/noderpc2/', method)
  request.crossDomain = true
  request.setTout(3000) // ms
  request.ontimeout = (e) => {
    console.log(e, 'timeout callback')
  }

  request.addParam(23)
  request.addParam('222')
  request.addParam([15, 25, 35, 45])

  let response = request.send()
  console.log(response)
  console.log(response.parseXML())
```
