var base = require('./module-base.js');

exports.hello = function(name){
	return base.name + ' ' + name;
};