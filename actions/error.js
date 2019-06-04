'use strict';

const eventEmitter = require('../event-emitter');
const eventNames = require('../event-names');

const handleError = error => {
  console.log('An error has occured', error);
};

eventEmitter.on(eventNames.ERROR, handleError);
