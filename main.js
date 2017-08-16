(function(){
  window.onload = function(){
    var videoElem = document.querySelectorAll('.video-block');
    Array.prototype.forEach.call(videoElem, function(item){
      var videoElem = item.querySelector('.video-block__video');
      var playPauseBtn = item.querySelector('.video-block__play');
      playPauseBtn.addEventListener('click', function(){
        this.classList.toggle('video-block__play_played');

        if(this.classList.contains('video-block__play_played')){
          videoElem.play();
        }else{
          videoElem.pause();
        }
      })
      videoElem.playbackRate = .5;
      //
    })
  }
})()
