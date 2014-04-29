'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  name: String,
  freq: Number,
  number: Number,
  putt : Boolean
});

mongoose.model('Thing', ThingSchema);
