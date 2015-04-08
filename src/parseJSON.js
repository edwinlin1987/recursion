// this is what you would do if you were one to do things the easy way:
//   var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  var index;     
  var cap;     

  // Step through function
  var nextChar = function (item) {

    if (item && item != cap) { throw undefined }
    cap = text[index];
    index++;
    return cap;

  };

  // Skip whitespaces function
  var skip = function () {

    while (cap == ' ') { nextChar() }

  };

};