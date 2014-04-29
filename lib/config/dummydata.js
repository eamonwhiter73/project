'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  fs = require('fs');

/**
 * Populate database with sample application data
 */

var file = fs.readFileSync("/home/yz/webdev/generator-angular-fullstack/project/dic.txt", 'utf8');
var selectwords = file.toString();

var shuffle = function(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

var selectwordsarr = selectwords.split('\n');

shuffle(selectwordsarr);

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};

//Clear old things, then add things in
Thing.find({}).remove(function() {
  for(var i=0; i<20; i++) {
    if(selectwordsarr[i].indexOf('/') !== -1) {
      selectwordsarr[i] = selectwordsarr[i].replace(selectwordsarr[i].substring(selectwordsarr[i].indexOf("/"), selectwordsarr[i].length), "");
    }
    if(i < 5) {
      Thing.create({
        name : selectwordsarr[i],
        order : null,
        number : 0,
        putt: false
      });
    }
    else if(i < 10 && i > 4) {
      Thing.create({
        name : selectwordsarr[i],
        order : null,
        number : 1,
        putt: false
      });
    }
    else if(i < 15 && i > 9) {
      Thing.create({
        name : selectwordsarr[i],
        order : null,
        number : 2,
        putt: false
      });
    }
    else {
      Thing.create({
        name : selectwordsarr[i],
        order : null,
        number : 3,
        putt: false
      });
    }
  }
});

// Clear old users, then add a default user
/*User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});*/
