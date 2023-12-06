$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');

  // $selectVideo를 클릭했을 때
  $selectVideo.on('click', function () {
    console.log($(this));
    // 해당 li의 data-link 값을 가져와서 videoLink변수에 담자
    const videoLink = $(this).attr('data-link');
    const videoTitle = $(this).text();
    console.log(videoTitle, videoLink);

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
});
