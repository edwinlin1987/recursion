// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var list = [];

  var check = function(element, name) {
  	var i;

  	if (element.classList === undefined) { return false }

  	for (i = 0; i < element.classList.length; i++) {
  		if (element.classList[i] === name) { return true }
  	}
  	return false;
  };

  var checkChild = function(element, name) {
  	var j;
  	if (check(element, name)) { list.push(element) }

  	if (element.childNodes === []) { return }

  	for (j = 0; j < element.childNodes.length; j++) {
  		checkChild(element.childNodes[j], name);
  	}
  	return;
  };

  checkChild(document.body, className);

  return list;
};
