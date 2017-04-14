$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/blakeharrison.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(course) {

    var $badges = $('#badges');

    //course.forEach(function() {
    for (var i in course){
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course[i].title
      }).appendTo($course);

      $('<img />', {
        'src': course[i].badge
      }).appendTo($course);

      $('<a />', {
        'href': course[i].url,
        'class': 'btn btn-primary',
        'target': '_blank',
        text: 'See Course'
      }).appendTo($course);

    };
  }

});
