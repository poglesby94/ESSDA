import Ember from 'ember';

export default Ember.Controller.extend({
     emailaddress:'',
     userpassword:'',
     errorMessage:'',

     emailValid: Ember.computed.match('emailaddress', /^.+@.+\..+$/),
     passwordValid: Ember.computed.gte('password.length', 6),
     isValid: Ember.computed.and('emailValid','passwordValid'),
     isDisabled: Ember.computed.not('isValid'),


     actions:{
          signIn(provider) {
               
               this.get('session').open('firebase', {
                    provider: provider,
                    email: this.get('emailaddress') || '',
                    password: this.get('password') || '',
               }).then(() => {
                    this.transitionToRoute('admin');
               }, () => {
                    this.set('errorMessage',"Error! Incorrect email/password combination.");
               });
          }
     }
});
