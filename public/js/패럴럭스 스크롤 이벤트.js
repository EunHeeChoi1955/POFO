   //패럴럭스 스크롤 이벤트
   let newScroll = $(window).scrollTop();
   let oldScroll = newScroll;
   let result    = (oldScroll-newScroll) > 0 ? 'UP' : 'DOWN';
      
   // 모든것은 스크롤 이벤트가 발생이 되어야 한다.
     $(window).scroll(function(){
     
      scrollEvent();
      
     });
   function scrollEvent(){
         newScroll = $(window).scrollTop();                
         result    = (oldScroll-newScroll) > 0 ? 'UP' : 'DOWN';
         if(result=='UP'){  //위로 헤더 보이기
            if($(window).scrollTop()==0 ){ //맨위이면
               $('#header').removeClass('addParallaxDown60');
               $('#header').removeClass('addParallaxUp');
               $('#header').addClass('addParallaxDown72');
            }  
            else{ //그렇지 않으면
               $('#header').removeClass('addParallaxUp');
               $('#header').removeClass('addParallaxDown72');
               $('#header').addClass('addParallaxDown60');
            }
         }
         if(result=='DOWN'){ //아래로 헤더 감추기
            $('#header').removeClass('addParallaxDown72');
            $('#header').removeClass('addParallaxDown60');
            $('#header').addClass('addParallaxUp');
         }
         oldScroll = newScroll; 
      }