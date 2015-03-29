// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var i, string;
  // your code goes here

  if ((obj === undefined) || (typeof(obj) === 'function')) { return }

  if (obj === null) { return 'null'}

  if (typeof(obj) === 'string' ) { return ('\"' + obj + '\"')}

  if (Array.isArray(obj) === true) {
  	string = '[';
  	for (i = 0; i < obj.length; i++) {
  		string += (stringifyJSON(obj[i]));
  		if ( i !== (obj.length - 1)) {
  			string += ',';
  		}
  	}
  	string += ']';
  	return string;
  }

  if (typeof(obj) === 'object') {
  	string = '{';
  	for (i in obj) {
  		if ((typeof(stringifyJSON(i)) === 'string') && (typeof(stringifyJSON(obj[i])) === 'string')) {
  			string += (stringifyJSON(i) + ':' + stringifyJSON(obj[i]) + ',');
  		}
  	}
  	if (string[string.length-1] === ',') {
  		string = string.slice(0, string.length-1);
  	}
  	string += '}';
  	return string;
  }


  return obj.toString();
};
