import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          return this.store.findAll('clubs');
     },

     actions:{
          deleteClub(club){
               let confirmation = confirm("Are you sure you wish to delete this club?");
               if(confirmation){
                    club.destroyRecord();
               }
          },
          editClub(club){
               club.set('isEditing',true);
          },
          cancelEdit(club){
               club.set('isEditing',false);
               club.rollbackAttributes();
          },
          saveEdit(club){
               club.set('isEditing',false);
               club.save();
          }
     }
});
