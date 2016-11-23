import Ember from 'ember';

export default Ember.Controller.extend({
     //Handles the creation of a user message through the form
     //(No need for a cancel creation tool)
     emailAddress:'',
     name:'',
     topic:'',
     content:'',

     //Ensures the email is of the valid for and all fields are non-empty
     emailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
     nameValid: Ember.computed.notEmpty('name'),
     topicValid: Ember.computed.notEmpty('topic') ,
     messageValid: Ember.computed.notEmpty('content'),

     //The submit button is only available if all input fields in the form are filled in
     isValid: Ember.computed.and('emailValid','nameValid','topicValid','messageValid'),
     isDisabled: Ember.computed.not('isValid'),

     actions: {
       sendMessage() {
            //Triggered when the user clicks submit button
         const msgEmail = this.get('emailAddress');
         const msgSender = this.get('name');
         const msgTopic = this.get('topic');
         const msgContent = this.get('content');
         const msgCreated = new Date(); //This is an auto created field

         //Local record is created but must still be saved to the store
         const newMessage = this.store.createRecord('messages',{
              email:msgEmail,name:msgSender,topic:msgTopic,content:msgContent,created:msgCreated
         });
         newMessage.save().then(()=>{ //Promise fulfills only if the message was successfully saved
              this.set('successMessage',"Thanks! We've got your message and will get back to you as soon as possible!");
              this.set('errorMessage',''); //Ensure the form is blank again
              this.set('emailAddress','');
              this.set('name','');
              this.set('topic','');
              this.set('content','');
         },()=>{ //Allows for connections errors to be notified to the user, could be more context sensitive in future revisions
              this.set('errorMessage',"Oops! Something went wrong, try again later!");
              this.set('successMessage','');
         });
       }
     }
});
