// 2. This code loads the IFrame Player API code asynchronously.
// 요줌은 var 잘 안 쓴다 let, const로 바꿔도 됨
var tag = document.createElement('script'); //요소를 생성하는 메서드
// script라는 태그를 생성해서 tag에 저장

tag.src = "https://www.youtube.com/iframe_api"; //영상 재생하는 명령의 자바스크립트 파일을 가져온다
var firstScriptTag = document.getElementsByTagName('script')[0];//제일 첫번째 태그를 firstScriptTag에 할당
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//첫번째 script 태그 이전에 youtube API를 사용할 수 있게 tag를 삽입

//위와 같이 해야 아래 코드가 작동된다
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

//함수 하나 만들기
function onYouTubePlayerAPIReady() { //API가 함수를 찾아야 하니까 아무 이름이나 쓰는 것은 아니다
  //<div id="player"></div>
  //밑에 player는 html에서 준 id값이 들어간다
  new YT.Player('player', { //YT라는 유튜브 명령에서 Player 메소드 실행 + 옵션
    videoId: 'An6LvWQuj_8', //어떤 id를 가진 youtube 영상인지 명시해야 그 영상이 틀린다
    playerVars: {//영상을 재생하기 위한 여러가지 옵션들
      autoplay: true, //자동 재생 유무
      loop: true, //반복 재생 유무
      playlist: 'An6LvWQuj_8' //반복 재생할 유튜브 영상 ID 목록 명시해줘야 한다
    },
    events: { //동영상 플레이어가 준비가 되면 함수를 실행해주는데 인수로 동영상이 플레이 되는 상황자체를 event로 넘겨주게 된다
      onReady: function (event) { //익명의 함수 할당 -> 메소드로 부른다
        event.target.mute() //target은 지금 실행되고 있는 영상을 음소거 시켜준다
      }
    }
  });
}