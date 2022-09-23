// we can create events, fire events, listen for events

// eg.1 -> Registering for the event to be fired only one time usince once.
// eg.2 -> Create an event emitter instance and register a couple of callbacks
// eg.3 -> Registering for the event with callback parameters


const EventEmitter = require('events');

//event is an object or instance of EventEmitter class
const event  = new EventEmitter();

//listening for events
// event.on('sayMyName', () => {
//     console.log(`My name is newton School`);
// });

// event.on('sayMyName', () => {
//     console.log(`My name is newton School 2`);
// });


// event.on('sayMyName', () => {
//     console.log(`My name is newton School 3`);
// });

// // call or fire the event
// event.emit('sayMyName');

// Event emitter objects emit named events that cause previously registered listeners to be called. 
// So an emitter object basically has 2 features:
//  1. Emitting named events  (line 28)
//  2. Registering listener functions (line 14, 18, 23)



event.on('checkPage', (status, message) => {
    console.log(`Status code is ${status} and message is ${message}`);
});


event.emit('checkPage', 200, 'ok');