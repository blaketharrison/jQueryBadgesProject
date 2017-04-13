$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/blakeharrison',
    dataType: 'jsonp',
    success: function(response) {
      alert('got it');
    }
  });

});
