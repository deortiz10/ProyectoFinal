import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Busquedas } from './search.js';
import { assert } from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
    describe('Busquedas', () => {
        describe('methods', () => {
            const userId = Random.id();
            let busqId;
            beforeEach(() => {
                Busquedas.remove({});
                busqId= Busquedas.insert({
                    ciudad: 'Miami',
                    categoria: 'restaurant',
                    lugar: 'baskin robbins',

                    owner: userId,           // _id of logged in user
                    username: 'tmeasday',  // username of logged in user
                })
            });

            it('add busqueda to user', () => {

                assert.equal(Busquedas.find().count(), 1);
            });
        });
    });
}
