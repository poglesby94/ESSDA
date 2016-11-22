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
               let controller = this;
               this.get('session').open('firebase', {
                    provider: provider,
                    email: this.get('emailaddress') || '',
                    password: this.get('password') || '',
               }).then(() => {
                    controller.set('emailaddress', null);
                    controller.set('password', null);
               }, () => {
                    this.set('errorMessage',"Error!");
               });
          }
     }
});
