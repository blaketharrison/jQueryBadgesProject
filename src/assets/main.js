$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/blakeharrison.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function() {
      $('<div />', {
        'class': 'course'
      }).appendTo($badges);

    });
  }

});
