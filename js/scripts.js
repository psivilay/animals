$(document).ready(function() {
  $("form#pick-animal").submit(function(event) {
    event.preventDefault();
    var animal = $("#animal").val();

    if (animal === "honey-badger") {
      $("#honey-badger-info").show();
      $("#dolphin-info, #fire-ant-info").hide();
    } else if (animal === "dolphin") {
      $("#dolphin-info").show();
      $("#honey-badger-info, #fire-ant-info").hide();
    } else if (animal === "fire-ant") {
      $("#fire-ant-info").show();
      $("#honey-badger-info, #dolphin-info").hide();
    } else {
      alert("Please select an animal or insect!");
    }
  });
});


//onchange="this.form.submit();"
