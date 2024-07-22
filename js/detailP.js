//상세페이지이벤트-퍼블리싱
(function(){
  const publishList =[
    //원페이지
    { githref:'https://github.com/Erin2021/onepage',
      preview:'img/preview1.PNG',
      title:'Ben & Jerry’s',
      date:'2024.05',
      who:'개인 100%',
      link:'https://erin2021.github.io/onepage/',
      description: '벤엔제리스는 미국에 있는 아이스크림 제조 회사입니다. 사회 친화적인 기업 이미지를 나타내기 위해 부드러운 색과 도형을 사용해서 제작했습니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg'],
        toolDes:['웹표준에 알맞는 구조를 만들었습니다.','다양한 선택자를 사용할 수 있습니다. 태그의 data 요소를 받아올 수 있습니다.']
      },
      detailFunction:['스크롤바와 마우스의 디자인을 변형할 수 있습니다.','animation-timeline과 animation-duration을 사용하여 JS없이 스크롤이벤트를 구현할 수 있습니다.','그리드를 사용하여 화면 구현을 할 수 있습니다.'],
      detailStyle:{
        color:['#FFF9E3','#45392E'],
        typo:['완주대둔산체','KCC한빛체'],
        typoFamily:['TTWanjudaedunsancheB','KCC-Hanbit'],
      },
      shortdes:{
        photo:['preview1.PNG','p1-1.PNG','p1-2.PNG','p1-3.PNG','p1-4.PNG','p1-5.PNG'],
        photoDes:['신상제품홍보 메인비주얼','기업이미지 소개','회사이념 소개','제품종류 소개','단종제품 소개','기업 소식']
      },
      nextProject:{
        nextImg:"img/preview2.PNG",
        nextTitle:"Carribian Bay",
      }

    },
    //상세페이지
    { githref:'https://github.com/Erin2021/waterpark',
      preview:'img/preview2.PNG',
      title:'Carribian Bay',
      date:'2024.05',
      who:'개인 100%',
      link:'https://erin2021.github.io/waterpark/',
      description: '캐리비안베이는 대한민국의 유명 워터파크입니다. 웹페이지가 존재하지 않기에, 워터파크에 관한 정보를 전달하는 10페이지 분량의 웹사이트를 제작해보았습니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg','img/skill-jquery.svg'],
        toolDes:['메타 태그를 사용하여 나중에 쉽게 알아볼 수 있도록 구조화했습니다.','정보의 성격을 이해하고 그에 맞는 구성을 디자인 할 수 있습니다.','scroll event를 사용하여 메뉴나 콘텐츠에 애니메이션 효과를 넣을 수 있습니다.']
      },
      detailFunction:['카운트다운 기능을 구현할 수 있습니다.','인접 선택자를 활용해 아코디언 메뉴를 제작할 수 있습니다.','depth1 크기의 메뉴를 구성할 수 있습니다.'],
      detailStyle:{
        color:['#002646','#FF6A07','#277BC0'],
        typo:['속초바다돋음체','프리텐다드'],
        typoFamily:['SokchoBadaDotum','Pretendard-Regular'],
      },
      shortdes:{
        photo:['p2-1.png','p2-2.png','p2-3.png','p2-4.png','p2-5.png','p2-6.png'],
        photoDes:['메인 - 사이트맵 유사 기능','캐비스토리 - 시설 소개','오늘의 파크 - 시설현황 정보디자인','이용가이드','이달의 할인','자주 묻는 질문']
      },
      nextProject:{
        nextImg:"img/preview3.PNG",
        nextTitle:"Open Tutorials",
      }
    },
    //반응형페이지
    { githref:'https://github.com/Erin2021/Open-Tutorials',
      preview:'img/preview3.PNG',
      title:'Open Tutorials',
      date:'2024.06',
      who:'개인 100%',
      link:'https://erin2021.github.io/Open-Tutorials/',
      description: '생활코딩은 비영리 프로그래밍 교육 사이트입니다. 교육 참여를 증진시키기 위해 랜딩 페이지를 제작하고, 기존의 무채색 이미지를 색감 있게 변환했습니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg','img/skill-jquery.svg','img/skill-js.svg'],
        toolDes:['반응형을 고려한 구조를 구축할 수 있습니다.','media query를 사용하여 반응형에 알맞는 디자인을 할 수 있습니다.<br>가상 클라스를 사용하여 디자인 시스템을 체계적으로 정할 수 있습니다.','메뉴 애니메이션 구현하고 스크롤 수치을 활용할 수 있습니다.','라이브러리 GSAP를 사용하여 애니메이션 등장 효과를 줄 수 있습니다.']
      },
      detailFunction:['스크롤시 애니메이션이 작동됩니다.','scroll-jacking을 합니다.','모니터-타블릿-모바일마다 화면이 달라집니다.'],
      detailStyle:{
        color:['#1E0036','#4A0AD2','#FFF59D'],
        typo:['웨이브파도체','나눔스퀘어AC'],
        typoFamily:['WavvePADO-Regular','NanumSquareAc'],
      },
      shortdes:{
        photo:['p3-1.PNG','p3-2.PNG','p3-3.png','p3-4.PNG','p3-5.PNG','p3-6.PNG'],
        photoDes:['웹페이지 안내','교육의 변화 설명','핵심 프로그램 소개1','핵심 프로그램 소개2','핵심 프로그램 소개3','참여 유도 화면']
      },
      nextProject:{
        nextImg:"img/preview4.PNG",
        nextTitle:"SNUH",
      }
    },
    //적응형페이지
    { githref:'https://github.com/Erin2021/adaptive-page',
      preview:'img/preview4.PNG',
      title:'SNUH',
      date:'2024.06',
      who:'개인 100%',
      link:'https://erin2021.github.io/adaptive-page/',
      description: '기존의 서울대학교병원 웹페이지를 바탕으로 적응형 모바일 페이지를 작업했습니다. 메인 화면의 콘텐츠 중 중요도를 설정한 후, 진료 관련 요소를 재배치했습니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg','img/skill-jquery.svg','img/skill-js.svg'],
        toolDes:['기존 페이지 구조를 분해한 다음 모바일에 적합한 구조를 구성했습니다.','text-overflow와 flex를 사용하여 다양한 모바일 기기에서 같은 비율로 화면이 보일 수 있도록 디자인했습니다.','classList를 통해 토글 애니메이션을 넣을 수 있습니다.','깊이2 크기의 메뉴와 언어 선택창을 만들 수 있습니다.']
      },
      detailFunction:['다양한 화면 크기에도 비율이 변하지 않습니다.','방대한 양의 메뉴가 보기 쉽게 정돈되어 있습니다.'],
      detailStyle:{
        color:['#2763BA','#333333'],
        typo:['본고딕'],
        typoFamily:['Noto Sans KR'],
      },
      shortdes:{
        photo:['p4-1.PNG','p4-2.PNG','p4-3.PNG','p4-4.PNG','p4-5.PNG'],
        photoDes:['메인 화면','메뉴 및 언어 설정','진료 검색 및 병원 소식','건강 정보','위치 안내']
      },
      nextProject:{
        nextImg:"img/preview1.PNG",
        nextTitle:"Ben &Jerry’s",
      }
    },
  ];


  //이미지를 누를경우 html 스크롤을 죽인다
  const publishBtn = document.querySelectorAll('.pub-inner>li');
  const publishModal = document.querySelector('#modalP');
  let Bigscroll = true;

  publishBtn.forEach((value,count)=>{
    value.addEventListener('click',()=>{
      let progressCount=count;//열린순서들어감
      Bigscroll=false;
      if(!Bigscroll){
        //html 스크롤 가리기
        document.getElementsByTagName('html')[0].style.overflowY='hidden'
        
        //modal띄우기
        const modalTop= document.getElementsByTagName('html')[0].scrollTop;
        publishModal.style.top = `${modalTop}px`
        publishModal.style.display='flex';

        //데이터 시각화
        PStructure(count);

        //다음 프로젝트 눌렀을때 다음 데이터 불러와야해
        //이벤트 중첩제거필요
        const MNext=publishModal.querySelector('.T-next .T-next-inner');
        if(MNext.clickHandler){//이미실행된 이벤트가 있다면 초기화
          MNext.removeEventListener('click', MNext.clickHandler);
        }
        MNext.clickHandler = () =>{
          progressCount+=1;
          if(progressCount>=publishList.length){progressCount=0;}
          PStructure(progressCount);
        }
        MNext.addEventListener('click', MNext.clickHandler);
      }
    })
    
  })

  function PStructure(count){
    //modal위치 초기화
    publishModal.scrollTop=0;

    //✨✨모달 내용 애니메이션 등장
    const Mcontent=publishModal.querySelector('.modal-inner');
    gsap.from(Mcontent,{opacity:0, y:50,duration:1});

    //🔥🔥데이터 시각화

    //닫기버튼
    //modal닫기-버튼 누르면 다시 원래대로
    const publishClosBtn = publishModal.querySelectorAll('.m-btn li');
    //닫기
    publishClosBtn[0].addEventListener('click',()=>{
      publishModal.style.display='none';
      Bigscroll = true;
      document.getElementsByTagName('html')[0].style.overflowY='scroll'
    });
    //깃허브이동
    if(publishClosBtn[1].clickHandler){
      publishClosBtn[1].removeEventListener('click',publishClosBtn[1].clickHandler)
    }
    publishClosBtn[1].clickHandler=()=>{
      window.open(publishList[count].githref);
    }
    publishClosBtn[1].addEventListener('click',publishClosBtn[1].clickHandler)

    //프로젝트
    if(publishClosBtn[2].clickHandler){
      publishClosBtn[2].removeEventListener('click',publishClosBtn[2].clickHandler)
    }
    publishClosBtn[2].clickHandler=()=>{
      window.open(publishList[count].link);
    }
    publishClosBtn[2].addEventListener('click',publishClosBtn[2].clickHandler)

    //프리뷰
    const MThumbnail = publishModal.querySelector('.m-thumbnail img');
    MThumbnail.src=publishList[count].preview;

    //제목
    const Mtitle = publishModal.querySelector('.M-title');
    Mtitle.innerText=publishList[count].title;

    //개요
    const Mdescription = publishModal.querySelector('.T-description');
    Mdescription.querySelector('ul>li:nth-of-type(1)').innerHTML=`<strong>제작년도</strong> ${publishList[count].date}`

    Mdescription.querySelector('ul>li:nth-of-type(2)').innerHTML=`<strong>기여도</strong> ${publishList[count].who}`

    Mdescription.querySelector('ul>li:nth-of-type(3)').innerHTML=`<strong>외부링크</strong><a href=${publishList[count].link} target="_blank"> 바로가기 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`

    Mdescription.querySelector('p').innerText=publishList[count].description;

    //디테일-사용툴
    const MdetailTool = publishModal.querySelector('.T-detail-tool');
    const MTool= publishList[count].detailTool.toolImg;
    const MToolDes = publishList[count].detailTool.toolDes;
    MdetailTool.innerHTML='';//사용툴li초기화
    
    for(let i=0;i<MTool.length;i++){
      const listTool =document.createElement("li");
      listTool.innerHTML=`<img src=${MTool[i]} alt=${MTool[i]}>
            <p>${MToolDes[i]}</p>`;
      MdetailTool.appendChild(listTool);
    }

    //디테일-주요기능
    const MdetailFunction = publishModal.querySelector('.T-detail-function');
    const MFunction =publishList[count].detailFunction;
    MdetailFunction.innerHTML='';//주요기능li초기화
    for(let i =0;i<MFunction.length;i++){
      const listFunction = document.createElement("li");
      listFunction.innerText=MFunction[i];
      MdetailFunction.appendChild(listFunction);
    }
    

    //디테일-스타일
    //a.color
    const MdetailColor =publishModal.querySelector('.T-color')
    const MColor= publishList[count].detailStyle.color;
    MdetailColor.innerHTML='';

    for(let i =0;i<MColor.length;i++){
      const listColor = document.createElement("li");
      listColor.style.backgroundColor=MColor[i];
      listColor.innerHTML=`<p>${MColor[i]}</p>`;
      MdetailColor.appendChild(listColor);
    }

    //b.interface
    const MdetailTypo = publishModal.querySelector('.T-typo');
    const MTypo = publishList[count].detailStyle.typo;
    const MTypoFamily = publishList[count].detailStyle.typoFamily;
    MdetailTypo.innerHTML='';

    for(let i=0;i<MTypo.length;i++){
      const listTypo= document.createElement("li");
      listTypo.innerText =MTypo[i];
      //폰트적용
      listTypo.style.fontFamily= `${MTypoFamily[i]},sans-serif`;
      MdetailTypo.appendChild(listTypo);
    }

    //포토
    const MPhoto = publishModal.querySelector('.T-photo');
    const MPhotoImg=publishList[count].shortdes.photo;
    const MPhotoDes=publishList[count].shortdes.photoDes;
    MPhoto.innerHTML='';

    for(let i=0;i< MPhotoImg.length;i++){
      const listPhoto =document.createElement("li");
      listPhoto.innerHTML = `<div><img src= img/${MPhotoImg[i]} alt=${MPhotoDes[i]}></div><p>${MPhotoDes[i]}</p>`;
      MPhoto.appendChild(listPhoto);
    }

    //다음프로젝트
    const MNextImg=publishModal.querySelector('.T-next img');
    const MNextTitle = publishModal.querySelector('.T-next .T-next-des h5');
    MNextImg.src= publishList[count].nextProject.nextImg;
    MNextTitle.innerText=publishList[count].nextProject.nextTitle;
  }

  //modal일정 스크롤시, 닫기 버튼 변화
  const closeM=publishModal.querySelector('nav');
  publishModal.addEventListener('scroll',()=>{
    if(publishModal.scrollTop>200){
      closeM.classList.add('active')
    }else{
      closeM.classList.remove('active')
    }
  })
})()