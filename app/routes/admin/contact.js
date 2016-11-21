import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          return this.store.findAll('messages');
     },
     actions:{
          deleteMessage(message){
               let confirmation = confirm("Are you sure you wish to delete this message?");
               if(confirmation){
                    message.destroyRecord();
               }
          }
     }
});
