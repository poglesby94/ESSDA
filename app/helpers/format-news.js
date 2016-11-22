import Ember from 'ember';

export function formatNews(input) {
  let x=Ember.String.htmlSafe(input);
  return x;
}

export default Ember.Helper.helper(formatNews);
