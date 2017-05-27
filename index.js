module.export = function () {
	var cache = {};
	var args = Array.prototype.slice.call(arguments, 0, -1);
	var fn = Array.prototype.slice.call(arguments, -1)[0];

	[].concat.apply([], args).forEach(x => { var key = fn(x); var t = cache[key] || []; t.push(x); cache[key] = t; });

	if (cache.hasOwnProperty(true))
		return cache[true];

	var keys = Object.keys(cache);
	var maxKey = null;
	var max = 0;
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		if (cache[key].length > max) {
			max = cache[key].length;
			maxKey = key;
		}
	}

	return cache[maxKey];
}
