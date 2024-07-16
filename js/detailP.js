//상세페이지이벤트-퍼블리싱
(function(){
  const publishList =[
    //원페이지
    { preview:'img/preview1.PNG',
      title:'Ben &Jerry’s',
      date:'2024.05',
      who:'개인 100%',
      link:'https://erin2021.github.io/onepage/',
      description: '벤엔제리즈는 이러이러하며, 이러이러한 가치관을 가지고 이러이러한 활동을 하는 아이스크림기업입니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg'],
        toolDes:['웹표준에 알맞는 구조를 만들었습니다.','선택자종류를 배우고 활용합니다.data를 받아올 수 있습니다.']
      },
      detailFunction:['무언가 마우스 호버하면 움직입니다.','JS없이 스크롤 이벤트를 구현할 수 있습니다.','다양한 요소들이 날라다닙니다.'],
      detailStyle:{
        color:['#FFF9E3','#45392E'],
        typo:['완주대둔산체','KCC한빛체'],
        typoFamily:['TTWanjudaedunsancheB','KCC-Hanbit'],
      },
      shortdes:{
        photo:['p1-1.PNG','p1-2.PNG','p1-3.PNG','p1-4.PNG','p1-5.PNG'],
        photoDes:['설명1','설명2','설명3','설명4','설명5']
      },
      nextProject:{
        nextImg:"img/preview2.PNG",
        nextTitle:"Carribian Bay",
      }

    },
    //상세페이지
    { preview:'img/preview2.PNG',
      title:'Carribian Bay',
      date:'2024.05',
      who:'개인 100%',
      link:'https://erin2021.github.io/waterpark/',
      description: '캐리비안베이는 웹페이지가 존재하지 않은 대한민국최대크기의 워터파크입니다. 웹 기능을 살린 정보페이지를 만들었습니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg','img/skill-jquery.svg'],
        toolDes:['웹표준에 알맞는 구조를 만들었습니다. 메타 태그를 사용하여 후에 이해하기 쉬운 구조를 구축했습니다.','페이지별로 적절하게 디자인할 수 있습니다.','scroll event를 사용하여 메뉴나 콘텐츠에 애니메이션 효과를 넣을 수 있습니다.']
      },
      detailFunction:['JS기본문법을 사용하여 카운트다운 기능을 구현할 수 있습니다.','인접선택자를 선택해 아코디언메뉴가 작동합니다.','마우스 호버시 생동감넘치는 애니메이션이 있습니다.'],
      detailStyle:{
        color:['#002646','#FF6A07','#277BC0'],
        typo:['속초바다돋음체','프리텐다드'],
        typoFamily:['SokchoBadaDotum','Pretendard-Regular'],
      },
      shortdes:{
        photo:['p2-1.PNG','p2-2.PNG','p2-3.PNG','p2-4.PNG','p2-5.PNG','p2-6.PNG'],
        photoDes:['설명1','설명2','설명3','설명4','설명5','설명6']
      },
      nextProject:{
        nextImg:"img/preview3.PNG",
        nextTitle:"Open Tutorials",
      }
    },
    //반응형페이지
    { preview:'img/preview3.PNG',
      title:'Open Tutorials',
      date:'2024.06',
      who:'개인 100%',
      link:'https://erin2021.github.io/Open-Tutorials/',
      description: '생활코딩은 비영리 프로그래밍 교육 사이트입니다. 수업수강을 홍보하면 좋을것같아 랜딩페이지로 제작하게 되었습니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg','img/skill-jquery.svg','img/skill-js.svg'],
        toolDes:['웹표준에 알맞는 구조를 만들었습니다. 반응형을 고려하여 div를 사용하여 요소끼리 체계적으로 묶었습니다.','media query를 사용하여 반응형을 디자인할 수 있습니다. 가상 클라스를 사용하여 디자인 통일성을 더했습니다.','메뉴 애니메이션 구현하고 스크롤 계산을 하였습니다.','라이브러리 GSAP을 사용하여 애니메이션 효과를 줄 수 있습니다.']
      },
      detailFunction:['스크롤시 애니메이션이 작동됩니다.','scroll-jacking을 합니다.','모니터-타블릿-모바일마다 화면이 달라집니다.'],
      detailStyle:{
        color:['#1E0036','#4A0AD2','#FFF59D'],
        typo:['웨이브파도체','나눔스퀘어AC'],
        typoFamily:['WavvePADO-Regular','NanumSquareAc'],
      },
      shortdes:{
        photo:['p3-1.PNG','p3-2.PNG','p3-3.PNG','p3-4.PNG','p3-5.PNG','p3-6.PNG'],
        photoDes:['설명1','설명2','설명3','설명4','설명5','설명6']
      },
      nextProject:{
        nextImg:"img/preview4.PNG",
        nextTitle:"SNUH",
      }
    },
    //적응형페이지
    { preview:'img/preview4.PNG',
      title:'SNUH',
      date:'2024.06',
      who:'개인 100%',
      link:'https://erin2021.github.io/adaptive-page/',
      description: '서울대학교병원 모바일 페이지를 디자인하였습니다. 의학정보가 많기에 중요도를 부여하여 디자인했습니다.',
      detailTool:{
        toolImg:['img/skill-html.svg','img/skill-css.svg','img/skill-jquery.svg','img/skill-js.svg'],
        toolDes:['기존 페이지에 요소를 분해한 다음 모바일에 적합한 구조를 구성했습니다.','text-overflow나 flex를 사용하여 모든 모바일기기에서 같은 비율로 화면이 보일 수 있도록 디자인했습니다.','버튼 토글 시 클라스를 토글하여 애니메이션을 넣을 수 있습니다.','깊이2 메뉴와 언어선택창을 만들 수 있습니다.']
      },
      detailFunction:['스크롤시 애니메이션이 작동됩니다.','scroll-jacking을 합니다.','모니터-타블릿-모바일마다 화면이 달라집니다.'],
      detailStyle:{
        color:['#2763BA','#333333'],
        typo:['본고딕'],
        typoFamily:['Noto Sans KR'],
      },
      shortdes:{
        photo:['p4-1.PNG','p4-2.PNG','p4-3.PNG','p4-4.PNG','p4-5.PNG'],
        photoDes:['설명1','설명2','설명3','설명4','설명5']
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
      //console.log('눌린것:',count);
      Bigscroll=false;
      if(!Bigscroll){
        //눌렀다. html 죽여
        document.getElementsByTagName('html')[0].style.overflowY='hidden'
        
        //modal띄우기
        const modalTop= document.getElementsByTagName('html')[0].scrollTop;
        publishModal.style.top = `${modalTop}px`
        publishModal.style.display='flex';
        

        //modal닫기-버튼 누르면 다시 원래대로
        const publishClosBtn = publishModal.querySelector('.m-btn');
        publishClosBtn.addEventListener('click',()=>{
          publishModal.style.display='none';
          Bigscroll = true;
          document.getElementsByTagName('html')[0].style.overflowY='scroll'
        });

        PStructure(count);

        //다음 프로젝트 눌렀을때 다음 데이터 불러와야해
        const MNext=publishModal.querySelector('.T-next');
        MNext.addEventListener('click',()=>{
          count+=1;
          if(count>=publishList.length){count=0;}
          PStructure(count);
        })

      }
    })
    
  })

  function PStructure(count){
    //modal위치 초기화
    publishModal.scrollTop=0;

    //🔥🔥데이터 시각화
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
          listColor.innerText=MColor[i];
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

})()