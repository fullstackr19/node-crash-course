const EventEmitter = require('events');

//create emitter class
class MyEmitter extends EventEmitter { }

//Init object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', () => console.log('event fired!'));

//Init event
myEmitter.emit('event');
