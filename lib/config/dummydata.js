'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing'),
  fs = require('fs');

/**
 * Populate database with sample application data
 */
var file = fs.readFileSync("/home/yz/webdev/angfull/project/freq.txt", 'utf8');
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

var splitup = [];
var rfinished = [];

var selectwordsarr = selectwords.split("\n");

for(var y = 0; y < selectwordsarr.length; y++) {
  splitup[y] = selectwordsarr[y].split("\\t+|\\s+");
}

for(var x = 1; x < splitup.length; x++) {
  var splituptemp = splitup[x].toString().split('\t');
  var finished = splituptemp.splice(3, 1).toString() + "," + splituptemp.splice(1, 1).toString();
  rfinished[x-1] = finished;
}

var nextinline = shuffle(rfinished);

var allcount = 0;

//Clear old things, then add things in
Thing.find({}).remove(function() {
  for(var z = 0; z < nextinline.length; z++) {
    var splituptemp2 = nextinline[z].toString().split(',');
    var nameof = splituptemp2.splice(1,1).toString();
    var num = splituptemp2.splice(0,1).toString();

    console.log(nameof);
    console.log(num);
    
    if(allcount < 5) {
      Thing.create({
        name : nameof,
        freq : num,
        number : 0,
        putt: false
      });
      allcount++;
    }
    else if (allcount < 10 && allcount >= 5){
      Thing.create({
        name : nameof,
        freq : num,
        number : 1,
        putt: false
      });
      allcount++;
    }
    else if (allcount < 15 && allcount >= 10){
      Thing.create({
        name : nameof,
        freq : num,
        number : 2,
        putt: false
      });
      allcount++;
    }
    else if (allcount < 20 && allcount >= 15){
      Thing.create({
        name : nameof,
        freq : num,
        number : 3,
        putt: false
      });
      allcount++;
    }
    else {
      break;
    }
  }
  /*String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
  };*/
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

//Clear old things, then add things in
/*Thing.find({}).remove(function() {
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
});*/

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
