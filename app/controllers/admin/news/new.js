import Ember from 'ember';

export default Ember.Controller.extend({
     title:'',
     content:'',

     titleValid: Ember.computed.notEmpty('title'),
     contentValid: Ember.computed.notEmpty('content'),
     isValid: Ember.computed.and('titleValid','contentValid'),
     isDisabled: Ember.computed.not('isValid'),

     actions:{
          postArticle() {
            const artContent = this.get('content');
            const artTitle = this.get('title');
            const artCreated = new Date();

            const newArticle = this.store.createRecord('news',{
                 content:artContent, title:artTitle, created: artCreated
            });

            newArticle.save().then(()=>{
                this.set('title','');
                this.set('content','');
                this.transitionToRoute('admin.news.index');
            });
          },
          cancelCreate(){
               this.set('title','');
               this.set('content','');
               this.transitionToRoute('admin.news.index');
          }

     }

});
