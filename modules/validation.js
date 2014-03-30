var KEY_LENGTH = 64;
var VALUE_TYPE = 'string';
var VALUE_SIZE = 255;

var validation = function(key, value) {
	if(key.length > KEY_LENGTH) {
		return false;
	}

	// Shouldnt error since values are converted to string
	if(typeof value !== 'string') {
		return false;
	}

	if(value.length > VALUE_SIZE) {
		return false;
	}

	if(value === null) {
		return false;
	}

	return true;
};

module.exports = validation;