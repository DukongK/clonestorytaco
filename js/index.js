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

  //   마우스 스크롤을 내릴 때 nav에 닿았다 빼도 그대로 유지하는 방법은
  // if else로 다시 나눠준다
  // window scrollTop >= 2 할 때 if는 배경색이 나타나고
  // 그렇지 않으면 배경색이 투명해진다
  //   그래서 위로 올릴때만 배경투명이 적용되고 아래로 2만큼 내리면 색상이 그대로 유지된다
  $("header nav").on("mouseleave", function () {
    if ($(window).scrollTop() >= 2) {
      $(this).css({ "background-color": "#f26529" });
    } else {
      $("header nav").css({ "background-color": "transparent" });
    }
    // $(this).css({ "background-color": "transparent" });
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
    // $(".menulist").toggleClass("on");
    $(".menulist").fadeToggle();

    // $(".menu_txt ul").removeClass("on");
    // $(".menu_txt ul").addClass("on");
    // $(".menu_txt ul").stop().animate({ "padding-top": "0px", opacity: "1" });
    // $(".menu_list").children(".menu_txt").addClass("on");
    // $(".menu_txt ul li").removeClass("on");
    $(".menu_txt li").toggleClass("on");
  });

  //   con2 long bar

  //   visual logn bar
  $(".c2_long_bar").on("mouseenter", function () {
    $(".c2_long_bar").toggleClass("long_on");
    $(".fa-plus").addClass("on");
  });

  $(".c2_long_bar").on("mouseleave", function () {
    $(".c2_long_bar").toggleClass("long_on");
    $(".fa-plus").removeClass("on");
  });

  let total = $(".c7_panel li").length;
  let i = 0;
  //   con7 panel 자동  슬라이드
  start = setInterval(function () {
    $(".c7_panel")
      .stop()
      .animate({ "margin-left": "-982px" }, function () {
        $(".c7_panel li:first-child").appendTo(".c7_panel");
        $(".c7_panel").css({ "margin-left": "0px" });
      });

    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 4000);

  //   con7 txt_wrap 텍스트 올라오는 애니메이션
  start = setInterval(function () {
    $(".txt_wrap ul")
      .stop()
      .animate({ "margin-top": "-50px", opacity: "0" }, function () {
        $(".txt_wrap ul li:first-child").appendTo(".txt_wrap ul");
        $(".txt_wrap ul").css({ "margin-top": "-30px", opacity: "1" });
      });
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
  }, 4000);

  //   con7 panel 버튼
  // next버튼
  $(".next").on("click", function () {
    // clearInterval(start);

    $(".c7_panel")
      .stop()
      .animate({ "margin-left": "-982px" }, function () {
        $(".c7_panel li:first-child").appendTo(".c7_panel");
        $(".c7_panel").css({ "margin-left": "0px" });
      });

    $(".txt_wrap ul")
      .stop()
      .animate({ "margin-top": "-50px", opacity: "0" }, function () {
        $(".txt_wrap ul li:first-child").appendTo(".txt_wrap ul");
        $(".txt_wrap ul").css({ "margin-top": "-30px", opacity: "1" });
      });
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
  });

  // prev 버튼
  //   동작 하는 방법 찾아내기

  $(".prev").on("click", function () {
    $(".c7_panel")
      .stop()
      .animate({ "margin-left": "-982px" }, function () {
        $(".c7_panel li:first-child").appendTo(".c7_panel");
        $(".c7_panel").css({ "margin-left": "0px" });
      });

    $(".txt_wrap ul")
      .stop()
      .animate({ "margin-top": "-50px", opacity: "0" }, function () {
        $(".txt_wrap ul li:first-child").appendTo(".txt_wrap ul");
        $(".txt_wrap ul").css({ "margin-top": "-30px", opacity: "1" });
      });
    if (i == 0) {
      i = total - 1;
    } else {
      i--;
    }
  });
  // $(".prev").on("click", function () {
  //   $(".c7_panel")
  //     .stop()
  //     .animate({ "margin-left": "698px" }, function () {
  //       $(".c7_panel li:last-child").prependTo(".c7_panel");
  //       $(".c7_panel ").css({ "margin-left": "0px" });
  //     });

  //   $(".txt_wrap ul")
  //     .stop()
  //     .animate({ "margin-top": "-50px", opacity: "0" }, function () {
  //       $(".txt_wrap ul li:first-child").appendTo(".txt_wrap ul");
  //       $(".txt_wrap ul").css({ "margin-top": "-30px", opacity: "1" });
  //     });

  //   if (i == total - 1) {
  //     i = 0;
  //   } else {
  //     i++;
  //   }
});

// 스크롤 움직임

$(function () {
  let baseline = -500;
  let con1 = $(".con1").offset().top + baseline;
  let con2 = $(".con2").offset().top + baseline;
  let con3 = $(".con3").offset().top + baseline;
  let con4 = $(".con4").offset().top + baseline;
  let con5 = $(".con5").offset().top + baseline;
  let con6 = $(".con6").offset().top + baseline;
  let con7 = $(".con7").offset().top + baseline;
  let con8 = $(".con8").offset().top + baseline;

  $(window).on("scroll", function () {
    let scroll = $(this).scrollTop();

    if (scroll >= con1 && scroll < con2) {
      //con1움직임

      $(".c1_circle li").addClass("on");
      $(".c1_txt").addClass("on");
      $(".con1_bg").addClass("on");
    } else if (scroll >= con2 && scroll < con3) {
      //con2움직임
      $(".c2_txt").addClass("on");
    } else if (scroll >= con3 && scroll < con4) {
      //con3움직임
      $(".c3_ul li").addClass("on");
    } else if (scroll >= con4 && scroll < con5) {
      //con4움직임
      $(".con4 > h2").addClass("on");
      $(".con4 ul li").addClass("on");
      let count = 1800;
      stop = setInterval(function () {
        count++;
        if (count > 2000) {
          clearInterval(stop);
        } else {
          $(".con4txt .count1").text(count);
        }
      });

      let countc = -50;
      stop2 = setInterval(function () {
        countc++;
        if (countc > 100) {
          clearInterval(stop2);
        } else {
          $(".con4txt .count2").text(countc);
        }
      });
      let countr = 0;
      stop3 = setInterval(function () {
        countr++;
        if (countr > 176) {
          clearInterval(stop3);
        } else {
          $(".con4txt .count3").text(countr);
        }
      });
    } else if (scroll >= con5 && scroll < con6) {
      //con5움직임
      $(".con5txt").addClass("on");
      $(".character ul").addClass("on");
    } else if (scroll >= con6 && scroll < con7) {
      //con6움직임
      $(".con6_txt_wrap").addClass("on");
      $(".c6_box li").addClass("on");
    } else if (scroll >= con7 && scroll < con8) {
      //con7움직임
      $(".con7 > h2").addClass("on");
      $(".c7_wrap_box").addClass("on");
    } else if (scroll >= con8) {
      $(".con8_bg").addClass("on");
    }
  });

  //   상단버튼으로 자연스럽게 올라가게 하기

  $(".upbutton").on("click", function () {
    let button = $("header").offset().top;
    console.log(button);

    $("html,body").stop().animate({ scrollTop: button });
  });
});
