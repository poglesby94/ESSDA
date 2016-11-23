import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          //All user messages submitted through contact page will be available
          //In future, if messages are targeted then this will be filtered to the specific user
          return this.store.findAll('messages');
     },
     actions:{
          //Messages should only be deleted, not edited from within the backend
          deleteMessage(message){
               let confirmation = confirm("Are you sure you wish to delete this message?");
               if(confirmation){
                    message.destroyRecord();
               }
          }
     }
});
