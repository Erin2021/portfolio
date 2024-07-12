(function(){
  //🎈publishing-마우스호버시 이미지 나오게하기
const preview = document.querySelector('.preview');
const pbList = document.querySelectorAll('.publishing-con li')

//리스트에 올리면 preview 등장
pbList.forEach(list =>{
  if(window.innerWidth>=1200){
    list.addEventListener('mousemove',(e)=>{
      preview.style.display = "block";
      //그타겟의 데이터 셋을 받아옴
      preview.style.backgroundImage=`url(../img/${list.dataset.preview})`;

    });
    list.addEventListener('mouseleave',()=>{
      preview.style.display = "none";
    });
  }
})

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.1; // 따라오는 속도


const PBox=document.querySelector('.publishing-con');
PBox.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
});

const loop = () => {
  // 애니메이션의 가속, 감속
  targetX += (x - targetX) * speed ;
  targetY += (y - targetY) * speed;



  //하단리스트에 호버시 이미지 위치 조정
  if(y>600){
    preview.style.translate="-10% -60%"
  }else{
    preview.style.translate="-10% -10%"
  }
  preview.style.top = targetY+ "px";
  preview.style.left = targetX + "px";
  // console.log(preview.style.top, preview.style.left = targetX)
  
  // 재귀적으로 호출
  window.requestAnimationFrame(loop);
};
loop();





//🎈Design-마우스가 돌아다니는 방향대로 스크롤 되기
let holder = document.querySelector('.design-list'),
    wrapper = document.querySelector('.design-con-inner'),
    designContent= document.querySelector('.contents.design-con'),
    overflowX, mapPositionX

function onResize(e) {
  overflowX = holder.offsetWidth - (window.innerWidth/1.2);
  mapPositionX = gsap.utils.mapRange(0, window.innerWidth, overflowX / 2, overflowX / -2);
}

function onMouseMove(e) {
  if (overflowX > 0) {
    let x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0;
    gsap.to(holder, {duration: 1, overwrite: true, ease: "power3", x: mapPositionX(x)});
  }
}

window.addEventListener("resize", onResize);
designContent.addEventListener("mousemove", onMouseMove);
designContent.addEventListener("touchmove", onMouseMove);
designContent.addEventListener("pointermove", onMouseMove);
onResize();

//버튼누르면 바뀌기
const graphicBtn =document.querySelector(".design-btn button:nth-child(1)")
const uxuiBtn =document.querySelector(".design-btn button:nth-child(2)")
const DesignBtn = document.querySelectorAll(".design-btn button")


DesignBtn.forEach(Btn=>{
  Btn.addEventListener('click',(e)=>{
    console.log(e.target);
    if(!e.target.classList.contains('active')){//토글바꿔
      DesignBtn.forEach(BtnEvent=>{
        BtnEvent.classList.remove("active");
      })
      e.target.classList.add('active');
    }
    if(graphicBtn.classList.contains('active')){
      document.querySelector('.graphic-part').classList.add('active');
      document.querySelector('.UXUI-part').classList.remove('active');
    }else{
      document.querySelector('.UXUI-part').classList.add('active');
      document.querySelector('.graphic-part').classList.remove('active');
    }
  })
})





//🔥Jquery 부분
$(document).ready(function(){
  //🎈모바일 햄버거 메뉴 눌렀을 때
  $('header .hamberger-menu').click((e)=>{
    (e).preventDefault();
    $('header .hamberger-menu').toggleClass('active');
    $('.subNav').toggleClass('active');
  })

  //🎈모바일로 색션 선택시 자동 닫히기
  $('header .subNav').click(()=>{
    setTimeout(()=>{
      $('header .hamberger-menu').removeClass('active');
      $('.subNav').removeClass('active');
    },1000);
  });

});

})()