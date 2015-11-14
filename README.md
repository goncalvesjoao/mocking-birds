# mocking-birds
expressjs server that gathers several mocking servers

# Getting started
```
$> npm install mocking-birds -g
```

# Usage
## cli
```
$> mocking-birds <folder with mock files> -p <server port> -w url1, url2
```

## node
```javascript
var MockingBirds = require('mocking-birds');
var serverPort = 8080;
var mocksDirectory = 'path/to/folder with/mockFiles.js';
var whitelist = ['http://localhost:3000'];

MockingBirds(mocksDirectory, serverPort, whitelist);
```
