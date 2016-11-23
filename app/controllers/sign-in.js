import Ember from 'ember';

export default Ember.Controller.extend({
     //Allows for users to sign in via the page
     emailaddress:'',
     userpassword:'',
     errorMessage:'',  //text which only appears if the login promise fails

     emailValid: Ember.computed.match('emailaddress', /^.+@.+\..+$/), //ensure email is of the correct form
     passwordValid: Ember.computed.gte('password.length', 6),    //all passwords must be at least 6 characters
     isValid: Ember.computed.and('emailValid','passwordValid'),
     isDisabled: Ember.computed.not('isValid'), //the submit button is only available when both email and password are of valid form


     actions:{
          signIn(provider) {
               //Using the torii library to authenticate users via the firebase service
               this.get('session').open('firebase', {
                    provider: provider,
                    email: this.get('emailaddress') || '',
                    password: this.get('password') || '',
               }).then(() => { //promise resolves only if the user has entered correct email/password
                    this.transitionToRoute('admin'); //the only hidden area is the admin section so sufficient to redirect there
               }, () => { //notifies the user that they were not logged in(wrong email/password or connection to firebase failed)
                    this.set('errorMessage',"Error! Incorrect email/password combination.");
               });
          }
     }
});
