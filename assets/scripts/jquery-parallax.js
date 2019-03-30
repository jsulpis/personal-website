/*
This is a modified version (by me Julien Sulpis) of the following plugin.
The plugin uses the css property 'background-attachement' which does not work
properly on Android.

Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/
Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function($) {
  var $window = $(window);
  var windowHeight = $window.height();

  $window.resize(function() {
    windowHeight = $window.height();
  });

  $.fn.parallax = function(xpos, speedFactor, outerHeight) {
    var $this = $(this);
    var firstTop;

    //get the starting position of each element to have parallax applied to it
    $this.each(function() {
      firstTop = $this.offset().top;
    });

    // setup defaults if arguments aren't specified
    if (arguments.length < 1 || xpos === null) xpos = "50%";
    if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
    if (arguments.length < 3 || outerHeight === null) outerHeight = true;

    // I update the parallax effect every 2 scroll events for smoother animation
    // on low-end devides
    var flagUpdate = true;

    // function to be called whenever the window is scrolled or resized
    function update() {
        var pos = $window.scrollTop();

        $this.each(function() {
          var $element = $(this);
          var top = $element.offset().top;
          var height = $element.height();

          // Check if totally above or totally below viewport
          if (top + height < pos || top > pos + windowHeight) {
            return;
          }

          $this.css(
            "backgroundPosition",
            xpos + " " + (50 + Math.round((firstTop - pos) * speedFactor)) + "%"
          );
        });
    }

    $window.bind("scroll", update).resize(update);
    update();
  };

  $.fn.cancelParallax = function() {
    $window.unbind("scroll");
  }
})($);
