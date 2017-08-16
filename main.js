(function(){
  window.onload = function(){
    var videoElem = document.querySelectorAll('.video-block');
    Array.prototype.forEach.call(videoElem, function(item){
      var videoElem = item.getElementsByClassName('video-block__video')[0];
      var playPauseBtn = item.querySelector('.video-block__play');
      var speedBtn = item.querySelectorAll('.video-block__speed-value');
      var curSpeedBtn;
      playPauseBtn.addEventListener('click', function(){
        this.classList.toggle('video-block__play_played');

        if(this.classList.contains('video-block__play_played')){
          videoElem.play();
        }else{
          videoElem.pause();
        }
      })
      Array.prototype.forEach.call(speedBtn, function(btn){
        btn.addEventListener('click',function(){
          if(this.classList.contains('video-block__speed-value--selected')){
            return false;
          }
          curSpeedBtn = this;
          for( i = 0; i < speedBtn.length; i++){
            speedBtn[i].classList.remove('video-block__speed-value--selected')
          }
          curSpeedBtn.classList.add('video-block__speed-value--selected');
          var speed = parseFloat(curSpeedBtn.getAttribute('data-speed'));
          videoElem.playBackRate = speed;
          console.log(videoElem.playBackRate)
        })
      })
    })
  }
})()
