//상세페이지이벤트-디자인
(function(){
  const designList=[
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g1.png",
      nextProject:{
        nextImg:"img/graphic2.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g2.png",
      nextProject:{
        nextImg:"img/graphic3.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g3.png",
      nextProject:{
        nextImg:"img/graphic4.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g4.png",
      nextProject:{
        nextImg:"img/graphic5.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g5.png",
      nextProject:{
        nextImg:"img/graphic6.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g6.png",
      nextProject:{
        nextImg:"img/graphic7.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g7.png",
      nextProject:{
        nextImg:"img/graphic8.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g8.png",
      nextProject:{
        nextImg:"img/graphic9.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g9.png",
      nextProject:{
        nextImg:"img/graphic10.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g10.png",
      nextProject:{
        nextImg:"img/graphic11.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"img/preview1.PNG",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"img/g11.png",
      nextProject:{
        nextImg:"img/graphic1.png",
        nextTitle:"우주일러스트",
      }
    },
  ]


  const DesignBtn = document.querySelectorAll('.d-thumbnail');
  console.log(DesignBtn)
  const DesignModal = document.querySelector('#modalD');
  let Bigscroll = true;



  DesignBtn.forEach((value,count)=>{
    value.addEventListener('click',()=>{
      console.log('눌린것:',count,value);
      let progressCount=count;
      Bigscroll=false;


      if(!Bigscroll){
        //html 스크롤 가리기
        document.getElementsByTagName('html')[0].style.overflowY='hidden'

        //modal띄우기
        const modalTop= document.getElementsByTagName('html')[0].scrollTop;
        DesignModal.style.top = `${modalTop}px`
        DesignModal.style.display='flex';



        //modal닫기-버튼 누르면 다시 원래대로
        const DesignClosBtn = DesignModal.querySelector('.m-btn');

        DesignClosBtn.addEventListener('click',()=>{
          DesignModal.style.display='none';
          Bigscroll = true;
          document.getElementsByTagName('html')[0].style.overflowY='scroll'
        });

        DStructure(count);


        //다음 프로젝트 눌렀을때 다음 데이터 불러와야해
        const MNext=DesignModal.querySelector('.T-next');
        MNext.addEventListener('click',()=>{
          progressCount+=1;
          console.log("다음은 여기야:",progressCount)

          if(progressCount>=11){ //11까지 갔을경우 0로
            progressCount=0;
          }else if(progressCount>=17){//17까지 갔을경우 11로
            progressCount=11;
          }
          DStructure(progressCount);
        })
      
      
      }



    })
  })


  function DStructure(count){
    //modal위치 초기화
    DesignModal.scrollTop=0;

    //🔥🔥데이터 시각화
    //프리뷰
    const MThumbnail = DesignModal.querySelector('.m-thumbnail img');
    MThumbnail.src=designList[count].preview;
    MThumbnail.alt=designList[count].title;

    //제목
    const Mtitle = DesignModal.querySelector('.M-title');
    Mtitle.innerText=designList[count].title;

    //개요
    const Mdescription = DesignModal.querySelector('.T-description');
    Mdescription.querySelector('ul>li:nth-of-type(1)').innerHTML=`<strong>제작년도</strong> ${designList[count].date}`

    Mdescription.querySelector('ul>li:nth-of-type(2)').innerHTML=`<strong>기여도</strong> ${designList[count].who}`

    Mdescription.querySelector('p').innerText=designList[count].description;

    //뷰페이지
    const Mdetail= DesignModal.querySelector('.T-detail');
    Mdetail.innerHTML=`<img src=${designList[count].detail} alt=${designList[count].description}>`;

    

    //다음프로젝트
    const MNextImg=DesignModal.querySelector('.T-next img');
    const MNextTitle = DesignModal.querySelector('.T-next .T-next-des h5');
    MNextImg.src= designList[count].nextProject.nextImg;
    MNextTitle.innerText=designList[count].nextProject.nextTitle;
  }


})()