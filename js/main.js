const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // 페이지 스크롤 위치가 500px이 넘으면.
  if (window.scrollY > 500) {
    // Badge 요소 숨기기!
    //gsap.to(요소, 지속시간, 옵션);을 적는다
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    })
    //버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0 //오른쪽으로 버튼이 보일 때에는 원래 위치에
    });

  // 페이지 스크롤 위치가 500px이 넘지 않으면.
  } else {
    // Badge 요소 보이기!
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
    //버튼 숨기기!
    //gsap은선택자만 넣어줘도 그 요소를 찾을 수 있다 (위에처럼 badgeEl로 찾아서 넣지 않아도 됨)
    gsap.to(toTopEl, .2, {
      x: 100, //오른쪽으로 버튼이 숨어질 수 있도록 값 지정
    });
  }
}, 300)) //lodash에서 제공하는 throttle 기능을 사용해서 0.3초 단위로 만들어서 함수가 우루루 실행되는 것 방지


toTopEl.addEventListener('click', function () {
  //첫 번째 인수로 요소를 넣어야 한다 -> window는 우리에게 보여지는 화면 자체(창)를 의미한다
  gsap.to(window, .7, {
    scrollTo: 0 //페이지 상단을 의미하는 0을 추가 -> 이것을 사용하기 위해서 ScrollToPlugin을 연결함
  });
});




const fadeEls = document.querySelectorAll('.visual .fade-in'); //()안에 있는 것을 찾아서 fadeEls에 할당하겠다
//반복적으로 하나씩 처리하기 위해 (찾은 개수만큼 함수가 실행된다)
//function () 안에 각각 하나씩 들어가는데 이름은 hello도 상관없지만, 직관적으로 fadeEl로 작성했다
//두번째 매개변수로 반복되는 횟수를 index로 받기
fadeEls.forEach(function (fadeEl, index) { 
  //gsap.to(요소, 지속시간, 옵션);
  //애니메이션 제공하는 라이브러리에서 주는 기능
  //지속시간 단위는 초(s)이다
  gsap.to(fadeEl, 1, { //1초 동안 바꿔가면서 나타나게 해주는 코드가 된다
    //몇초 되에 실행되게 값은 주는 부분이 delay이다
    //다른 delay 값을 주어야 순차적으로 출력된다
    delay: (index + 1)* .7,  //0.7 1.4 2.1 2.7
    opacity: 1 //opacity를 1로 바꿔줘서 보이게 만들어주기
  }); 
}); 





// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  // autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
}); 

new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal' -> horizontal이 디폴트값이니까 따로 명시하지 않아도 된다!
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000//단위가 밀리세컨드니까 500은 0.5초를 뜻한다 (디폴트값은 3000)
  // }
  pagination: {
    el: '.promotion .swiper-pagination', // 다음 요소를 사용하겠다는 의미 (페이지 번호 요소 선택자)
    clickable: true//사용자가 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
}); 
//footer 위의 부분의 슬라이드 만드는 것
new Swiper('.awards .swiper-container', {
  //direction: 'horizontal' -> 기본값이니까 특별히 추가할 필요 없다
  autoplay: true,
  loop: true,
  spaceBetween: 30, //요소 사이사이에 30px씩 공간 주기
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev', //이전부분에 해당하는 선택자 입력
    nextEl: '.awards .swiper-next'
  } 
});




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; //화면에 보이니 false 이니까 보인다는 의미
promotionToggleBtn.addEventListener('click',function () { //promotionToggleBtn을 클릭하면 어떤 함수가 실행된다
  //프로모션을 숨겨주거나 보이게 하는 논리를 여기에 작성하면 된다
  isHidePromotion = !isHidePromotion //반대가 되게 만들어달라는 의미 -> 반대로 전환하는 논리
  if (isHidePromotion) { //isHidePromotion에 true가 들어오면
    //숨김 처리!
    promotionEl.classList.add('hide'); //hide라는 클래스를 추가해라, hide가 있으면 숨겨지는 css 스타일 만들기
  } else {
    // 보임 처리!
    promotionEl.classList.remove('hide'); //hide 클래스를 지워주기
  }
});



// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

//매개변수 부분에 지연시간인 delay와 위아래로 움직이는 크기 size 넣기
function floatingObject(selector, delay, size) { //함수가 호출될 때 인수로 선택자라는 개념을 받게 할 것 -> selector라는 메개변수 
  //gsap 자바스크립트 애니메이션 라이브러리 사용
  //gsap.to(요소, 지속시간(초), 옵션);
  //요소에 선택자만 넣어주면 gsap이 찾아서 사용할 수도 있다
  gsap.to(selector, random(1.5, 2.5), { //1초 지속시간 부분에 random함수 넣기
    y: size, //y축으로 얼마만큼 움직이면서 애니메이션 지속할 것인지 넣는 곳 -> 이것만 넣으면 딱 한 번 동작
    repeat: -1, //-1은 무한 반복을 뜻한다 -> 그런데 위에서 아래로 내려오는 애니메이션만 지정해서 뚝뚝 끊기면서 부자연스러움
    yoyo: true, //자연스럽게 한 번 재생된 애니메이션을 다시 뒤로 재생해서 자연스럽게 이어지게 만들어줌
    ease: Power1.easeInOut, //이거 추가하면 자연스럽게 된다
    delay: random(0,delay) //페이지가 새로고침 되고 몇 초 후에 실행 (몇 초는 random 함수 값으로)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);



//section 태그 중 scroll-spy가 붙어 있는 태그를 전부 찾자
const spyEls = document.querySelectorAll('section.scroll-spy'); //-> 찾은 요소 들!!! 여러 개를 찾는 것
//여러 개를 찾으니까 각각을 forEach를 사용해서 접근
spyEls.forEach(function (spyEl) { //익명 함수 안에 각각의 요소를 의미하는 매개변수 넣는다
  //new를 이용해서 라이브러리 사용하자
  //Scene()은 메서드 -> ScrollMagic이라는 자바스크립트 라이브러리를 통해서 특정한 요소를 감시하는 옵션을 지정하는 메서드
  //setClassToggle 이라는 메서드를 이어서 붙여준다
  //new ScrollMagi.Scene().setClassToggle().addTo() -> 옆으로 너무 길어지니까 enter치고 들여쓰기해서 줄 나눠주기
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //감시하고 있는 하나의 section 정보를 추가했다는 의미 -> 즉. 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8, // 내가 감시하고 있는 요소가 뷰포트의 어떤 지점에서 감시 되었다는 것을 판단할 것인가를 지정
    })
    .setClassToggle(spyEl, 'show') //show를 넣었다 뺐다 할 것이다
    .addTo(new ScrollMagic.Controller()); //ScrollMagic에서 기본적으로 우리가 추가한 옵션들을 내부의 Controller에 내용을 할당해서 실제로 동작하게 만드는 용도

});
