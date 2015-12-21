'use strict'

// rewrite the .push() method which takes an argument and adds it to the end of the array before returning the array length
var pushMe = module.exports.pushMe = function(array, item) {
  array[array.length] = item;
  return array.length;
};

// rewrite the .pop() method which removes the last item in an array and returns that item
var popMe = module.exports.popMe = function(array) {
  var item = array[array.length - 1];
  array.length = array.length - 1;
  return item;
};

// rewrite the .shift() method which removes the first item from an array and reuturns that item
var shiftMe = module.exports.shiftMe = function(array) {
  var item = array[0];

  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.length = array.length - 1;
  return item;
};

// rewrite the .unshift() method which takes an argument and adds it to the beginning of the array before returning the array length
var unshiftMe = module.exports.unshiftMe = function(array, item) {
  for (var i = array.length - 1; i >= 0; i--) {
    array[i+1] = array[i];
  }
  array[0] = item;
  return array.length;
};

// implement a function called iAmUnique which takes an array and returns a copy of the array with all the duplicates removed
var iAmUnique = module.exports.iAmUnique = function(array) {
  var holdingPen = {}, thereCanBeOnlyOne = [];
  for(var i = 0, j = 0; i < array.length; i++) {
    if(holdingPen[array[i]] !== 1) {
      holdingPen[array[i]] = 1;
      thereCanBeOnlyOne[j] = array[i];
      j++;
    }
  }
  return thereCanBeOnlyOne;
};

// given an array of english words, figure out what the most common letter (anywhere in a word) is
var frequentMe = module.exports.frequentMe = function(array) {
  var chars = '';
  var currentChar = '';
  var count = [];
  var max = 0;
  var mostFrequent;
  for (var i = 0; i < array.length; i++) {
    chars = chars.concat(array[i]).toLowerCase();
  }
  for (var j = 0; j < chars.length; j++) {
    currentChar =  chars[j];
    if (count[currentChar]) {
      count[currentChar] += 1;
    } else {
      count[currentChar] = 1;
    }
    if(count[currentChar] > max) {
      max = count[currentChar];
      mostFrequent = currentChar;
    }
  }
  return mostFrequent;
};
