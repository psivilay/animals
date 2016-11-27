$(document).ready(function() {
  $("form#pick-animal").submit(function(event) {
    event.preventDefault();
    var animal = $("#animal").val();

    if (animal === "honey-badger") {
      alert("honey badger!");
    } else {
      alert("select an animal please!");
    }
  });
});


//onchange="this.form.submit();"
