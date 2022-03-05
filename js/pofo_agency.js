(function($){
    

    const Agency = {
        init:function(){//메소드 (함수)
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
               console.log('setId', setId);
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
                  console.log(event);
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
            console.log('section2메소드()');
         },
         section3:function(){
            console.log('section3메소드()');
         },
         section4:function(){
            console.log('section4메소드()');
         },
         section5:function(){
            console.log('section5메소드()');
         },
         section6:function(){
            console.log('section6메소드()');
         },
         section7:function(){
            console.log('section7메소드()');
         },
         section8:function(){
            console.log('section8메소드()');
         },
         section9:function(){
            console.log('section9메소드()');
         },
         section10:function(){
            console.log('section10메소드()');
         },
         footer:function(){
            console.log('footer메소드()');
         }

    };    // 객체



    Agency.init();


})(jQuery);