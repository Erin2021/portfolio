//상세페이지이벤트-디자인
(function(){
  const designList=[
    { preview:"media/design/g1.png",
      title:"Who am I?",
      date:"2024.03",
      who:"개인 100%",
      description:"더이상 도전을 두려워하지 말자는 다짐을 바탕으로 한 자기 브랜딩 프로젝트입니다.",
      detail:"media/design/detail/g1.png",
      nextProject:{
        nextImg:"media/design/g2.png",
        nextTitle:"Space Journey",
      }
    },
    { preview:"media/design/g2.png",
      title:"Space Journey",
      date:"2024.03",
      who:"개인 100%",
      description:"달을 주제로 한 일러스트를 제작하기 위해 다양한 문화 원형을 활용한 프로젝트 입니다.",
      detail:"media/design/detail/g2.png",
      nextProject:{
        nextImg:"media/design/g3.png",
        nextTitle:"Gym Diary",
      }
    },
    { preview:"media/design/g3.png",
      title:"Gym Diary",
      date:"2024.03",
      who:"개인 100%",
      description:"제 관심분야 중 하나인 운동을 주제로 다이어리 형식 디자인을 해 본 프로젝트입니다.",
      detail:"media/design/detail/g3.png",
      nextProject:{
        nextImg:"media/design/g4.png",
        nextTitle:"KB Nori Card",
      }
    },
    { preview:"media/design/g4.png",
      title:"KB Nori Card",
      date:"2024.03",
      who:"개인 100%",
      description:"국민 노리카드 리뉴얼 소식을 접하고, 해당 카드의 혜택을 이해하여 기존 카드의 이미지를 계승하며 제작한 프로젝트입니다.",
      detail:"media/design/detail/g4.png",
      nextProject:{
        nextImg:"media/design/g5.png",
        nextTitle:"My Protein",
      }
    },
    { preview:"media/design/g5.png",
      title:"My Protein",
      date:"2024.03",
      who:"개인 100%",
      description:"최근에 리브랜딩을 한 스포츠 식품 브랜드인 '마이프로틴' 소식을 알게 되었고, 리브랜딩 의도을 분석하고 광고 배너로 제작해 보았습니다.",
      detail:"media/design/detail/g5.png",
      nextProject:{
        nextImg:"media/design/g6.png",
        nextTitle:"Apex Legends",
      }
    },
    { preview:"media/design/g6.png",
      title:"Apex Legends",
      date:"2024.03",
      who:"개인 100%",
      description:"웹 상 다양한 크기의 배너를 이해하고, 좋아하는 게임인 'Apex Legends'를 분석하여 광고 배너을 제작했습니다.",
      detail:"media/design/detail/g6.png",
      nextProject:{
        nextImg:"media/design/g7.png",
        nextTitle:"Styler Festa!",
      }
    },
    { preview:"media/design/g7.png",
      title:"Styler Festa!",
      date:"2024.03",
      who:"개인 100%",
      description:"차가운 톤의 기존 가전제품 광고에 색을 더해, 보기 편안한 이벤트 페이지로 리디자인한 프로젝트입니다.",
      detail:"media/design/detail/g7.png",
      nextProject:{
        nextImg:"media/design/g8.png",
        nextTitle:"Summer Sale",
      }
    },
    { preview:"media/design/g8.png",
      title:"Summer Sale",
      date:"2024.03",
      who:"개인 100%",
      description:"여름 기념 세일 홍보 팝업창입니다. 여름이란 단어를 강조하여 팝업창을 제작했습니다.",
      detail:"media/design/detail/g8.png",
      nextProject:{
        nextImg:"media/design/g9.png",
        nextTitle:"We are Hiring",
      }
    },
    { preview:"media/design/g9.png",
      title:"We are Hiring",
      date:"2024.03",
      who:"개인 100%",
      description:"구인 팝업창입니다. 문구와 회사명을 보고 예술업계임을 유추할 수 있었고, 그에 알맞게 실험적인 색체와 글씨체를 사용했습니다.",
      detail:"media/design/detail/g9.png",
      nextProject:{
        nextImg:"media/design/g10.png",
        nextTitle:"Announcement",
      }
    },
    { preview:"media/design/g10.png",
      title:"Announcement",
      date:"2024.03",
      who:"개인 100%",
      description:"진료 시간 변경을 알리는 병원 팝업창입니다. 환자를 대상을 했기 때문에 부드러운 스타일로 디자인했으며, 중요 내용에만 강한 색조를 사용했습니다.",
      detail:"media/design/detail/g10.png",
      nextProject:{
        nextImg:"media/design/g11.png",
        nextTitle:"Business Ads",
      }
    },
    { preview:"media/design/g11.png",
      title:"Business Ads",
      date:"2024.03",
      who:"개인 100%",
      description:"회사를 홍보하는 포스터입니다. 회사의 이념을 이해하고 기존 포스터의 성격을 분석하여, 중요도를 다시 설정하여 몽환적인 분위기로 리디자인 했습니다.",
      detail:"media/design/detail/g11.png",
      nextProject:{
        nextImg:"media/design/g1.png",
        nextTitle:"Who am I?",
      }
    },
    { preview:"media/design/g12.png",
      title:"LG Audio",
      date:"2024.03",
      who:"개인 100%",
      description:"LG 오디오 판매 사이트를 리디자인했습니다. 음악 장르와 인물을 넣어 문화 원형적인 이미지를 추가하였으며, 그리드 형식 디자인을 사용했습니다.",
      detail:"media/design/detail/g12.png",
      nextProject:{
        nextImg:"media/design/g13.png",
        nextTitle:"Canon Event",
      }
    },
    { preview:"media/design/g13.png",
      title:"Canon Event",
      date:"2024.03",
      who:"개인 100%",
      description:"사진촬영 이벤트 홍보 페이지를 리디자인했습니다. 증정 이벤트이기에 밝은 색채를 사용하여 활발한 인상을 주었습니다. 재미를 표현하기 위해 동적인 화면을 구성했습니다.",
      detail:"media/design/detail/g13.png",
      nextProject:{
        nextImg:"media/design/g14.png",
        nextTitle:"Trampoline",
      }
    },
    { preview:"media/design/g14.png",
      title:"Trampoline",
      date:"2024.03",
      who:"개인 100%",
      description:"브랜드 소개 페이지를 리디자인했습니다. 해당 브랜드가 역동성을 강조한다는 것을 이해하고, 이를 서커스 공중곡예와 연결하여 활발한 분위기를 연출했습니다.",
      detail:"media/design/detail/g14.png",
      nextProject:{
        nextImg:"media/design/g15.png",
        nextTitle:"Soul & Media",
      }
    },
    { preview:"media/design/g15.png",
      title:"Soul & Media",
      date:"2024.04",
      who:"개인 100%",
      description:"헤드폰 홍보 페이지를 리디자인했습니다. 헤드폰의 주 사용자층을 고려하여, 글리치 효과를 사용했습니다. 그래서 단순한 그리드 스타일에 트랜디한 느낌을 주었습니다.",
      detail:"media/design/detail/g15.png",
      nextProject:{
        nextImg:"media/design/g16.png",
        nextTitle:"SNU High School",
      }
    },
    { preview:"media/design/g16.png",
      title:"SNU High School",
      date:"2024.04",
      who:"개인 100%",
      description:"교육기관 홈페이지를 리디자인했습니다. 교육기관 특성상 다양한 정보가 많기 때문에, 이 정보를 먼저 학생, 학부모, 교직원으로 나누어 3분류로 구성했습니다. 또한, 간결하게 디자인하여 사용자가 원하는 정보를 쉽게 찾을 수 있도록 했습니다.",
      detail:"media/design/detail/g16.png",
      nextProject:{
        nextImg:"media/design/g17.png",
        nextTitle:"Xexymix",
      }
    },
    { preview:"media/design/g17.png",
      title:"Xexymix",
      date:"2024.03",
      who:"개인 100%",
      description:"스포츠 의류 판매 사이트를 리디자인했습니다. '젝시믹스'의 강점인 레깅스를 메인에 배치하여 브랜드의 성격을 부각시켰습니다. 또한, 중요도 없이 나열되어 있던 기존 페이지의 요소를 최소화하여, 간결한 메인 페이지를 구성했습니다.",
      detail:"media/design/detail/g17.png",
      nextProject:{
        nextImg:"media/design/g18.png",
        nextTitle:"Epic Games",
      }
    },
    { preview:"media/design/g18.png",
      title:"Epic Games",
      date:"2024.04",
      who:"개인 100%",
      description:"소프트웨어 판매 사이트 '에픽게임즈'의 모바일 버전을 디자인했습니다. 주 사용층인 게이머를 고려하여 다크 모드로 디자인하고, 강조할 부분에만 하이라이트를 적용했습니다. 또한, 검색 기능을 개선하여 더 자세한 검색이 가능하도록 리디자인했습니다.",
      detail:"media/design/detail/g18.png",
      nextProject:{
        nextImg:"media/design/g12.png",
        nextTitle:"LG Audio",
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