var Likes = Backbone.Model.extend({
  defaults: {
  likesCount: 0,
},

  likesButton: function(newLikes){
    this.set('likesCount', this.get('likesCount') + 1);
  }
});

module.exports = Likes;
