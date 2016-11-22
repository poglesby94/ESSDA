import Ember from 'ember';

export default Ember.Controller.extend({
     name:'',
     website:'',
     logo:'',

     nameValid: Ember.computed.notEmpty('name'),
     websiteValid: Ember.computed.notEmpty('website'),
     logoValid: Ember.computed.notEmpty('logo'),
     isValid: Ember.computed.and('nameValid','websiteValid','logoValid'),
     isDisabled: Ember.computed.not('isValid'),

     actions:{
          createClub() {
              const clubName = this.get('name');
              const clubWebsite = this.get('website');
              const clubLogo = this.get('logo');
              const newClub = this.store.createRecord('clubs',{
                   name:clubName, website:clubWebsite, logo:clubLogo
              });
              newClub.save().then(()=>{
                   this.set('name','');
                   this.set('website','');
                   this.set('logo','');
                   this.transitionToRoute('admin.clubs.index');
              });
          },
          cancelCreate(){
               this.set('name','');
               this.set('website','');
               this.set('logo','');
               this.transitionToRoute('admin.clubs.index');
          }
     }

});
