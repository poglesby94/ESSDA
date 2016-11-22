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
          }
     }
});
