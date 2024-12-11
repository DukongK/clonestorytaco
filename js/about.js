// header nav scroll

$(function () {
    $(window).on("scroll", function () {
        let nav = $(this).scrollTop();
        // 스크롤 숫자 나오는지 확인
        console.log(nav);

        // 아래로 스크롤 조금 할 때 (if)배경 나타나고 위로 올리면 (else)배경 투명
        if (nav >= 2) {
            $("header nav").css({ "background-color": "#f26529" });
        } else {
            $("header nav").css({ "background-color": "transparent" });
        }
    });

    // header nav hover 마우스 닿았을 때 배경 변경
    $("header nav").on("mouseenter", function () {
        $(this).css({ "background-color": "#f26529" });
    });

    $("header nav").on("mouseleave", function () {
        if ($(window).scrollTop() >= 2) {
            $(this).css({ "background-color": "#f26529" });
        } else {
            $("header nav").css({ "background-color": "transparent" });
        }
    });

    //   visual logn bar
    $(".visual_long_bar").on("mouseenter", function () {
        $(".visual_long_bar").toggleClass("long_on");
        $(".fa-plus").addClass("on");
    });

    $(".visual_long_bar").on("mouseleave", function () {
        $(".visual_long_bar").toggleClass("long_on");
        $(".fa-plus").removeClass("on");
    });

    //   hambergur_bar move
    $(".hambergur").on("click", function () {
        $(".hambergur .line1").toggleClass("on1");
        $(".hambergur .line2").toggleClass("on2");
        $(".hambergur .line3").toggleClass("on3");
    });

    //   menulist
    $(".hambergur").on("click", function () {
        $(".menulist").fadeToggle();
        $(".menu_txt li").toggleClass("on");
    });

    //   상단버튼으로 자연스럽게 올라가게 하기

    $(".upbutton").on("click", function () {
        let button = $("header").offset().top;
        console.log(button);

        $("html,body").stop().animate({ scrollTop: button });
    });
});
// 공통----------------------------------------

$(function () {
    // visual

    $(".visualbg").addClass("on");
    $(".c1_txt").addClass("on");

    $(window).on("scroll", function () {
        let con2 = $(this).scrollTop();
        // console.log(con2);
        let con3 = $(this).scrollTop();
        // console.log(con3);
        let footer = $(this).scrollTop();
        console.log(footer);

        if (con2 >= 500 && con2 <= 600) {
            $(".c2bg").addClass("on");
            $(".c2txt li:first-child").addClass("on");
            $(".c2txt li:last-child").addClass("on");
        } else if (con3 >= 1100 && con3 <= 1200) {
            $(".c3_txt").addClass("on");
            $(".area_wrap").addClass("on");
        } else if (footer >= 3300 && footer <= 3400) {
            $(".con_bottom_bg").addClass("on");
        }
    });
});
