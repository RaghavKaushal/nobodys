$(document).ready(function() {
  setTimeout(function() {
    $("#popUpMain").css("display", "block");
  }, 10000);
});
$(".submitId").click(function() {
  $("#popUpMain").css("display", "none");
});
//close popup
$("#popUpMain").on("click", function(event) {
  if (
    $(event.target).is(".cd-popup-close") ||
    $(event.target).is("#popUpMain")
  ) {
    event.preventDefault();
    $(this).css("display", "none");
  }
});
