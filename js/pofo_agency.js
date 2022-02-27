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
            const slideWrap = $('.slide-wrap');
            let cnt=0;
            //1.메인슬라이드 함수
            function mainSlide(){               
               slideWrap.stop().animate( {left:(-1903*cnt)},600, function(){
                  if(cnt>2){cnt=0}
                  slideWrap.stop().animate( {left:(-1903*cnt)},0)
               });
            }

            //2.다음카운트 함수
            function nextCount(){
               cnt++;
               mainSlide();
            }

            //3.자동타이머 함수
            function autoTimer(){
               setInterval(nextCount, 3000);
            }

            autoTimer();
            




         },
         section2:function(){
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