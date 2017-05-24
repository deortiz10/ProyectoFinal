import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
//import  Wunderground from 'wunderground-api';
import Accuweather from 'node-accuweather';
const Yelp = require('node-yelp-api-v3');

//var Wunderground = require('wunderground-api');
//var client = new Wunderground('');

Meteor.methods({

    'accuweather.conditions'(query){
        console.log("buscando lugar..");
        var code;
        let myAccuweather = Accuweather()('');
        myAccuweather.queryLocations(query).then(function(result) {
          for(var i = 0; i<result.length; i++){
            if(result[i].Country.LocalizedName == 'Colombia'){
              code = result[i].Key;
              myAccuweather.getCurrentConditions(code, {unit: "Celsius"}) // can be type string or Number
                        .then(function(ciudad) {
                            console.log(ciudad);
                            return ciudad;
              });
            }
          }
        });

    },
    'yelp.search'(){

      const yelp = new Yelp({
  consumer_key: "",
  consumer_secret: ""
});



    //  yelp.searchBusiness(params);
 yelp.searchBusiness({ location: '4.699924, -74.057029',term: 'ice cream' }).then((results) => console.log(results));


    }

});
