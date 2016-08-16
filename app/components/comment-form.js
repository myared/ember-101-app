import Ember from 'ember';

export default Ember.Component.extend({
  commentContent: '',

  actions: {
    saveComment(commentContent) {
      this.saveComment(commentContent).then(() => {
        this.set('commentContent', '');
      });
    }
  }
});
