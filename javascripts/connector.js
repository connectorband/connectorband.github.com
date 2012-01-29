$(document).ready(function() {
  $(".menu").click(function() {
    var content = $("#" + this.getAttribute('data-content'));
    var alreadyShown = content.css("display") == 'block';
    $(".content").vanish();
    
    if (!alreadyShown)
      content.reveal();
  });
});

jQuery.fn.extend({
  reveal: function() {
    return this.each(function() {    
      $(this).animate({width: "show", height: "show"});
    });
  },
  vanish: function() {
    return this.each(function() {    
      $(this).animate({width: "hide", height: "hide"});
    });
  }
});