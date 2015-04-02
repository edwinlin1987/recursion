// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var index = 0;
  var capture;


  function nextChar(item) {
  	if (item != capture) {
  		throw new Exception(item + 'does not match' + capture);
  	}
  	capture = json[index];
  	index++;
  	return capture;
  }



  //Removes whitespace from either end of a segment of text
  var skip = function(text) {
  }
  


  //Function for running through parse tests

  var parse = function(text) {

  }



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
	}

	// Function for parsing numbers
  var num = function() {
  	var number = ''; 
  	if (capture == '-') { number += next() }
  	while ((/\d/).test(capture)) { number += next() }
  	if (capture == '.') { number += next() }
  	while ((/\d/).test(capture)) { number += next() }
  	return number = +number;
  }

  // Function for parsing strings - INCOMPLETE
  var phrase = function() {
  	var string = '';
  	if (capture == '"') {
  		next();
  		while (capture != '"') {
  			if (capture == '\\') {
  				next();
  				if (capture == '\\') { string += '\\'; }
  				if (capture == '"') { string += '\"'; }
  				if (capture == 'n') { string += '\n'; }
  				if (capture == 'r') { string += '\r'; }
  				if (capture == 'v') { string += '\v'; }
  				if (capture == 't') { string += '\t'; }
  				if (capture == 'b') { string += '\b'; }
  				if (capture == 'f') { string += '\f'; }
  			}
  			string += next();
  		}
  		next();
  		return string;
  	}
  	throw new Exception('Was expecting a string') 
  	
	}

  // Function for parsing arrays - INCOMPLETE
  var array = function(text) {
  	var list = [];
  	if
  	
  }

  var obj = function(text) {
  	
  }
  return parse(json);
}; 
