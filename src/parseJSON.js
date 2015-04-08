// this is what you would do if you were one to do things the easy way:
//   var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var index;     
  var cap;     

  // Step through function
  var nextChar = function (item) {

    if (item && item !== cap) { throw undefined }
    cap = text[index];
    index++;
    return cap;

  };

  // Skip whitespaces function
  var skip = function () {

    while (cap == ' ') { nextChar() }

  };

  //Parse a true, false, or null value
  var boolNull = function () {

    if (cap == 't') { 
      nextChar('t');
      nextChar('r');
      nextChar('u');
      nextChar('e');
      return true; 
    } else if (cap == 'f') { 
      nextChar('f');
      nextChar('a');
      nextChar('l');
      nextChar('s');
      nextChar('e');
      return false; 
    } else if (cap == 'n') { 
      nextChar('n');
      nextChar('u');
      nextChar('l');
      nextChar('l');
      return null; 
    }

    throw undefined;

  };

  //Parse a number
  var number = function () {

    var number = '';

    if (cap == '-') {
      number += '-';
      nextChar();
    }
    while (/\d/.test(cap)) {
      number += cap;
      nextChar();
    }
    if (cap == '.') {
      number += '.';
      nextChar();
      while (/\d/.test(cap)) {
        number += cap;
        nextChar();
      }
    }
    number = +number;
    if (isNaN(number)) { throw undefined } 

    return number;
    
  };

  //Parse a string
  var string = function () {

    var string = '';

    if (cap == '"') {
      while (nextChar()) {
        if (cap == '"') {
          nextChar();
          return string;
        } 
        if (cap == '\\') {
          nextChar();
          if (cap == '\\') { string += '\\' }
          if (cap == '"') { string += '\"' }
          if (cap == 'n') { string += '\n' }
          if (cap == 'r') { string += '\r' }
          if (cap == 'v') { string += '\v' }
          if (cap == 't') { string += '\t' }
          if (cap == 'b') { string += '\b' }
          if (cap == 'f') { string += '\f' }
        } else {
          string += cap;
        }
      }
    }

    throw undefined;

  };

  //Parse an array value
  var array = function () {

    var array = [];

    if (cap == '[') {
      nextChar();
      skip();
      if (cap == ']') {
        nextChar();
        return [];
      }
      while (cap) {
        array.push(parse()); // parse function not made yet
        skip();
        if (cap == ']') {
          nextChar();
          return array;
        }
        nextChar(',');
        skip();
      }
    }

    throw undefined;

  };

  //Parse an object
  var object = function () {

    var key;
    var object = {};

    if (cap == '{') {
      nextChar();
      skip();
      if (cap == '}') {
        nextChar();
        return {};
      }
      while (cap) {
        key = string();
        skip();
        nextChar(':');
        object[key] = parse(); //parse function not made yet
        skip();
        if (cap == '}') {
          nextChar();
          return object;
        }
        nextChar(',');
        skip();
      }
    }

    throw undefined;

  };

  
};