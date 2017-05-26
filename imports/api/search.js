import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Busquedas =new Mongo.Collection('busquedas');
Meteor.methods({

  'Busquedas.insert'(ciudad, categoria, lugar )
  {
    Busquedas.insert({
      ciudad,
      categoria,
      lugar,
      owner: Meteor.userId(),
      username: Meteor.user().username
    })
  }
})
