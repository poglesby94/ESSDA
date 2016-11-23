import Ember from 'ember';

export function formatDate(input) {
     //Function takes a date object and returns date and time in string format (for use in templates)
     let x= new Date(input);
     return x.toDateString();
}

export default Ember.Helper.helper(formatDate);
