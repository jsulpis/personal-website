// Create the "accordion" effect of the two school cards in desktop screens
$(".dots").each(function() {
  $(this).on("click", function(e) {
    e.preventDefault();
    $(".school").each(function() {
      $(this).removeClass("in");
      e.target.parentElement.parentElement.classList.add("in");
    });
  });
});
