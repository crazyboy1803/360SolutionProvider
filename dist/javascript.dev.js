"use strict";

var a = 0;

function myfunction() {
  if (a % 2 == 0) {
    document.getElementById("logincard").style.display = "block";
    a++;
  } else {
    document.getElementById("profile").style.display = "none";
    document.getElementById("login").innerHTML = "LOGIN";
    a++;
  }

  event.preventDefault();
}

function myfunction1() {
  document.getElementById("logincard").style.display = "none";
  document.getElementById("profile").style.display = "block";
  document.getElementById("login").innerHTML = "LOGOUT";
}
//# sourceMappingURL=javascript.dev.js.map
