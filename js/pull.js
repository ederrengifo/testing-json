(function ($) {
  $('button').on('click', function() {
    $('.content ul').remove();
    $('<div>Loading...</div>').appendTo('body');
    var zip = $('select option:selected').text().substring(1);

    $.getJSON('')
  })
}(jQuery));
