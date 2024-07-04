// common js
// const bgColor = document.querySelector("header")
const bgColor = document.body

//bgcolor rotate;
let rotate=0;
let color1 ="rgb(252, 237, 190)";
let color2 ="rgb(175, 213, 252)";

function rotateColor(){
  let wh = $(window).height();
  rotate++
  bgColor.style.background = `linear-gradient(${rotate}deg,${color1},${color2}`;
  if(rotate === 360){
    rotate = 0;
  } 
  let sc = $(document).scrollTop();
  if((sc>=wh) && (sc< wh*2-1)){
    color1 = "rgb(23, 27, 37)";
    color2 = "rgb(139, 106, 87)";
    }else{
      color1 ="rgb(252, 237, 190)";
      color2 ="rgb(175, 213, 252)";
    }
};
setInterval(rotateColor,50);

//publishing 마우스호버시 이미지 나오게하기
const preview = document.querySelector('.preview');
const pbList = document.querySelectorAll('.publishing-con li')
console.log(pbList)

//리스트에 올리면 display 풀어줘
pbList.forEach(list =>{
  list.addEventListener('mouseenter',()=>{
    preview.style.display = "block";
    //그타겟의 데이터 셋을 받아옴
    //마우스는 따라움직이면 되니까 뭐
    preview.style.top='0';
    preview.style.left='0';

  });
  list.addEventListener('mouseleave',()=>{
    preview.style.display = "none";
  });
})

$(window).on('mousemove',function(e){
  $('.cursor').attr('style','top :'+(e.screenY-200)+'px;left:'+(e.screenX-100)+'px;');
})

//section full page scroll
$(document).ready(function(){

  //모바일 메뉴눌렀을 때
  $('header .hamberger-menu').click((e)=>{
    (e).preventDefault();
    $('header .hamberger-menu').toggleClass('active');
    $('.subNav').toggleClass('active');
    //헤더가 맨앞으로 오게해야함ㅠㅠ
    $('header').css('z-index', 9998);
    
    
  })

  //모바일 선택시 자동 닫기
  $('header .subNav').click(()=>{
    setTimeout(()=>{
      $('header .hamberger-menu').removeClass('active');
      $('.subNav').removeClass('active');
    },1000);
  });



  //브라우저 높이 가져오기
  let wh = $(window).height();

  /*브라우저 창 사이즈 변경___________ */
  $(window).resize(function(){
    location.reload();
    let wh = $(window).height();
    $("html,body").stop().animate({ scrollTop:wh*a },100);
  });

  /* 탑메뉴&버튼 클릭______________________ */
  $("header .top ul li").click(function(){
    let num=$(this).index()+1;
    $("html,body").stop().animate({ scrollTop:wh*num }); 
  });



  /* 마우스휠__________________________ */
  let a = 0;  //페이지번호
	let area_n = $(".area").length;  //섹션개수
	let wheel = true;
  $(".area").on("wheel",function(event) {
    // console.log(event.originalEvent.deltaY);
    const delta = event.originalEvent.deltaY / 50;
    //wheel에서는 delta값이 50/-50으로 나옴
    if (wheel) {
      let n = $(this).index()-1;
      if(delta < 0) { //휠을 위로 돌렸다면
        a = n-1;
      }else{ //휠을 아래로 돌렸다면
        a = n+1;
      }

      if ( a <= 0 ) { a = 0; }
      if ( a >= area_n-1 ) { a = area_n-1; }

      $("html,body").stop().animate({ scrollTop:wh*a },100); 
    };
  });







  /*스크롤이벤트______________________ */
  $(window).scroll(function(){ 
    let sc = $(document).scrollTop();

    //한영역 높이가 wh임 
    if((sc>=0) && (sc<wh)){  
      a=1; 
      title='메인페이지'
      titleEng='Main Page'
      $(".left .page-title").text(title);
      $(".page").text(`${a} | 6`);
      $("header .top ul.pc-menu li").removeClass("active");
    };
    if((sc>=wh) && (sc< wh*2-1)){  
      a=2;
      title='프로필'
      titleEng='About'
      menuSelect();
      //글씨하얗게칠하기

    };
    if((sc>=wh*2-1) && (sc<wh*3)){  
      a=3;
      title='웹 퍼블리싱'
      titleEng='Web Publishing'
      menuSelect();
    };
    if((sc>=wh*3) &&(sc<wh*4)){  
      a=4;
      title='웹디자인'
      titleEng='Web Design' 
      menuSelect();
    };
    if((sc>=wh*4) &&(sc<wh*5-1)){  
      a=5;
      title='웹기획'
      titleEng='Web Planning'
      menuSelect();
      $("header div.bottom").removeClass("active")
    };
    if(sc>wh*5-1){  
      a=6;
      title='연락처'
      titleEng='Contact'
      menuSelect();
      $("header div.bottom").addClass("active")
    };
  });

  function menuSelect(){
    $(".left .page-title").text(title);
    $(".right .page-title").text(titleEng);
    $(".page").text(`${a} | 6`);
    $("header .top ul.pc-menu li").eq(a-2).addClass("active");
  $("header .top ul.pc-menu li").eq(a-2).siblings().removeClass("active");
  }

  $(window).on('mousemove',function(e){
    $('.cursor').attr('style','top :'+(e.screenY-200)+'px;left:'+(e.screenX-100)+'px;');
  })

});
