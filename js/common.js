const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click',function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function () {
  searchEl.classList.add('focused'); //focus가 되면 
  searchInputEl.setAttribute('placeholder', '통합검색'); //setAttribute : HTML 속성을 지정
});
 //포커스가 해제 되었을 때
searchInputEl.addEventListener('blur',function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year'); //html 구조 만들때 이번 연도 나올 부분 만들어줬음
thisYear.textContent = new Date().getFullYear(); //이번 연도가 숫자 데이터로 this-year라고 저장된 요소 내용으로 들어간다
