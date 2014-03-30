var validation = require('./validation');

// Max Cache Size 16MB in Bytes
var MAX_CACHE = 16777216;

// DB
var cacheDB = {};

function checkCacheSize(data, callback) {
	var cacheSize = Buffer.byteLength(cacheDB.toString(), 'utf8');
	var newStringSize = Buffer.byteLength(data, 'utf8');

	if(cacheSize + newStringSize > MAX_CACHE) {
		cacheDB = {}; // resets cache

		console.log("ERROR - MAX CACHE");
		console.log("CACHE IS CLEARED");

		return;
	}else{
		callback();
	}
};

var nodeCache = {
	get: function(key) {
		if(typeof cacheDB[key] !== 'undefined') {
			console.log(cacheDB[key]);
		}
	},

	set: function(key, data, options) {
		if(data === 'null') {
			this.remove(key);
		}else{
			var data = data || '';

			checkCacheSize(data, function() {
				if(validation(key, data) && cacheDB[key]) {
					cacheDB[key] = data;
					console.log("STORED");
				}else{
					console.log("ERROR");
				}
			});
		}
	},

	add: function(key, data, options) {
		var data = data || '';

		checkCacheSize(data, function() {
			if(validation(key, data) && !cacheDB[key]) {
				if(!isNaN(cacheDB[key])) {
					cacheDB[key] = parseInt(data);
				}else{
					cacheDB[key] = data;
				}

				console.log("STORED");
			}else{
				console.log("ERROR");
			}
		});
	},

	increment: function(key, amount) {
		checkCacheSize(cacheDB[key], function() {
			var incr = amount || 1;

			if(isNaN(cacheDB[key])) {
				console.log("ERROR");
			}else{
				cacheDB[key] = parseInt(cacheDB[key]) + parseInt(incr);
				console.log(cacheDB[key]);
			}
		});
	},

	decrement: function(key, amount) {
		checkCacheSize(cacheDB[key], function() {
			var decr = amount || 1;

			if(isNaN(cacheDB[key])) {
				console.log("ERROR");
			}else{
				cacheDB[key] = parseInt(cacheDB[key]) - parseInt(decr);
				console.log(cacheDB[key]);
			}
		});
	},

	remove: function(key) {
		delete cacheDB[key];
		console.log("DELETED");
	},

	empty: function() {
		cacheDB = {};
		console.log("Light is green the cache is clean.");
	}
};

module.exports = nodeCache;