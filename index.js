module.exports = function () {
	var cache = {};
	var args = Array.prototype.slice.call(arguments, 0, -1);
	var fn = Array.prototype.slice.call(arguments, -1)[0];

	var re = /(\w+)\s*=>\s*\1+\.(\w+)/g;
	var joinKey = re.exec(fn.toString())[2];
	
	[].concat.apply([], args).forEach(x => { var key = fn(x); var t = cache[key] || []; t.push(x); cache[key] = t; });

	var list = [];
	var keys = Object.keys(cache);
	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var t = {};
		t[joinKey] = key;
		for(var j = 0; j < cache[key].length; j++){
			var o = cache[key][j];
			var keys2 = Object.keys(o);
			for(var k = 0; k < keys2.length; k++){
				if(keys2[k] !== joinKey){
					t[keys2[k]] = o[keys2[k]];
				}
			}
		}
		
		list.push(t);
	}

	return list;
}
