import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello World' + name);

}

function goodbyeHandler(name) {
    console.log('GoodBye World' + name);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

//Emit events 
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John');

// Error Handling
myEmitter.on('error', (err) => {
    console.log('An error Occured:', err );
});

// simulate error
myEmitter.emit('error', new Error('Something went wrong '));    