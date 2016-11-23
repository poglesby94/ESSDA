import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          //In the admin section, all news articles should be available.
          return this.store.findAll('news');
     },
     actions:{
          //Create, update, delete functionality is only available to users in the admin section.
          deleteArticle(article){
               let confirmation = confirm("Are you sure you wish to delete this message?");
               if(confirmation){
                    article.destroyRecord();
               }
          },
          //isEditing is a local state field available in the controller
          editArticle(article){
               article.set('isEditing',true);
          },
          cancelEdit(article){
               article.set('isEditing',false);
               article.rollbackAttributes(); //Ensure local changes are not pushed to the store
          },
          saveEdit(article){
               article.set('isEditing',false);
               article.save();
          }
     }
});
