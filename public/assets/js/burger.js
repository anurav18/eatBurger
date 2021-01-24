$(function(){
    $(".devourIt").on("click",function(event){
        var id = $(this).data("id");
        var newDevour = false;
        var newDevouredState = {
            availability: newDevour
        };
        $.ajax("/api/burger/"+id,{
            type:"PUT",
            data: newDevouredState
        }).then(
            function(){
                console.log("Availability status is changed to ",newDevour);
                location.reload();
            });
    });

    //Send a POST request

    $("#postBurger").on("click",function(event){
        event.preventDefault();
        var newBurger = {
            burgerName: $("#burger-input").val().trim(),
        };
        console.log(newBurger);
        $.ajax("/api/burger",{
            type:"POST",
            data: newBurger
        }).then(function(){
            console.log("created a new burger");
            location.reload();
        })
    });

    //Delete a burger

    $(".close-button").on("click",function(event){
        // event.preventDefault();
        console.log("close button clicked");
        var id = $(this).data("id");
        $.ajax("/api/burger/"+id,{
            type:"DELETE"
        }).then(function(){
            console.log("Deleted the burger with ID "+id);
            location.reload();
        })
    })
});