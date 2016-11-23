import Ember from 'ember';

export default Ember.Controller.extend({
     //Handles the creation of a new news article through the form
     //Consists of user input for the title and content, but the date is automatically created
     title:'',
     content:'',

     //Ensures both fields are non-empty
     titleValid: Ember.computed.notEmpty('title'),
     contentValid: Ember.computed.notEmpty('content'),

     //The user can only click the submit button once both entries are valid
     isValid: Ember.computed.and('titleValid','contentValid'),
     isDisabled: Ember.computed.not('isValid'),

     actions:{
          postArticle() {
               //Triggered when the submit button is clicked
            const artContent = this.get('content');
            const artTitle = this.get('title');
            const artCreated = new Date();

            //Creates the record in the local store
            const newArticle = this.store.createRecord('news',{
                 content:artContent, title:artTitle, created: artCreated
            });

            //Article record is pushed to the backend to be saved
            newArticle.save().then(()=>{ //If the records posts, we transition back to the view of all news articles with the create button
                this.set('title','');
                this.set('content','');
                this.transitionToRoute('admin.news.index');
           }); //Could insert feedback in the case that the promise fails(database record is not saved)
          },
          cancelCreate(){ //If the user leaves, we reset these fields so they do not persist
               this.set('title','');
               this.set('content','');
               this.transitionToRoute('admin.news.index');
               //No record is ever created so we dont need any rollback
          }

     }

});
