$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/blakeharrison.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(course) {
    console.log(course.url);

    var $badges = $('#badges');

    courses.forEach(function() {
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($course);

    });
  }

});
