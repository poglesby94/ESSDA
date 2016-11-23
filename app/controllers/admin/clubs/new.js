import Ember from 'ember';

export default Ember.Controller.extend({
     //User enters the details of a club and is submitted  through a user form
     name:'',
     website:'',
     logo:'',

     //We ensure all fields are non-empty
     //website and logo should both be websites, so could possibly be validated by regular expressions instead of simply non-emptiness
     nameValid: Ember.computed.notEmpty('name'),
     websiteValid: Ember.computed.notEmpty('website'),
     logoValid: Ember.computed.notEmpty('logo'),

     //The submit button is only available once all fields are validated
     isValid: Ember.computed.and('nameValid','websiteValid','logoValid'),
     isDisabled: Ember.computed.not('isValid'),

     actions:{
          createClub() {
               //Triggered when the user clicks the create button
              const clubName = this.get('name');
              const clubWebsite = this.get('website');
              const clubLogo = this.get('logo');

              //Create the record locally before pushing to the backend
              const newClub = this.store.createRecord('clubs',{
                   name:clubName, website:clubWebsite, logo:clubLogo
              });

              newClub.save().then(()=>{ //If the promise fulfills(record has been saved), we transition to the list of all clubs and clean the form for next time
                   this.set('name','');
                   this.set('website','');
                   this.set('logo','');
                   this.transitionToRoute('admin.clubs.index');
              }); //As with news article creation, this could use with user feedback if the promise fails(record not saved)
         },       //Currently just stays on the screen instead of being listed as an article which is not the clearest

          cancelCreate(){ //If the user abandons creation of a club, we need to hide the form
               //Clean the form incase the user renavigates to this route without retriggering the route
               this.set('name','');
               this.set('website','');
               this.set('logo','');
               this.transitionToRoute('admin.clubs.index');
          }
     }

});
