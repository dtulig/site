$(document).bind('deck.change', function(event, from, to) {
  if(46 === to) {
    try {
      document.getElementById('resume-search-video').currentTime = 0.0;
    } catch (e) {}

    document.getElementById('resume-search-video').webkitRequestFullScreen();
    document.getElementById('resume-search-video').play();
  }

  if (46 === from) {
    document.getElementById('resume-search-video').webkitExitFullScreen();
    document.getElementById('resume-search-video').pause();
  }
});
