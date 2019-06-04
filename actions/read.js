'use strict';
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

const eventEmitter = require('../event-emitter.js');
const eventNames = require('../event-names.js');

//reads and promisifies file data and emits uppercase module
const handleRead = file => {
  readFile(file)
    .then(data => eventEmitter.emit(eventNames.UPPERCASE, file, data))
    .catch(err => eventEmitter.emit(eventNames.ERROR, err));
};

eventEmitter.on(eventNames.READ, handleRead);
