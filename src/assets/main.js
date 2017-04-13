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
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: courses.title
      }).appendTo($course);

    });
  }

});
