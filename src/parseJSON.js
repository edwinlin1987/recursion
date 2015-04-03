// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var index = 0;
  var capture;


  var nextChar = function(item) {

  	if (item != capture) { throw new Exception(item + 'does not match' + capture); }
  	capture = json[index];
  	index++;
  	return capture;

  };

  var Exception = function(m) {
  	this.m = m;
  }




  //Skips whitespace
  var skip = function() {

  	while (capture == ' ') { nextChar(); }

  };
  


  //Function for running through parse tests

  var parse = function() {

  	skip();
  	if (capture == '{') { return object(); }
  	if (capture == '[') { return array(); }
  	if (capture == '"') { return string(); }
  	if (/\d[-]/.test(capture)) { return number(); }
  	return phrase();

  };



  // Function for parsing booleans and null values
  var boolNull = function() {

  	if (capture == 't') { 
  		nextChar('t');
  		nextChar('r');
  		nextChar('u');
  		nextChar('e');
  		return true; 
  	} else if (capture == 'f') { 
  		nextChar('f');
  		nextChar('a');
  		nextChar('l');
  		nextChar('s');
  		nextChar('e');
  		return false; 
  	} else if (capture == 'n') { 
  		nextChar('n');
  		nextChar('u');
  		nextChar('l');
  		nextChar('l');
  		return null; 
  	}
	  throw new Exception('Was expecting true, false, or null');
	};

	// Function for parsing numbers
  var num = function() {

  	var number = '';

  	if (capture == '-') { number += nextChar() }
  	while ((/\d/).test(capture)) { number += nextChar() }
  	if (capture == '.') { number += nextChar() }
  	while ((/\d/).test(capture)) { number += nextChar() }
  	return number = +number;
  };

  // Function for parsing strings - INCOMPLETE
  var phrase = function() {

  	var string = '';

		nextChar();
		while (capture != '"') {
			if (capture == '\\') {
				nextChar();
				if (capture == '\\') { string += '\\'; }
				if (capture == '"') { string += '\"'; }
				if (capture == 'n') { string += '\n'; }
				if (capture == 'r') { string += '\r'; }
				if (capture == 'v') { string += '\v'; }
				if (capture == 't') { string += '\t'; }
				if (capture == 'b') { string += '\b'; }
				if (capture == 'f') { string += '\f'; }
			}
			string += nextChar();
		}
		nextChar();
		return string;
  	 
  	
	};

  // Function for parsing arrays
  var array = function() {

  	var list = [];
		nextChar();
		skip();
		if (capture == ']') {
			nextChar();
			return [];
		}
		while (capture != ']') {
			list.push(parse());
			skip();
			nextChar();
			if (capture == ',') {
				nextChar();
				white();
			}
			if (capture == undefined) {
				throw new Exception('Expected an array');
			}
		}
		return list;
  };
 
  var obj = function(text) {

  	var key;
  	var object = {};

  	nextChar();
  	skip();
  	if (capture == '}') {
  		return {};
  	}
  	while (capture != '}') {
  		key = parse();
  		if (typeof(key) != 'string') {
  			throw new Exception('Expected a string')
  		}
  		skip();
  		nextChar(':');
  		object[key] = parse();
  		skip();
  		if (capture == ',') {
  			nextChar();
  			white();
  		}
  	}
  	return object;
  	
  };
  return parse();
}; 
