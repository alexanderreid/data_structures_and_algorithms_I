'use strict'

var expect = require('chai').expect;
var arrayPrototypes = require(__dirname + '/../arrayPrototypes.js');

describe('the pushMe method', function() {
  it('should add an argument to the end of the array before returning the array length', function() {
    expect(arrayPrototypes.pushMe(['goat', 'curry', 'monkey'], 7)).to.eql(4);
  });
});

describe('the popMe method', function() {
  it('should remove the last item in an array and returns that item', function() {
    expect(arrayPrototypes.popMe(['goat', 'curry', 'monkey'])).to.eql('monkey');
  });
});

describe('the shiftMe method', function() {
  it('should remove remove the first item from an array and reuturn that item', function() {
    expect(arrayPrototypes.shiftMe(['goat', 'curry', 'monkey'])).to.eql('goat');
  });
});


describe('the unshiftMe method', function() {
  it('should take an argument and add it to the beginning of the array before returning the array length', function() {
    expect(arrayPrototypes.unshiftMe(['goat', 'curry', 'monkey'], 'hoop')).to.eql(4);
  });
});

describe('the iAmUnique method', function() {
  it('should take an array and returns a copy of the array with all the duplicates removed', function() {
    expect(arrayPrototypes.iAmUnique(['goat', 'goat', 'curry', 'monkey', 'monkey'])).to.eql(['goat', 'curry', 'monkey']);
  });
});

describe('the frequentMe method', function() {
  it('should take an array of english words and figure out what the most common letter is', function() {
    expect(arrayPrototypes.frequentMe(['goat', 'curry', 'monkey'])).to.eql('r');
  });
});
