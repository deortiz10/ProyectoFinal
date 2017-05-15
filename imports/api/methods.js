import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import  Wunderground from 'wunderground-api';

//var Wunderground = require('wunderground-api');
//var client = new Wunderground('');

Meteor.methods({

    'Wunderground.condition'(query){
        var toret;
    console.log("buscando lugar..");
        let myWundergound= Wunderground('');
        return myWundergound.conditions(query);
    //  client.conditions(query,function(err, conditions) {
    //     if (err) throw err;
    //
    //     else console.log(conditions.results);
    //     toret=conditions.results;
    // });
    //  return toret;
    }

});
