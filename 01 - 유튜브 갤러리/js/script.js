$(function () {
  // 대상을 변수에 저장
  const $dim = $('.dim');
  const $videoWrap = $('.video-wrap');
  const $video = $videoWrap.find('.video iframe');
  const $btnClose = $('.btn-close');
  const $selectVideo = $('.video-list > li');
  const imgArr = [
    {
      title: `브라더스 까라마조프 스페셜 커튼콜 - '헛소리' (최석진 focus)`,
      video: 'https://youtu.be/Vd3J-dRnncI?si=JXYgXpPcJdxzgEiI',
      pic: 'https://pbs.twimg.com/media/Ey3a9jrU4AUYejG.jpg',
    },
    {
      title: `해적 스페셜 커튼콜 - '스텔라 마리스' (최석진 focus)`,
      video: 'https://youtu.be/km9T2QEQkgQ?si=gSMghltTypX21uTw',
      pic: 'https://cdn.goodkyung.com/news/photo/202305/206566_170242_3115.jpg',
    },
    {
      title: `엔딩노트 스페셜 커튼콜 '난 꿈을 꾼다.Rep' (최석진 focus)`,
      video: 'https://youtu.be/D1mhL3mbXeQ?si=vRTxvirCXGTROwLc',
      pic: 'https://i.ytimg.com/vi/R9TvXf4pNbM/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBv-5atjlyl0D4PIQ_abO-uhDgf_g',
    },
    {
      title: `미오 프라텔로 스페셜 커튼콜 - '패밀리, 샷건, 뮤직' (최석진 focus)`,
      video: 'https://youtu.be/Qx-_91yqIIg?si=yw_PSz41tab2OLTT',
      pic: 'https://i.ytimg.com/vi/Ejy5fW1T8og/maxresdefault.jpg',
    },
  ];

  // 접근 테스트
  console.log(imgArr[0].pic);

  $selectVideo.css('background-image', `url(${imgArr[2]})`);
  $selectVideo.each(function (index, item) {
    setBgImage(item, index);
  });

  // $selectVideo를 클릭했을 때
  $selectVideo.on('click', function () {
    const videoIdx = $(this).index();

    setBgImage('body', videoIdx);
    let videoLink = imgArr[videoIdx].video;

    videoLink += '?autoplay=1';
    const videoTitle = imgArr[videoIdx].title;

    $video.attr('src', videoLink);
    $videoWrap.find('.video-title').text(videoTitle);
    $dim.fadeIn();
    $videoWrap.addClass('active');
  });
  // 닫기버튼
  $btnClose.on('click', function () {
    $dim.fadeOut();
    $videoWrap.removeClass('active');
    $video.attr('src', '');
    $videoWrap.find('.video-title').text('');
  });

  function setBgImage(item, index) {
    $(item).css('background-image', `url(${imgArr[index].pic}`);
  }

  // esc 누를 때 지워짐
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      $dim.fadeOut();
      $videoWrap.removeClass('active');
    }
  });
});
