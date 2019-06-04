const eventEmitter = require('../event-emitter.js');
const eventNames = require('../event-names.js');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

//wrtie uppercase version of text to file
const handleWrite = (file, upperCaseBuffer) => {
  writeFile(file, upperCaseBuffer)
    .then(() => console.log(`${file} saved`))
    .catch(err => eventEmitter.emit(eventNames.ERROR, err));
};

eventEmitter.on(eventNames.WRITE, handleWrite);
