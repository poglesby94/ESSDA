import Ember from 'ember';
import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

//Enables User Authentication using Firebase


export default ToriiFirebaseAdapter.extend({
  firebase: Ember.inject.service()
});
