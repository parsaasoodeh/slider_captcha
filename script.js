/**
 * Created by n52-hp on 04/09/2017.
 */
$(document).ready(function () {
    var divHeight = $('#slider0').height;
    $("#slider1").draggable({
        axis: 'x',
        containment: 'parent',
        drag: function (event, ui) {
            var p =ui.position.left;
            $('#green-area').width(p);
            if ( ui.position.left >= 290) {
                $("#slider0").fadeOut();
                $("#succes").text("succes!");
            } else {
                // Apparently Safari doesn't allow partial opacity on text with background clip? Not sure.
                // $("h2 span").css("opacity", 100 - (ui.position.left / 5))
            }
        },
        stop: function (event, ui) {
            if (ui.position.left < 290) {
                $(this).animate({
                    left: 0
                });
                $('#green-area').width(0);
            }
        }
    });

});