//Wait for page to be fully loaded
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevour = $(this).data("newburger");
  
      console.log(newDevour);

      var newDevourState = {
        devoured: newDevour
      };
  
      // Send the PUT request to change burger state.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to reflect changes
          location.reload();
        }
      );
    });
  
    //Create a new burger
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
  
      console.log(newBurger)

      // Send the POST request and add the burger to the database.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to reflect changes
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request and remove the selected burger from the database.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to reflect changes
          location.reload();
        }
      );
    });
  });
  