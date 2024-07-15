//상세페이지이벤트
(function(){
  const publishList =[
    //원페이지
    { title:'Ben &Jerry’s',
      date:'2024.05',
      who:'개인 100%',
      link:'https://erin2021.github.io/onepage/',
      description: '벤엔제리즈는 이러이러하며, 이러이러한 가치관을 가지고 이러이러한 활동을 하는 아이스크림기업입니다.',
      detailTool:{
        toolImg1:'img/skill-html.svg',
        toolDes1: '웹표준에 알맞는 구조를 만들었습니다.',
        toolImg2:'img/skill-css.svg',
        toolDes2: '선택자종류를 배우고 활용합니다.data를 받아올 수 있습니다.'
      },
      detailFunction:{
        function1:'무언가 마우스 호버하면 움직입니다.',
        function2:'JS없이 스크롤 이벤트를 구현할 수 있습니다.',
        function3:'다양한 요소들이 날라다닙니다.'
      },
      detailStyle:{
        color:{
          TColor1:'#FFF9E3',
          TColor2:'#45392E'
        },
        typo:{
          Ttypo1:'완주대둔산체',
          Ttypo2:'KCC한빛체'
        }
      }
    },
    //상세페이지
    { title:'Carribian Bay',
      date:'2024.05',
      who:'개인 100%',
      link:'https://erin2021.github.io/waterpark/',
      description: '캐리비안베이는 웹페이지가 존재하지 않은 대한민국최대크기의 워터파크입니다. 웹 기능을 살린 정보페이지를 만들었습니다.',
      detailTool:{
        toolImg1:'img/skill-html.svg',
        toolDes1: '웹표준에 알맞는 구조를 만들었습니다. 메타 태그를 사용하여 후에 이해하기 쉬운 구조를 구축했습니다.',
        toolImg2:'img/skill-css.svg',
        toolDes2: '페이지별로 적절하게 디자인할 수 있습니다.',
        toolImg2:'img/skill-jquery.svg',
        toolDes2: 'scroll event를 사용하여 메뉴나 콘텐츠에 애니메이션 효과를 넣을 수 있습니다.'
      },
      detailFunction:{
        function1:'JS기본문법을 사용하여 카운트다운 기능을 구현할 수 있습니다.',
        function2:'인접선택자를 선택해 아코디언메뉴가 작동합니다.',
        function3:'마우스 호버시 생동감넘치는 애니메이션이 있습니다.'
      },
      detailStyle:{
        color:{
          TColor1:'#1E0036',
          TColor2:'#4A0AD2',
          TColor3:'#FFF59D',
        },
        typo:{
          Ttypo1:'웨이브파도체',
          Ttypo2:'나눔스퀘어AC'
        }
      }
    },
    //반응형페이지
    { title:'Open Tutorials',
      date:'2024.06',
      who:'개인 100%',
      link:'https://erin2021.github.io/Open-Tutorials/',
      description: '생활코딩은 비영리 프로그래밍 교육 사이트입니다. 수업수강을 홍보하면 좋을것같아 랜딩페이지로 제작하게 되었습니다.',
      detailTool:{
        toolImg1:'img/skill-html.svg',
        toolDes1: '웹표준에 알맞는 구조를 만들었습니다. 반응형을 고려하여 div를 사용하여 요소끼리 체계적으로 묶었습니다.',
        toolImg2:'img/skill-css.svg',
        toolDes2: 'media query를 사용하여 반응형을 디자인할 수 있습니다. 가상 클라스를 사용하여 디자인 통일성을 더했습니다.',
        toolImg3:'img/skill-jquery.svg',
        toolDes3: '메뉴 애니메이션 구현하고 스크롤 계산을 하였습니다.',
        toolImg4:'img/skill-js.svg',
        toolDes4: '라이브러리 GSAP을 사용하여 애니메이션 효과를 줄 수 있습니다.',
      },
      detailFunction:{
        function1:'스크롤시 애니메이션이 작동됩니다.',
        function2:'scroll-jacking을 합니다.',
        function3:'모니터-타블릿-모바일마다 화면이 달라집니다.'
      },
      detailStyle:{
        color:{
          TColor1:'#FFF9E3',
          TColor2:'#45392E'
        },
        typo:{
          Ttypo1:'완주대둔산체',
          Ttypo2:'KCC한빛체'
        }
      }
    },
    //적응형페이지
    { title:'SNUH',
      date:'2024.06',
      who:'개인 100%',
      link:'https://erin2021.github.io/adaptive-page/',
      description: '서울대학교병원 모바일 페이지를 디자인하였습니다. 의학정보가 많기에 중요도를 부여하여 디자인했습니다.',
      detailTool:{
        toolImg1:'img/skill-html.svg',
        toolDes1: '기존 페이지에 요소를 분해한 다음 모바일에 적합한 구조를 구성했습니다.',
        toolImg2:'img/skill-css.svg',
        toolDes2: 'text-overflow나 flex를 사용하여 모든 모바일기기에서 같은 비율로 화면이 보일 수 있도록 디자인했습니다.',
        toolImg3:'img/skill-jquery.svg',
        toolDes3: '버튼 토글 시 클라스를 토글하여 애니메이션을 넣을 수 있습니다.',
        toolImg4:'img/skill-js.svg',
        toolDes4: '깊이2 메뉴와 언어선택창을 만들 수 있습니다.',
      },
      detailFunction:{
        function1:'스크롤시 애니메이션이 작동됩니다.',
        function2:'scroll-jacking을 합니다.',
        function3:'모니터-타블릿-모바일마다 화면이 달라집니다.'
      },
      detailStyle:{
        color:{
          TColor1:'#2763BA',
          TColor2:'#333333'
        },
        typo:{
          Ttypo1:'본고딕',
        }
      }
    },
  ];


  //이미지를 누를경우 html 스크롤을 죽인다
  const publishBtn = document.querySelectorAll('.pub-inner>li');
  const publishModal = document.querySelector('#modal');
  let Bigscroll = true;

  publishBtn.forEach((value,count)=>{
    value.addEventListener('click',()=>{
      console.log('눌린것:',count);
      Bigscroll=false;
      if(!Bigscroll){
        //눌렀다. html 죽여
        document.getElementsByTagName('html')[0].style.overflowY='hidden'
        
        //modal띄우기
        const modalTop= document.getElementsByTagName('html')[0].scrollTop;
        publishModal.style.top = `${modalTop}px`
        publishModal.style.display='flex';
        //modal초기화
        publishModal.scrollTop=0;

        //modal닫기 버튼 누르면 다시 원래대로
        const publishClosBtn = publishModal.querySelector('.m-btn');
        publishClosBtn.addEventListener('click',()=>{
          publishModal.style.display='none';
          document.getElementsByTagName('html')[0].style.overflowY='scroll'
        });

        //🔥🔥데이터 시각화
        console.log(publishList[count]);//불러온 데이터



      }
    })
    
  })

})()