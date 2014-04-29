'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  name: String,
  number: Number,
  order: Number,
  putt : Boolean,
});

mongoose.model('Thing', ThingSchema);
