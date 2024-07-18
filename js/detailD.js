//상세페이지이벤트-디자인
(function(){
  const designList=[
    { preview:"media/design/g1.png",
      title:"개인 로고 디자인하기",
      date:"2024.03",
      who:"개인 100%",
      description:"도전을 두려워하지 말자는 다짐을 바탕으로 한 자기 브랜딩 프로젝트입니다.",
      detail:"media/design/detail/g1.png",
      nextProject:{
        nextImg:"media/design/g2.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g2.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g2.png",
      nextProject:{
        nextImg:"media/design/g3.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g3.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g3.png",
      nextProject:{
        nextImg:"media/design/g4.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g4.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g4.png",
      nextProject:{
        nextImg:"media/design/g5.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g5.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g5.png",
      nextProject:{
        nextImg:"media/design/g6.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g6.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g6.png",
      nextProject:{
        nextImg:"media/design/g7.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g7.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g7.png",
      nextProject:{
        nextImg:"media/design/g8.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g8.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g8.png",
      nextProject:{
        nextImg:"media/design/g9.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g9.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g9.png",
      nextProject:{
        nextImg:"media/design/g10.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g10.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g10.png",
      nextProject:{
        nextImg:"media/design/g11.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g11.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g11.png",
      nextProject:{
        nextImg:"media/design/g1.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g12.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g12.png",
      nextProject:{
        nextImg:"media/design/g13.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g13.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g13.png",
      nextProject:{
        nextImg:"media/design/g14.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g14.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g14.png",
      nextProject:{
        nextImg:"media/design/g15.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g15.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g15.png",
      nextProject:{
        nextImg:"media/design/g16.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g16.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g16.png",
      nextProject:{
        nextImg:"media/design/g17.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g17.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g17.png",
      nextProject:{
        nextImg:"media/design/g18.png",
        nextTitle:"우주일러스트",
      }
    },
    { preview:"media/design/g18.png",
      title:"명함만들기",
      date:"2024.03",
      who:"개인 100%",
      description:"내가 좀 쩔어서 자기브랜드를 만들려고 했음",
      detail:"media/design/detail/g18.png",
      nextProject:{
        nextImg:"media/design/g12.png",
        nextTitle:"우주일러스트",
      }
    },

  ]


  const DesignBtn = document.querySelectorAll('.d-thumbnail');
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
        //이벤트 중첩제거필요
        const MNext=DesignModal.querySelector('.T-next');
        if(MNext.clickHandler){//이미실행된 이벤트가 있다면 초기화
          MNext.removeEventListener('click', MNext.clickHandler);
        }
        MNext.clickHandler = ()=>{
          progressCount+=1;
          //12~18
          if(progressCount>=0 && progressCount<=11){
            if(progressCount==11){
              progressCount=0;
            }
          }else if(progressCount>=11&&progressCount<=18){
            if(progressCount==18){
              progressCount=11;
            }
          }
          DStructure(progressCount);
        }
        MNext.addEventListener('click', MNext.clickHandler);      
      }
    })
  })


  function DStructure(count){
    //modal위치 초기화
    DesignModal.scrollTop=0;

    //✨✨모달 내용 애니메이션 등장
    const Mcontent=DesignModal.querySelector('.modal-inner');
    gsap.from(Mcontent,{opacity:0, duration:1});


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