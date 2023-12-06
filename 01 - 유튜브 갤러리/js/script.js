$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // 이미지를 저장한 배열을 생성
  const imgArr = [
    'https://pbs.twimg.com/media/Ey3a9jrU4AUYejG.jpg',
    'https://cdn.goodkyung.com/news/photo/202305/206566_170242_3115.jpg',
    'https://i.ytimg.com/vi/R9TvXf4pNbM/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBv-5atjlyl0D4PIQ_abO-uhDgf_g',
    'https://i.ytimg.com/vi/Ejy5fW1T8og/maxresdefault.jpg',
  ];

  // 배열에 접근하는 방법 : 배열[인덱스]
  // console.log(imgArr[1]);
  // body에 배경이미지로 첫번째 이미지를 적용해 주세요 : css
  // $('body').css('background-image', `url(${imgArr[0]})`);
  $selectVideo.css('background-image', `url(${imgArr[2]})`);
  // console.log(imgArr, $selectVideo);

  // 각 li의 이미지를 각각 뿌리자
  // 여러 개 요소에 각각 어떤 것을 해주려 할 때
  // 자바스크립트 : for each(function (item, index) {})
  // 제이쿼리 : each(function (index, item) {})
  $selectVideo.each(function (index, item) {
    console.log(index, item);
    // $(item).css('background-image', `url(${imgArr[index]}`);
    setBgImage(item, index);
  });

  // $selectVideo를 클릭했을 때
  $selectVideo.on('click', function () {
    // 해당 li의 인덱스를 받아서 videoIdx 변수에 담아
    const videoIdx = $(this).index();
    // imgArr배열에서 인덱스에 해당하는 배경이미지를 body에 적용
    // $('body').css('background-image', `url(${imgArr[videoIdx]})`);
    setBgImage('body', videoIdx);

    // console.log($(this));
    // 해당 li의 data-link 값을 가져와서 videoLink변수에 담자
    let videoLink = $(this).attr('data-link');
    // ?autoplay=1 -> 자동재생
    videoLink += '?autoplay=1'; // videoLink = videoLink + '?autoplay=1'

    const videoTitle = $(this).text();
    // console.log(videoTitle, videoLink);

    // 그 값을 iframe의 src값으로 세팅
    $video.attr('src', videoLink);
    // videoTitle 넣기
    $videoWrap.find('.video-title').text(videoTitle);

    // $dim을 보이게 - fadeIn()
    $dim.fadeIn();
    // $videoWrap을 보이게 - addClass()
    $videoWrap.addClass('active');
  });
  // 닫기버튼
  $btnClose.on('click', function () {
    $dim.fadeOut();
    $videoWrap.removeClass('active');
    $video.attr('src', ''); //'' q빈값 -> 초기화
    $videoWrap.find('.video-title').text('');
  });

  // 배경 이미지를 적용하는 공통의 동작을 함수로 정의
  function setBgImage(item, index) {
    $(item).css('background-image', `url(${imgArr[index]}`);
  }

  // esc 누를 때 지워짐
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $dim.fadeOut();
      $videoWrap.removeClass('active');
    }
  });
});
