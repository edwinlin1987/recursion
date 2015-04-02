// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var index = 0;
  var capture;


  function nextChar(item) {
  	index++;
  	if (item == undefined) {
  		return json[index];
  	}
  	return (json[index] == item);
  }



  //skipping whitespaces
  if (json[index] == ' ') {
  	index++;
  }



  // Function for parsing booleans and null values
  var boolNull = function(text) {
  	if (text == 'true') { return true } 
  	if (text == 'false') { return false }
    if (text == 'null') { return null }
	  throw new Exception('flawed json, was expecting true, false, or null');
	}

	// Function for parsing numbers
  var num = function(text) {
  	var count;
  	if (text[0] == '0') {
  		if (text[1] == undefined) { return 0 } 
  		if (text[1] == '.') {
  			count = 2;
  			while ((/[0-9]/).test(text[count])) { count++; }
  			if (count == text.length) { return parseFloat(text) }
  		}
  		throw new Exception('flawed json, was expecting a valid number');
  	}
  	if ((/[1-9]/).test(text[0])) {
  		count = 1;
  		while ((/[0-9]/).test(text[count])) { count++ }
  		if (count == text.length) { return parseInt(text) }
  		if (text[count] == '.') {
  			count++;
  			while ((/[0-9]/).test(text[count])) { count++ }
  			if (count == text.length) { return parseFloat(text) }
  		}
  	}
  	throw new Exception('flawed json, was expecting a valid number');
  }

  // Function for parsing strings - INCOMPLETE
  var phrase = function(text) {
  	var count = 1;
  	var word = '';
  	while (text[count] != '"'){
  		if (text[count] == '\\')
  		word += text[count];
  		count++;
  		if (text[count] == undefined) {
  			throw new Exception('flawed json, was expecting \'"\'');
  		}
  	}
  	return word;
	}


  // If parsing an array
  if (json[index] == '[') {
  	if (json[index+1] == ']') {
  		return [];
  	} else if (json)
  	

  }
};
