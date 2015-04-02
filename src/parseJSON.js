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

  //true 
  if (json[index] == 't') {
  	if (nextChar('r')) {
  		if (nextChar('u')) {
  			if (nextChar('e')) {
  				return true;
  			}
  		}
  	}
  	throw new Exception('flawed json, was expecting true');
  }

  //false
  if (json[index] == 'f') {
  	if (nextChar('a')) {
  		if (nextChar('l')) {
  			if (nextChar('s')) {
  				if (nextChar('e')) {
  					return false;
  				}
  			}
  		}
  	}
  	throw new Exception('flawed json, was expecting false');
  }


  //null
  if (json[index] == 'n') {
  	if (nextChar('u')) {
  		if (nextChar('l')) {
  			if (nextChar('l')) {
  				return null;
  			}
  		}
  	}
  	throw new Exception('flawed json, was expecting false');
  }

  // If parsing a string
  if (json[index] == '"') {
  	index++;
  	var phrase = '';
  	while (json[index] != '"'){
  		phrase += json[index];
  		index++;
  		if (json[index] == undefined) {
  			throw new Exception('flawed json, was expecting \'"\'');
  		}
  	}
  	index++;
  	return phrase;
  }


  // If parsing an array
  if (json[index] == '[') {
  	

  }
};
