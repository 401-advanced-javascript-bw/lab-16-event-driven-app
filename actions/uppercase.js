const eventEmitter = require('../event-emitter.js');
const eventNames = require('../event-names.js');

//turn buffer into string and transform to uppercase
const handleUppercase = (file, buffer) => {
  const upperCase = buffer.toString().toUpperCase();
  eventEmitter.emit(eventNames.WRITE, file, upperCase);
};

eventEmitter.on(eventNames.UPPERCASE, handleUppercase);
