$(function () {
    $("a[href*=#]:not([href=#],[data-toggle=collapse])").click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html,body").animate({scrollTop: target.offset().top}, 1e3, "swing");
                return false
            }
        }
    });
    $('[data-toggle="tooltip"]').tooltip();
    $(".navbar-collapse ul li a").click(function () {
        $(".navbar-toggle:visible").click()
    });
    $("a[href=#mail]").prop("href", function () {
        var domain = window.location.hostname;
        domain = domain.indexOf("www.") == 0 ? domain.substr(4) : domain;
        return "mailto:" + $(this).data("user") + "@" + domain
    })
});
$(function () {
    $('section[data-type="background"]').each(function () {
        var $scroll = $(this), $window = $(window);
        $window.scroll(function () {
            var yPos = -($window.scrollTop() / $scroll.data("speed"));
            var coords = "50% " + yPos + "px";
            $scroll.css({backgroundPosition: coords})
        })
    })
});