// Modules
const { john, peter } = require('./names');
const sayHi = require('./utils');
const data = require('./alternative-flavor');
require('./mind-grenade');

sayHi('susan');
sayHi(john);
sayHi(peter);
