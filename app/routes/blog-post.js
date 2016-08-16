import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveComment(comment) {
      let blogPost = this.modelFor(this.routeName);

      return this.store.createRecord('comment', {
        blogPost,
        content: comment
      }).save();
    }
  }
});
