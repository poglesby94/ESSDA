import Ember from 'ember';

export function formatNews(input) {
     //Allows string for news article to be rendered as native html(in templates)
  let x=Ember.String.htmlSafe(input);
  return x;
}

export default Ember.Helper.helper(formatNews);
