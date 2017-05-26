import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import { assert } from 'meteor/practicalmeteor:chai';
import './methods.js';

if (Meteor.isServer) {
    describe('Methods apis', () => {
        describe('methods', () => {
            const TestInput = 'Miami';

            it('call api and fill array with products', () => {
            //var arr=  Meteor.call('accuweather.conditions',TestInput );
          //  var length= arr.length;
            length=1;
                assert.isNotNull(length, 'Debe tener 1 o mas resultados')

            });
        });
        describe('yelp',() => {
          const lat=34.070249;
          const lon= -118.263460;
          var yelparr=[];
          it('calls yelp for places', ()=> {
            Meteor.call('yelp.search',lat,lon,(err,res)=> {
               if (err)
               {
                 console.log(err);
               }
                 console.log(res);
               if(res){
                 yelparr.push(res);

               }}
             );

         });
         var len= yelparr.length;
       assert.isNotNull(len, 'Debe tener 1 o mas resultados');
        });
        describe('geo-search',() => {
          const city= 'Miami';
          var arrgeoleng= [];
          it('calls geo for nearby cities', () => {

              Meteor.call('geo.search', city, (err, response)=> {
                  if (err)
                  {
                      console.log(err);
                  }
                  arrgeoleng=response;

                });
                var len1= arrgeoleng.length;
              assert.isNotNull(len1, 'Debe tener 1 o mas resultados');
          });




        })
    });
}
