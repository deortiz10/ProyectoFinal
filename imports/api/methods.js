import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import  Wunderground from 'wunderground-api';

//var Wunderground = require('wunderground-api');
var client = new Wunderground('your api key here');


client.conditions(opts, function(err, data) {
    if (err) throw err;
    else console.log(data);
});