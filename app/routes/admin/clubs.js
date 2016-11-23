import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          //All clubs in the list are available in this list
          return this.store.findAll('clubs');
     },

     actions:{
          //Implement create, update and delete functionality from within the admin area
          deleteClub(club){
               let confirmation = confirm("Are you sure you wish to delete this club?");
               if(confirmation){
                    club.destroyRecord();
               }
          },
          //isEditing is a local state field for tracking the current state of the admin section
          editClub(club){
               club.set('isEditing',true);
          },
          cancelEdit(club){
               club.set('isEditing',false);
               club.rollbackAttributes(); //ensure local changes are not pushed to the stack
          },
          saveEdit(club){
               club.set('isEditing',false);
               club.save();
          }
     }
});
