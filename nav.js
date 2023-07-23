
$("#menuIcon").on("click", function (){
    $("#menuIcon").css("display", "none");
    $("#crossIcon").css("display", "block");
});

$(".ToggleIcon").on("click", function(){
    $(".navContainer").slideToggle(500);
});

$("#crossIcon").on("click", function (){
    $("#crossIcon").css('display', 'none');
    $("#menuIcon").css('display', 'block');
});

