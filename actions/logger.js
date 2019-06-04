'use strict';

const eventEmitter = require('../event-emitter.js');
const eventNames = require('../event-names.js');

const log = (event, payload) => {
  const currentTime = new Date();
  console.log({ event, currentTime, payload });
};

eventEmitter.on(eventNames.READ, payload => log(eventNames.READ, payload));
eventEmitter.on(eventNames.UPPERCASE, payload =>
  log(eventNames.UPPERCASE, payload)
);
eventEmitter.on(eventNames.WRITE, payload => log(eventNames.WRITE, payload));
