(function ($) {
    var options = {};
    var oldx = 0;
    var direction = "";
    var stop_timeout = false;
    var stop_check_time = 150;
    $.mousedirection = function (opts) {
        var defaults = {};
        options = $.extend(defaults, opts);
        $(document).bind("mousemove", function (e) {
            var activeElement = e.target || e.srcElement;
            if (e.pageX > oldx) {
                direction = "right";
            } else if (e.pageX < oldx) {
                direction = "left";
            }

            clearTimeout(stop_timeout);
            stop_timeout = setTimeout(function () {
                direction = "stop";
                $(activeElement).trigger(direction);
                $(activeElement).trigger({
                    type: "mousedirection",
                    direction: direction
                });
            }, stop_check_time);

            $(activeElement).trigger(direction);
            $(activeElement).trigger({
                type: "mousedirection",
                direction: direction
            });
            oldx = e.pageX;
        });
    };
})(jQuery);

$(function () {
    $.mousedirection();
    $(".container").bind("mousedirection", function (e) {
        $(this).html("Mouse Direction: <b>" + e.direction + "</b>");
    });
});