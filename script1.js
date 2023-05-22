//seekbar control
$('#myAudio1').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
});

$('#myAudio2').on('timeupdate', function() {
    $('#seekbar').attr("value", this.currentTime / this.duration);
});



//primo audio

var tapped=false
let isPlaying = true;
$('#screenbutton').on("touchstart",function(e){
    if(!tapped){ //if tap is not set, set up single tap
      tapped=setTimeout(function(){
          tapped=null
          var x = document.getElementById("myAudio1"); 
                if (isPlaying) {
                    x.play();
                } else {
                    x.pause();
                }
            isPlaying = !isPlaying;},400);   //wait 300ms then run single click code
    } else {    //tapped within 300ms of last tap. double tap
      clearTimeout(tapped); //stop single tap callback
      tapped=null
      document.getElementById("myAudio1").currentTime += 5;
    }
    e.preventDefault()
});


  var audio1 = document.getElementById("myAudio1");
  audio1.onended = function gotochapter2() {
  const capitolo = document.getElementsByClassName("capitolo");

  capitolo[0].classList.remove('uno');
  capitolo[1].classList.remove('due');
  capitolo[2].classList.remove('tre');
  capitolo[3].classList.remove('quattro');
  capitolo[4].classList.remove('cinque');

  capitolo[0].classList.add('menodue');
  capitolo[1].classList.add('uno');
  capitolo[2].classList.add('due');
  capitolo[3].classList.add('tre');
  capitolo[4].classList.add('quattro');

  document.getElementById("seekbar").value = 0;
  document.getElementById("screenbutton").style.display = "none"; 
  document.getElementById("screenbutton2").style.display = "block";
  }



//secondo audio

  var tapped2=false
  let isPlaying2 = true;
  $('#screenbutton2').on("touchstart",function(e){
      if(!tapped2){ //if tap is not set, set up single tap
        tapped2=setTimeout(function(){
            tapped2=null
            var x = document.getElementById("myAudio2"); 
                  if (isPlaying2) {
                      x.play();
                  } else {
                      x.pause();
                  }
              isPlaying2 = !isPlaying2;},400);   //wait 300ms then run single click code
      } else {    //tapped within 300ms of last tap. double tap
        clearTimeout(tapped2); //stop single tap callback
        tapped2=null
        document.getElementById("myAudio2").currentTime += 5;
      }
      e.preventDefault()
  });
