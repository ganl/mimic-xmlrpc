# mimic-xmlrpc

rsync -aiv rsync://mimic-xmlrpc.cvs.sourceforge.net/cvsroot/mimic-xmlrpc/ mimic

Mimic (XML-RPC Client for JavaScript) v2.3
Copyright (C) 2005-2013 Carlos Eduardo Goncalves (cadu.goncalves@gmail.com)

Mimic is dual licensed under the MIT (http://opensource.org/licenses/mit-license.php) 
and GPLv3 (http://opensource.org/licenses/gpl-3.0.html) licenses.

## usage

```shell
yarn add mimic-xmlrpc
npm i mimic-xmlrpc
```

### Synchronous

The Sync code will now throw an `INVALID_ACCESS_ERR` in Chrome in version 80 : `InvalidAccessError: Failed to execute 'open' on 'XMLHttpRequest': Synchronous`

```javascript
  import XmlRpcClient from 'mimic-xmlrpc'

  const method = 'node.ping'
  let request = new XmlRpcClient('https://172.28.128.3:58086/noderpc2/', method)
  request.crossDomain = true

  request.addParam(23)
  request.addParam('222')
  request.addParam([15, 25, 35, 45])

  let response = request.send()
  console.log(response)
  console.log(response.parseXML())
```

### Asynchronous (Need to set timeout)

```javascript
  import XmlRpcClient from 'mimic-xmlrpc'

  const method = 'rpc.node_version'
  let request = new XmlRpcClient('http://172.28.128.3:26821/RPC2', method)
  request.crossDomain = true // --disable-web-security

  request.setTimeout(5000) // ms
  request.ontimeout = function (e) {
    console.log(e, 'timeout')
  }
  request.callback = function (response) {
    console.log(response)
    console.log(response.parseXML())
  }

  request.addParam(23)
  request.addParam('222')
  request.addParam([15, 25, 35, 45])
  request.send()
```
