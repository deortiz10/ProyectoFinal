import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const Busquedas =new Mongo.Collection('busquedas');
Meteor.methods({

  'Busquedas.insert'(ciudad, categoria, lugar )
  {

    Busquedas.insert({
      ciudad: ciudad,
      categoria: categoria,
      lugar: lugar,
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
    console.log("Inserto");
  }
})
