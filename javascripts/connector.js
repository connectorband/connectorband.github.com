$(document).ready(function() {
  // When menu items are clicked, open the appropriate content div
  $(".menu").click(function() {
    var content = $("#" + this.getAttribute('data-content'));
    var alreadyShown = content.css("display") == 'block';
    $(".content").vanish();
    
    if (!alreadyShown)
      content.reveal();
  });
  
  // A bit of a hack - On load, set the height of content to be relative to the whole window
  $(".content").height($(window).height() / 1.85);
  $(window).resize(function() {
    // Also keep the height relative if the window is ever resized
    $(".content").height($(window).height() / 1.85);
  })
});

// Let's make slightly prettier shows and hides
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