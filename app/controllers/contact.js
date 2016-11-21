import Ember from 'ember';

export default Ember.Controller.extend({
     emailAddress:'',
     name:'',
     topic:'',
     content:'',

     emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
     nameValid: Ember.computed.notEmpty('name'),
     topicValid: Ember.computed.notEmpty('topic') ,
     messageValid: Ember.computed.notEmpty('content'),
     isValid: Ember.computed.and('emailValid','nameValid','topicValid','messageValid'),
     isDisabled: Ember.computed.not('isValid'),

     actions: {
       sendMessage() {
         const msgEmail = this.get('emailAddress');
         const msgSender = this.get('name');
         const msgTopic = this.get('topic');
         const msgContent = this.get('content');
         const msgCreated = new Date();

         const newMessage = this.store.createRecord('messages',{
              email:msgEmail,name:msgSender,topic:msgTopic,content:msgContent,created:msgCreated
         });
         newMessage.save().then(()=>{
              this.set('successMessage',"Thanks! We've got your message and will get back to you as soon as possible!");
              this.set('errorMessage','');
              this.set('emailAddress','');
              this.set('name','');
              this.set('topic','');
              this.set('content','');
         },()=>{
              this.set('errorMessage',"Oops! Something went wrong, try again later!");
              this.set('successMessage','');
         });
       }
     }
});
