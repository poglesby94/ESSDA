import Ember from 'ember';

export default Ember.Controller.extend({
     name:'',
     website:'',
     logo:'',
     keyword:'',

     nameValid: Ember.computed.notEmpty('name'),
     websiteValid: Ember.computed.notEmpty('website'),
     logoValid: Ember.computed.notEmpty('logo'),
     keywordValid: Ember.computed.notEmpty('keyword'),
     isValid: Ember.computed.and('nameValid','websiteValid','logoValid','keywordValid'),
     isDisabled: Ember.computed.not('isValid'),

     actions:{
          createClub() {
              const clubName = this.get('name');
              const clubWebsite = this.get('website');
              const clubLogo = this.get('logo');
              const clubKeyword = this.get('keyword');
              const newClub = this.store.createRecord('clubs',{
                   name:clubName, website:clubWebsite, logo:clubLogo, keyword:clubKeyword
              });
              newClub.save().then(()=>{
                   this.set('name','');
                   this.set('website','');
                   this.set('logo','');
                   this.set('keyword','');
                   this.transitionToRoute('admin.clubs.index');
              });
          },
          cancelCreate(){
               this.set('name','');
               this.set('website','');
               this.set('logo','');
               this.set('keyword','');
               this.transitionToRoute('admin.clubs.index');
          }
     }

});
