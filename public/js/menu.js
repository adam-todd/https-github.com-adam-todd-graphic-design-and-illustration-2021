/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function openMenu() {
  if (($("#menu").is(":hidden"))) {
    $("#menu").show();
    $("#main").hide();
    $("#menu-button").addClass("close-icon");
    $("#menubutton").addClass("close-icon");
    $("#page").addClass("bg-pink");
  } else {
    $("#menu").hide();
    $("#main").show();
    $("#menu-button").removeClass("close-icon");
    $("#menubutton").removeClass("close-icon");
    $("#page").removeClass("bg-pink");
  }
}
