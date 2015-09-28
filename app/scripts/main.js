var Likes = require('models/likes');

$(document).ready(function(){
  $('body').prepend(JST.application());



var button = new Likes();
$('.likesButton').on('click', function(){
  button.likesButton();
});


button.on('change:likesCount', function(){
  if (button.get('likesCount') < 2) {
  $('.likesButton').text(button.get('likesCount') + " like");
} else {
   $('.likesButton').text(button.get('likesCount') + " likes");
 }
});
});
