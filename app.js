'use strict';

const eventEmitter = require('./event-emitter.js');
const eventNames = require('./event-names.js');
let file = process.argv.slice(2).shift();

require('./actions/read.js');
require('./actions/uppercase.js');
require('./actions/write.js');
require('./actions/error.js');
require('./actions/logger.js');

//trigger read file module
eventEmitter.emit(eventNames.READ, file);
