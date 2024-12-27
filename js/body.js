//body와 스크롤이벤트
(function () {
  const bgColor = document.body;
  let rotate = 0;

  //시작배경
  let color1 = "rgb(252, 237, 190)";
  let color2 = "rgb(175, 213, 252)";

  //메인배경
  let lightGroup1 = [252, 237, 190];
  let lightGroup2 = [175, 213, 252];
  //다크배경
  let darkGroup1 = [23, 27, 37];
  let darkGroup2 = [139, 106, 87];
  let windowHeight = $(window).height();

  // 배경색 변신
  let test = true;
  let test2 = true;
  $(window).scroll(function () {
    let sc = $(document).scrollTop();
    if (sc >= windowHeight && sc < windowHeight * 2 - 1) {
      //자기소개화면에서만 색변하기
      if (test) {
        //메인배경
        lightGroup1 = [252, 237, 190];
        lightGroup2 = [175, 213, 252];
        //다크배경
        darkGroup1 = [23, 27, 37];
        darkGroup2 = [139, 106, 87];

        gradientBackground(lightGroup1[0], darkGroup1[0], 0, true);
        gradientBackground(lightGroup1[1], darkGroup1[1], 1, true);
        gradientBackground(lightGroup1[2], darkGroup1[2], 2, true);
        gradientBackground(lightGroup2[0], darkGroup2[0], 0, false);
        gradientBackground(lightGroup2[1], darkGroup2[1], 1, false);
        gradientBackground(lightGroup2[2], darkGroup2[2], 2, false);
      }
      test = false;
      test2 = true;
    } else {
      if (test2) {
        //다크배경
        aGroup1 = [23, 27, 37];
        aGroup2 = [139, 106, 87];
        //메인배경
        bGroup1 = [252, 237, 190];
        bGroup2 = [175, 213, 252];
        gradientBackground(aGroup1[0], bGroup1[0], 0, true);
        gradientBackground(aGroup1[1], bGroup1[1], 1, true);
        gradientBackground(aGroup1[2], bGroup1[2], 2, true);
        gradientBackground(aGroup2[0], bGroup2[0], 0, false);
        gradientBackground(aGroup2[1], bGroup2[1], 1, false);
        gradientBackground(aGroup2[2], bGroup2[2], 2, false);
      }
      test = true;
      test2 = false;
    }
  });

  //그라데이션 값이 저장이 업데이트 되면서 저장이 됨
  let colorGroup1 = [];
  let colorGroup2 = [];

  function gradientBackground(
    startColor,
    changedColor,
    colorNumber,
    colorGroupPart
  ) {
    let start = startColor;
    let changed = changedColor;
    let number = colorNumber;
    let groupPart = colorGroupPart;

    let colorAnimation = setInterval(() => {
      if (start < changed) {
        //변경될 색 코드가 현재 색 코드보다 클 경우
        if (groupPart) {
          //그라데이션 그룹을 boolean으로 구분
          colorGroup1[number] = start++;
        } else {
          colorGroup2[number] = start++;
        }
      } else if (start > changed) {
        //변경될 색 코드가 현재 색 코드보다 작을 경우
        if (groupPart) {
          colorGroup1[number] = start--;
        } else {
          colorGroup2[number] = start--;
        }
      } else {
        clearInterval(colorAnimation);
      }
      if (groupPart) {
        color1 = `rgb(${colorGroup1[0]},${colorGroup1[1]},${colorGroup1[2]})`;
      } else {
        color2 = `rgb(${colorGroup2[0]},${colorGroup2[1]},${colorGroup2[2]})`;
      }
    }, 5);
  }

  // 🎈배경색 회전
  function rotateColor() {
    rotate++;
    bgColor.style.background = `linear-gradient(${rotate}deg,${color1},${color2}`;
    bgColor.style.backgroundAttachment = "fixed";
    bgColor.style.backgroundRepeat = " no-repeat";
    if (rotate === 360) {
      rotate = 0;
    }
  }
  setInterval(rotateColor, 30);

  //🔥Jquery 부분
  $(document).ready(() => {
    //🎈🎈풀페이지 스크롤 이벤트
    let wh = $(window).height();
    let wv = $(window).width();
    let a = 0; //페이지번호
    let area_n = $(".area").length; //섹션개수
    let wheel = true;

    /*브라우저 창 사이즈 변경___________ */
    $(window).resize(function () {
      let wh = $(window).height();
      $("html,body")
        .stop()
        .animate({ scrollTop: wh * a }, 100);
    });

    /* 메뉴클릭______________________ */
    $("header .top ul li").click(function () {
      let num = $(this).index() + 1;
      $("html,body")
        .stop()
        .animate({ scrollTop: wh * num });
    });

    /* 컴퓨터스크린일때만-풀페이지 마우스휠__________________________ */
    if (wv >= 1200) {
      $(".area").on("wheel", function (event) {
        const delta =
          event.originalEvent.deltaY / Math.abs(event.originalEvent.deltaY);
        if (wheel) {
          let n = $(this).index() - 2;
          if (delta < 0) {
            //휠을 위로 돌렸다면
            a = n - 2;
          } else {
            //휠을 아래로 돌렸다면
            a = n;
          }

          if (a <= 0) {
            a = 0;
          }
          if (a >= area_n - 1) {
            a = area_n - 1;
          }

          $("html,body")
            .stop()
            .animate({ scrollTop: wh * a }, 100);
        }
      });
    }

    //🎈스크롤 레이아웃 변화 이벤트
    $(window).scroll(function () {
      let sc = $(document).scrollTop();

      //한영역 높이가 wh임
      if (sc >= 0 && sc < wh) {
        a = 1;
        title = "메인페이지";
        titleEng = "Main Page";
        $(".left .page-title").text(title);
        $(".right .page-title").text(titleEng);
        $(".page").text(`${a} | 6`);
        $("header .top ul.pc-menu li").removeClass("active");
        $("header, #layout").css({ color: "#000" });
      }
      if (sc >= wh && sc < wh * 2 - 1) {
        a = 2;
        title = "프로필";
        titleEng = "About";
        menuSelect();
        $("header, #layout").css({ color: "#fff" });
        $(".subNav .inner li").css({ color: "#000" });
      }
      if (sc >= wh * 2 - 1 && sc < wh * 3) {
        a = 3;
        title = "웹 퍼블리싱";
        titleEng = "Web Publishing";
        menuSelect();
        $("header, #layout").css({ color: "#000" });
      }
      if (sc >= wh * 3 && sc < wh * 4) {
        a = 4;
        title = "웹디자인";
        titleEng = "Web Design";
        menuSelect();
      }
      if (sc >= wh * 4 && sc < wh * 5 - 1) {
        a = 5;
        title = "웹기획";
        titleEng = "Web Planning";
        menuSelect();
        $("footer .bottom").removeClass("active");
        if ($(window).width() <= 1200) {
          $("footer .bottom").css({ display: "none" });
        }
      }
      if (sc > wh * 5 - 1) {
        a = 6;
        title = "연락처";
        titleEng = "Contact";
        menuSelect();
        if ($(window).width() <= 1200) {
          $("footer .bottom").css({ display: "flex" });
        }

        $("footer .bottom").addClass("active");
      }
    });

    function menuSelect() {
      $(".left .page-title").text(title);
      $(".right .page-title").text(titleEng);
      $(".page").text(`${a} | 6`);
      $("header .top ul.pc-menu li")
        .eq(a - 2)
        .addClass("active");
      $("header .top ul.pc-menu li")
        .eq(a - 2)
        .siblings()
        .removeClass("active");
    }
  });
})();
