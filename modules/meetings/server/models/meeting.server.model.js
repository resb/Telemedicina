'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Meeting Schema
 */
var MeetingSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
   topic: {
    type: String,
    default: '',
    trim: true
  },
    idMeeting: {
    type: String,
    default: '',
    trim: true
  },
    paciente: {
      type: String,
      default: '',
      trim: true
    },
    dni: {
      type: String,
      default: '',
      trim: true
    }
});

mongoose.model('Meeting', MeetingSchema);
