import Ember from 'ember';

export function formatDate(input) {
     let x= new Date(input);
     return x.toDateString();
}

export default Ember.Helper.helper(formatDate);
