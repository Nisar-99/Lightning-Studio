(function($) {
    "use strict";

	/*-----------------------
    hide-show-h2-menu
    -----------------------*/
	document.getElementById("h4_menu").style.display = "none";
    $("#h4_menu_show").on('click', function() {
        $("#h4_menu").fadeToggle("slow");
    });
    $("#rfa_close").on('click', function() {
        $("#h4_menu_show").fadeToggle("slow");
    });

    // Resize
    $(window).on('resize', function () {
        var wWidth = $(this).width();

        if (wWidth < 991) {
            // removing class
            document.getElementById("h4_menu").style.display = "block";
            document.getElementById("h4_menu_show").style.display = "none";

        } else {
            // adding class
            document.getElementById("h4_menu").style.display = "none";
            document.getElementById("h4_menu_show").style.display = "block";

        }
    }).resize();

    // menu style
    $("#h4_menu_show").on('click', function () {
        $("#h4ms_first").fadeToggle("slow");
    });
    document.getElementById("h4ms_second").style.display = "none";
    $("#h4_menu_show").on('click', function () {
        $("#h4ms_second").fadeToggle("slow");
    });
	
}(jQuery));