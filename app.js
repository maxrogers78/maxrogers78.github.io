var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 500) {
} else if (viewportWidth < 700) {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.backgroundColor = "#23252b";
      document.getElementById("navbar").style.borderBottom =
        "2px solid #ffd131";
    } else {
      document.getElementById("navbar").style.top = "-100px";
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.borderBottom = "none";
    }
    prevScrollpos = currentScrollPos;
  };
} else {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.backgroundColor = "#23252b";
      document.getElementById("navbar").style.borderBottom =
        "5px solid #ffd131";
    } else {
      document.getElementById("navbar").style.top = "-100px";
      document.getElementById("navbar").style.backgroundColor = "transparent";
      document.getElementById("navbar").style.borderBottom = "none";
    }
    prevScrollpos = currentScrollPos;
  };
}
