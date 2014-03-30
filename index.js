var util = require('util');
var nodeCache = require('./modules/nodeCache');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('> ');

process.stdin.on('data', function (text) {

  // Cleans up input and splits into array
  var cmd = text.toString().trim().split(" ");

  // cmd[0] = command
  // cmd[1] = key
  // cmd[2] = value
  // cmd[3] = options

  switch (cmd[0]) {
    case "get":
      nodeCache.get(cmd[1]);
      break;
    case "set":
      nodeCache.set(cmd[1], cmd[2], cmd[3]);
      break;
    case "add":
      nodeCache.add(cmd[1], cmd[2], cmd[3]);
      break;
    case "increment":
      nodeCache.increment(cmd[1], cmd[2]);
      break;
    case "decrement":
      nodeCache.decrement(cmd[1], cmd[2]);
      break;
    case "delete":
      nodeCache.remove(cmd[1]);
      break;
    case "empty":
      nodeCache.empty();
      break;
    case "quit":
      done();
    default:
      console.log("ERROR");
  }

  if(text !== 'quit\n') {
    process.stdout.write('> ');
  }

});

function done() {
  console.log('Goodbye!');
  process.exit();
};