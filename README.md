# mocking-birds [![Build Status](https://travis-ci.org/goncalvesjoao/mocking-birds.svg)](https://travis-ci.org/goncalvesjoao/mocking-birds)
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

# What is a mock file?
It is a node file that exports a function that expects an expressjs instance to be passed down.

This function can now add endpoints and mock logic to the server.

For instance:
```javascript
function Staff(app) {

  var members = [
    { id: 1, first_name: 'John' },
    { id: 2, first_name: 'Sigurson' },
    { id: 3, first_name: 'Doe' },
    { id: 4, first_name: 'Sara' },
    { id: 5, first_name: 'Richard' },
    { id: 6, first_name: 'Amanda' }
  ];

  app.get('/v0/members', function(request, response) {
    // half a second delay response
    setTimeout(function() {
      response.json(members);
    }, 500);
  });

}

module.exports = Staff;
```

Now if you have several mock files in a directory you can load them up all at once in a single express server.

# Who uses this?
- [react-to-commonjs](https://github.com/goncalvesjoao/react-to-commonJS)
