import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
//APIs
import Accuweather from 'node-accuweather';
const Yelp = require('node-yelp-api-v3');
const geo = require('geosearch');
const getJSON = require('get-json');

Meteor.methods({

    'accuweather.conditions'(query){
        console.log("buscando lugar..");
        var code;
        let myAccuweather = Accuweather()('ZLoZnu6Ttog2rbMFgwy3FZcGAoxrmtFP');
        myAccuweather.queryLocations(query).then(function(result) {
          for(var i = 0; i<result.length; i++){
            if(result[i].Country.LocalizedName == 'United States'){
              code = result[i].Key;
              console.log(result[i]);
              break;
            }
          }
          myAccuweather.getCurrentConditions(code, {unit: "Celsius"}) // can be type string or Number
                    .then(function(ciudad) {
                    console.log(ciudad);
                    return ciudad;
          });
        });
    },

    'yelp.search'(){
      const yelp = new Yelp({
        consumer_key: "VMhGW_OQO-Vy3lGEUfVZzw",
        consumer_secret: "rBAC9VxGOb9AZnAzuOIbNrYOoiKl1ag05fyUr18Eeo63TeoRN5KtcN2epQhMufvD"
    });
      //  yelp.searchBusiness(params);
      yelp.searchBusiness({ location: '4.699924, -74.057029',term: 'ice cream' })
        .then((results) =>
          console.log("iceCream"+results));
          return results;
    },

    'geo.search'(city, callback){
      console.log("ENTRO AL METODO");


      let resultPromise = new Promise((resolve, reject) => {

        getJSON("http://getnearbycities.geobytes.com/GetNearbyCities?callback=?&radius=100&locationcode="+city,
        function(error, response){
          console.log("got response");
          if(error){
            console.log(error);
            reject(error);
          }
          let respuesta = [12];
          console.log(response);
          resp = response.substr(3);
          resp2 =resp.slice(0, -3);
          arreglos = resp.split(']');
          for ( var i = 0; i < arreglos.length ; i++ ){
              var temp = arreglos[i].split(',');
                  var ciudad = new Object();
                  if(temp[2] != undefined || temp[9] != undefined ||temp[9] != undefined ){
                    var n1 = temp[2].substr(1);
                    ciudad.name = n1.slice(0, -1);
                    var l1 = temp[9].substr(1);
                    ciudad.lat  = l1.slice(0, -1);
                    var lo1 = temp[11].substr(1);
                    ciudad.long = lo1.slice(0, -1);
                    if(i != 0){
                      respuesta[i]=ciudad;
                    }
                  }
          }
          console.log(respuesta);
          resolve(respuesta);
        })
      });
      return resultPromise;
    }

});
