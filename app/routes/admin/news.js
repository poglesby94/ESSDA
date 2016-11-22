import Ember from 'ember';

export default Ember.Route.extend({
     model(){
          return this.store.findAll('news');
     },
     actions:{
          deleteArticle(article){
               let confirmation = confirm("Are you sure you wish to delete this message?");
               if(confirmation){
                    article.destroyRecord();
               }
          },
          editArticle(article){
               article.set('isEditing',true);
          },
          cancelEdit(article){
               article.set('isEditing',false);
               article.rollbackAttributes();
          },
          saveEdit(article){
               article.set('isEditing',false);
               article.save();
          }
     }
});
