var divs = document.getElementsByClassName("school");
var dots = document.getElementsByClassName("dots");

for (var i = 0; i < divs.length; i++) {
  dots[i].addEventListener("click", function(e) {
    e.preventDefault();
    for (var i = 0; i < divs.length; i++) {
      divs[i].classList.remove("in");
      e.target.parentElement.parentElement.classList.add("in");
    }
  });
}
