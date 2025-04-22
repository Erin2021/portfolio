//스크롤 애니메이션 효과
(function () {
  let funcObj = {
    f_0: function () {
      const tl = gsap.timeline();
      tl.from('#section0 .greeting >h1', {
        opacity: 0,
        y: -100,
      });
      tl.from('#section0 .greeting >p', {
        opacity: 0,
        y: 30,
      });
    },
    f_1: function () {
      const tl = gsap.timeline();
      tl.from('#section1 .contents> *', {
        opacity: 0,
        y: 100,
      });
    },
    f_2: function () {
      const tl = gsap.timeline();
      tl.from('#section2 .sec-title >h2', {
        opacity: 0,
        y: -100,
      });
      tl.from('#section2 .sec-title >p', {
        opacity: 0,
        y: -30,
      });
      tl.from('#section2 .pub-inner>li', {
        opacity: 0,
        x: 500,
        stagger: {
          amount: 0.3,
          from: 'random',
        },
      });
    },
    f_3: function () {
      const tl = gsap.timeline();
      tl.from('#section3 .sec-title >h2', {
        opacity: 0,
        y: -100,
      });
      tl.from('#section3 .sec-title .design-btn', {
        opacity: 0,
        y: -30,
      });
      tl.from('#section3 .design-list .d-thumbnail', {
        opacity: 0,
        scale: 1.5,
        stagger: {
          amount: 0.5,
          from: 'random',
        },
        y: 100,
        invalidateOnRefresh: true,
      });
    },
    f_4: function () {
      const tl = gsap.timeline();
      tl.from('#section4 .sec-title >h2', {
        opacity: 0,
        y: -100,
      });
      tl.from('#section4 .sec-title >p', {
        opacity: 0,
        y: -30,
      });
      tl.from('#section4 .plan-con-list .plan-list-inner', {
        opacity: 0,
        scale: 1.5,
        stagger: {
          amount: 0.5,
          from: 'random',
        },
        invalidateOnRefresh: true,
      });
    },
    f_5: function () {
      const tl = gsap.timeline();
      tl.from('#section5 .greeting >h2', {
        opacity: 0,
        y: -100,
      });
      tl.from('#section5 .greeting >p', {
        opacity: 0,
        y: 30,
      });
    },
  };

  let section = document.querySelectorAll('section');

  funcObj['f_0'](); //스크롤과 상관없이 첫번째는 먼저 실행이 되게 함
  let animationExecuted = Array(section.length).fill(false);
  animationExecuted[0] = true;

  window.addEventListener('scroll', function () {
    // 각 섹션이 애니메이션을 실행했는지 추적하는 상태

    let scroll = document.scrollingElement.scrollTop;

    for (let i = 0; i < section.length; i++) {
      //스크롤이 되었을때 섹션이 뷰포트에 들어왔으면 그때 섹션함수를 실행함
      //console.log('높이',section[i].offsetTop)
      //console.log('스크롤높이',scroll)
      if (scroll == section[i].offsetTop) {
        // 섹션이 뷰포트에 들어왔고 애니메이션이 아직 실행되지 않았으면 실행
        if (!animationExecuted[i] && scroll >= section[i].offsetTop) {
          funcObj['f_' + i](); // 애니메이션 실행
          animationExecuted[i] = true; // 실행 상태 기록
        }
        //console.log(i)
      }
    }
  });
})();
