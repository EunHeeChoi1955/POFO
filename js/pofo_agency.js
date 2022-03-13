(function($){
    

    const Agency = {
        init:function(){//메소드 (함수)
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
         },
         parallax:function(){
   

            // 객체화 : 패럴럭스의 모든 섹션에서 발생되는 변수 충돌 피하기 위해서 
            const scrollEvent = {
               init: function(){
                  this.header();
                  this.section2();
                  this.section3();
               },
               header : function(){
                     // 스크롤 이벤트
                     // 현재스크롤값(newScroll) newScr
                     // 이전스크롤값(oldScroll) oldScr            
                     // 방향을 판단
                     let newScr = $(window).scrollTop(); // 위에 배치
                     let oldScr = newScr;                // 아래에 배치
                     let result = '';


                     $(window).scroll(function(){
                        newScr = $(window).scrollTop();
                        //스크롤 값 비교
                        //console.log('newScr :'+ newScr, 'oldScr:' + oldScr);
                        
                        result = (newScr-oldScr) > 0 ? "DOWN":"UP";  //내려가면 DOWN 리턴, 올라가면 UP 리턴
                        //console.log( result );
                        if(result=="DOWN"){
                           //console.log('스크롤이 아래로 내려가고 있다 헤더영역을 위로 올려서 숨겨라!');
                           $('#header').addClass('addParallaxUp');
                           $('#header').removeClass('addParallaxDown72');
                           $('#header').removeClass('addParallaxDown60');
                        }
                        if(result=="UP"){
                           //console.log('스크롤이 위로 올라가고 있다  헤더영역을 아래로 내려서 보여라!');
                           $('#header').removeClass('addParallaxUp');
                           $('#header').removeClass('addParallaxDown72');
                           $('#header').addClass('addParallaxDown60');

                           if($(window).scrollTop()==0){ //top이 0일때 60에서 72로 늘어나라
                              $('#header').removeClass('addParallaxDown60');
                              $('#header').addClass('addParallaxDown72');
                           }
                        }
                     
                        oldScr = newScr; 
                     });
               },
               section2: function(){
                 
                  // 타이틀 누구.title 맨위에서 타이틀까지 간격(offset().top) 스크롤 탑값 .scrollTop 구하기
                  // console.log( '$(\'.title\').offset().top :', $('#section2 .title').offset().top );
                  // console.log( '$(window).height() :', $('#section2 .title').offset().top - $(window).height() );
                  // 타이틀 탑값 위치를 창높이 만큼 빼주고 미리 애니메이션이 수행 되도록 계산

                  const titT = $('#section2 .title').offset().top;
                  let winH = $(window).height();
                  let titTop = titT - winH; // 윈도우의 스크롤 탑값이 여기에 도달하면(if ~ then) 애니메이션 구현 
                  
                  // 윈도우.스크롤 이벤트  scroll(); 메서드 : 스크롤 값이 발생이 되어야 구현된다.
                  $(window).scroll(function(){
                     //console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){  //스크롤탑값이 130px 이상이면 구현해라 애니메이션을  addClass
                        //섹션2 선택자에 클래스를 추가해라 addClass #section2 .addParallax
                        $('#section2').addClass('addParallax');

                     }
                     if( $(window).scrollTop() == 0 ){  // 맨위 스크롤 탑값이 0이면 추가된 클래스 삭제
                        //섹션2 선택자에 클래스를 추가해라 addClass #section2 .addParallax
                        $('#section2').removeClass('addParallax'); //초기화 되서 스크롤 넘기면 반복적으로 됌

                     }



                  }); 




               },
               section3: function(){
                 
                 
                  const titT = $('#section3 .title').offset().top;
                  let winH = $(window).height();
                  let titTop = titT - winH; // 윈도우의 스크롤 탑값이 여기에 도달하면(if ~ then) 애니메이션 구현 
                  
                  // 윈도우.스크롤 이벤트  scroll(); 메서드 : 스크롤 값이 발생이 되어야 구현된다.
                  $(window).scroll(function(){
                     //console.log('$(window).scrollTop():',$(window).scrollTop());
                     if( $(window).scrollTop() >= titTop ){  //스크롤탑값이 130px 이상이면 구현해라 애니메이션을  addClass
                        //섹션3 선택자에 클래스를 추가해라 addClass #section3 .addParallax
                        $('#section3').addClass('addParallax');

                     }
                     if( $(window).scrollTop() == 0 ){  // 맨위 스크롤 탑값이 0이면 추가된 클래스 삭제
                        //섹션3 선택자에 클래스를 추가해라 addClass #section3 .addParallax
                        $('#section3').removeClass('addParallax'); //초기화 되서 스크롤 넘기면 반복적으로 됌

                     }



                  }); 




               }
               
            }
            
            scrollEvent.init();

         },
         header:function(){
            const container = $('#header .container');
            const mainBtn   = $('#header .main-btn');
            const sub       = $('#header .sub');
            const subBtn    = $('#header .sub-btn');
            const subSub    = $('#header .sub-sub');
            

            //메인버튼
            mainBtn.on({
                mouseenter: function(){
                     sub.stop().fadeOut(0);
                     $(this).next().stop().fadeIn(300);
                     mainBtn.removeClass('addDeco');//이전 추가된 클래스 삭제
                     $(this).addClass('addDeco');
                }
            });

            //서브버튼
            subBtn.on({
                mouseenter: function(){
                     subSub.stop().fadeOut(0);
                     $(this).next().stop().fadeIn(300);
                }
            });
            //마우스가 헤더안에 컨테이너 영역 범위를 벗어나면(떠나면)mouseleave
            //어디를 - 헤더안에 컨테이너 선택자
            //그러면 모든 서브메뉴가 사라진다.
            container.on({
               mouseleave: function(){
                  sub.stop().fadeOut(300);
                  subSub.stop().fadeOut(300);
                  mainBtn.removeClass('addDeco');
               }
            }); 
         },
         section1:function(){

            const slideWrap      = $('.slide-wrap');
            const slideContainer = $('.slide-container');
            let   cnt            = 0;
            let   setId          = 0;
            let   setId2         = 0;
            let   swipestart     = null;
            let   swipeEnd       = null;
            let   count          = 0;

            let   dragStart      = null; // 슬라이드 마지막이 처음에서 왼쪽으로 이동된 상태 값을 빼주고 시작
            let   dragEnd        = null; 
            let   mouseDown      = null; // 반드시 마우스가 다우된 상태를판단 다운이면 tru, 업이면 false



            //1.메인슬라이드 함수
            function mainSlide(){        
                // slideWrap.stop().animate({left:(-100*cnt) + '%'});       
               slideWrap.stop().animate( {left:(-1903*cnt)},600, 'easeInOutExpo',function(){
                  if(cnt>2){cnt=0}  //다음슬라이드 롤링
                  if(cnt<0){cnt=2}  //이전슬라이드 롤링
                  slideWrap.stop().animate( {left:(-1903*cnt)},0)
               });
            }

            //2.다음카운트 함수
            function nextCount(){
               cnt++;
               mainSlide();
            }
            //2.이전카운트 함수
            function prevCount(){
               cnt--;
               mainSlide();
            }
            //3.자동타이머 함수
            function autoTimer(){
               setId = setInterval(nextCount, 3000);  //함수호출하고 3초 후에 실행
               //console.log('setId', setId);
            }

            autoTimer();
            
            //4. 마우스 터치 스와이프
            slideContainer.on({
                  mousedown: function(event){
                     //터치스와이프 시작 포지션
                     swipestart = event.clientX;

                     dragStart  = event.clientX - slideWrap.offset().left - 1903;
                     mouseDown  = true;//드래그 시작임을 표시
                     timerCount(); //터치시작하면 타이머 카운트 실행

                  },//mousedown 끝
                  mouseup: function(event){
                     swipeEnd = event.clientX;
                     mouseDown  = false; //드래그 끝
                     if( swipestart-swipeEnd > 0 ){//다음슬라이드                     
                        nextCount();
                     }
                     if( swipestart-swipeEnd < 0 ){   // 이전슬라이드                    
                        prevCount();
                  }
              
               },// mouseup 끝
               mousemove: function(event){//마우스무브
                  //console.log(event);
                  // 반드시 마우스를 다운한 상태가 아니면 종료(리턴)시켜라
                  // if(mouseDown !== true){
                  // if(mouseDown == null){초기값을 null 지정해야한다.
                  // if(mouseDown == false){초기값을 false 지정해야한다.
                  if(!mouseDown){ //true가 아니면
                     return;
                  }
                  dragEnd  = event.clientX; //마우스가 움직이면 계속 드래그된다.
                  // 이동거리는 = dragEnd - dragStart;
                  slideWrap.css({left: dragEnd - dragStart })
               },
               mouseleave: function(event){ 
                     if(!mouseDown){return}
                     swipeEnd = event.clientX;
                     mouseDown  = false; //드래그 끝
                     if( swipestart-swipeEnd > 0 ){//다음슬라이드                       
                        nextCount();
                     }
                     if( swipestart-swipeEnd < 0 ){   // 이전슬라이드                        
                        prevCount();
                     }
                
               }
            });
            //4-2. 타이머를 컨트롤 타이머 만들어서 5초 동안 터치가 없으면 다시
            // 타이머카운트함수 : 마우스 터치시에 슬라이드 정지시키고
            //                   카운트 동작 5초간 터치가 없으면 다시
            //                   다음 슬라이드 자동타이머 동작 알고리즘
            // 타이머카운트함수
            function timerCount(){
               clearInterval(setId); // setId 중지
               clearInterval(setId2); // setId2 중지
                  count  = 0;         // 초기화 다시 카운트
                  setId2 = setInterval(function(){
                     count++;          // 증가변수는 반드시 초기값 설정                        
                     if(count>5){      // 5초간 터치가 없으면 
                        nextCount();   // 다음슬라이드 호출 실행
                        autoTimer();   // 자동타이머 딱한번 호출하면 3초후 무한반복
                        clearInterval(setId2);// 나 setId2자신을 중지시켜라
                     }
                  }, 1000);   // 자동타이머가 중지되면 카운트가 1초에 1회씩 증가
                  
               
               }//
            
            //5. 마우스 드레그 앤 드롭
            // mousemove

            //6. 반응형 모바일 손가락 핑거 드래드 앤 드롭(반응형)
            // 마우스 인식못함 동작안함
            // 반응형 진행하고 폴리필 touchEvent 추가
            // touchstart(mousedown) / touchend(mouseup) / touchmove(mousemove)
            slideContainer.on({
               touchstart: function(event){
                  swipestart = event.originalEvent.touches[0].clientX;
                  dragStart  = event.originalEvent.touches[0].clientX - slideWrap.offset().left - 1903;
                  mouseDown  = true;//드래그 시작임을 표시  
                  timerCount(); //터치시작하면 타이머 카운트 실행
               },
               touchend: function(event){
                 
                     swipeEnd   = event.originalEvent.changedTouches[0].clientX;   
                     mouseDown  = false; //드래그 끝   
                     if( swipestart-swipeEnd > 0 ){//다음슬라이드                     
                        nextCount();
                     }
                     if( swipestart-swipeEnd < 0 ){   // 이전슬라이드                    
                        prevCount();
                     }   

               },
               touchmove: function(event){                 
                  if(!mouseDown){ //true가 아니면
                     return;
                  }
                  dragEnd  = event.originalEvent.touches[0].clientX; //마우스가 움직이면 계속 드래그된다.
                  // 이동거리는 = dragEnd - dragStart;
                  slideWrap.css({left: dragEnd - dragStart })
               }
            });

         },
         section2:function(){ //패럴럭스- 마우스 스크롤링 이벤트 애니메이션
            
         },
         section3:function(){
           
         },
         section4:function(){
            let no = 0; // 초기값 값이바뀌는 변수

            //each() 메서드 버튼 6개 배열처리 반복문으로 구현한다.
            $('.gallery-btn').each(function(index){   //기본값이 자동으로 찍힘
               $('.gallery-btn').eq(index).on({
                  click: function(){
                     no=index;   //0 1 2 3 4 5 클릭한 번호 저장
                     gallery();
                  }
               });
            });

            // 속성(변수)==멤버변수==필드(프로퍼티스 properties): 값(value 밸류)
            // 속성에 펑션 function이 붙으면 : 메서드라고말한다..
            // 함수function(메소드 method)는
            // 명령어의 집합(프로그램)을 한번에 호출 실행하는 그룹(명령어의 수많은 묶음).
            function gallery(){
               //초기화
               $('.gallery li').eq(0).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*0)}, 0 );
               $('.gallery li').eq(1).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*1)}, 0 );
               $('.gallery li').eq(2).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*2)}, 0 );
               $('.gallery li').eq(3).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*3)}, 0 );
               $('.gallery li').eq(4).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*0)}, 0 );
               $('.gallery li').eq(5).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*1)}, 0 );
               $('.gallery li').eq(6).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*2)}, 0 );
               $('.gallery li').eq(7).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*3)}, 0 );
               
               if(no==0){  // 버튼0
                  $('.gallery li').eq(0).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*0)}, 300 );
                  $('.gallery li').eq(1).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*1)}, 300 );
                  $('.gallery li').eq(2).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*2)}, 300 );
                  $('.gallery li').eq(3).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*3)}, 300 );

                  $('.gallery li').eq(4).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*0)}, 300 );
                  $('.gallery li').eq(5).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*1)}, 300 );
                  $('.gallery li').eq(6).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*2)}, 300 );
                  $('.gallery li').eq(7).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*3)}, 300 );
               }
               else if(no==1){   // 버튼1
                  $('.gallery li').eq(0).hide();
                  $('.gallery li').eq(2).hide();
                  $('.gallery li').eq(7).hide();

                  $('.gallery li').eq(1).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*0)}, 300 );
                  $('.gallery li').eq(3).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*1)}, 300 );
                  $('.gallery li').eq(4).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*2)}, 300 );
                  $('.gallery li').eq(5).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*3)}, 300 );
                  $('.gallery li').eq(6).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*0)}, 300 );
               }
               else if(no==2){   // 버튼2
                  $('.gallery li').eq(3).hide();
                  $('.gallery li').eq(7).hide();

                  $('.gallery li').eq(1).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*0)},300 );
                  $('.gallery li').eq(2).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*1)},300 );
                  $('.gallery li').eq(3).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*2)},300 );
                  $('.gallery li').eq(4).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*3)},300 );
                  $('.gallery li').eq(5).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*0)},300 );
                  $('.gallery li').eq(6).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*1)},300 );
                  
               }
               else if(no==3){   // 버튼3
                  $('.gallery li').eq(1).hide();
                  $('.gallery li').eq(3).hide();
                  $('.gallery li').eq(6).hide();
                  $('.gallery li').eq(7).hide();

                  $('.gallery li').eq(0).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*0)},300 );
                  $('.gallery li').eq(2).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*1)},300 );
                  $('.gallery li').eq(4).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*2)},300 );
                  $('.gallery li').eq(5).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*3)},300 );
                  $('.gallery li').eq(8).show().animate( {top:(1903/4*0.8125*1), left:(1903/4*0)},300 );
               }
               else if(no==4){   // 버튼4
                  $('.gallery li').eq(1).hide();
                  $('.gallery li').eq(2).hide();
                  $('.gallery li').eq(3).hide();
                  $('.gallery li').eq(4).hide();
                  $('.gallery li').eq(5).hide();
                  $('.gallery li').eq(6).hide();
                  
                  $('.gallery li').eq(0).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*0)},300 );
                  $('.gallery li').eq(7).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*1)},300 );   
               }
               else if(no==5){   // 버튼5
                  $('.gallery li').eq(0).hide();
                  $('.gallery li').eq(2).hide();
                  $('.gallery li').eq(4).hide();
                  $('.gallery li').eq(5).hide();
                  $('.gallery li').eq(7).hide();
                  
                  $('.gallery li').eq(1).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*0)},300 );
                  $('.gallery li').eq(3).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*1)},300 );
                  $('.gallery li').eq(6).show().animate( {top:(1903/4*0.8125*0), left:(1903/4*2)},300 );       
               }
               
            }



         },
         section5:function(){
           
         },
         section6:function(){
           
         },
         section7:function(){
           
         },
         section8:function(){
            
         },
         section9:function(){
           
         },
         section10:function(){
           
         },
         footer:function(){
            
         }

    };    // 객체



    Agency.init();


})(jQuery);