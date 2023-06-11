const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()


function gotowritten() {
    window.location.href = "writtenindex.html";
  };

function gotoaudio() {
    window.location.href = "index.html";
  };



  function playtutorial() {
    document.getElementById("tutorial").play();
  }

  $('#tutorial').on('timeupdate', function() {

    if (this.currentTime / this.duration > 0.89) {
        document.getElementById("tutorial").style.display = "none";
      }

  });





function goto1() {
    document.getElementById("transi1").style.width = "100vw";
    setTimeout(function(){ window.location.href = "1.html"; }, 2000);
  };

function goto2() {
   document.getElementById("transi2").style.width = "100vw";
   setTimeout(function(){ window.location.href = "2.html"; }, 2000);
  };

  function goto3() {
    document.getElementById("transi3").style.width = "100vw";
    setTimeout(function(){ window.location.href = "3.html"; }, 2000);
   };

function goto4() {
    document.getElementById("transi4").style.width = "100vw";
    setTimeout(function(){ window.location.href = "4.html"; }, 2000);
  };

  function goto5() {
    document.getElementById("transi5").style.width = "100vw";
    setTimeout(function(){ window.location.href = "5.html"; }, 2000);
  };






function structure() {
    var one = document.getElementById("myAudio1");
    $("#timer").html(parseInt(one.duration - one.currentTime));   
    
   /*
    window.scrollTo(0,2);


      var container = $("#container")
   
      $('#seekbar').height($(container).width());
      $('#seekbar').width($(container).height());
   
      $('#seekbar').css('position', 'absolute')
      var px = $(container).width() / 2
      var py = $(container).height() / 2
      $('#seekbar').css('left', px-py).css('top', py-px);
      $('#seekbar').css({"transform":"rotate(90deg)"})*/ 

    };




//seekbar control

    document.getElementById("myAudio1").onplay = function() {
            $("#timer").addClass("visible");
            $("#tapstart").css('display','none');
    };
    document.getElementById("myAudio2").onplay = function() {
        setTimeout(function(){
            $("#timer").addClass("visible");
            $("#tapstart").css('display','none');
            },500);
    };
    document.getElementById("myAudio3").onplay = function() {
        setTimeout(function(){
            $("#timer").addClass("visible");
            $("#tapstart").css('display','none');
            },500);
    };
    document.getElementById("myAudio4").onplay = function() {
        setTimeout(function(){
            $("#timer").addClass("visible");
            $("#tapstart").css('display','none');
            },500);
    };
    document.getElementById("myAudio5").onplay = function() {
        setTimeout(function(){
            $("#timer").addClass("visible");
            $("#tapstart").css('display','none');
            },500);
    };


    var y = document.getElementById("gradient");
    $('#myAudio1').on('timeupdate', function() {
        $("#timer").html(parseInt(this.duration - this.currentTime));
        y.style.width = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
        y.style.height = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";       
    });

    $('#myAudio2').on('timeupdate', function() {
        $("#timer").html(parseInt(this.duration - this.currentTime));
        y.style.width = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
        y.style.height = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
    });

    $('#myAudio3').on('timeupdate', function() {
        $("#timer").html(parseInt(this.duration - this.currentTime));
        y.style.width = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
        y.style.height = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
    });

    $('#myAudio4').on('timeupdate', function() {
        $("#timer").html(parseInt(this.duration - this.currentTime));
        y.style.width = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
        y.style.height = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
    });

    $('#myAudio5').on('timeupdate', function() {
        $("#timer").html(parseInt(this.duration - this.currentTime));
        y.style.width = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
        y.style.height = ((1 + 7.3 * this.currentTime / this.duration) * 150) + "px";
    });



  var audio1 = document.getElementById("myAudio1");
  var audio2 = document.getElementById("myAudio2");
  var audio3 = document.getElementById("myAudio3");
  var audio4 = document.getElementById("myAudio4");
  var audio5 = document.getElementById("myAudio5");

  audio1.onended = function gotochapter2() {
  const capitolo = document.getElementsByClassName("indexindex");

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

  audio1.currentTime = 0;
  $("#timer").removeClass("visible");
  $("#tapstart").css('display','inline-block');
  document.getElementById("screenbutton").style.display = "none"; 
  document.getElementById("screenbutton2").style.display = "block";
  }

  audio2.onended = function gotochapter3() {
    const capitolo = document.getElementsByClassName("indexindex");
  
    capitolo[0].classList.remove('menodue');
    capitolo[1].classList.remove('uno');
    capitolo[2].classList.remove('due');
    capitolo[3].classList.remove('tre');
    capitolo[4].classList.remove('quattro');
  
    capitolo[0].classList.add('menotre');
    capitolo[1].classList.add('menodue');
    capitolo[2].classList.add('uno');
    capitolo[3].classList.add('due');
    capitolo[4].classList.add('tre');
  
    audio2.currentTime = 0;
    $("#timer").removeClass("visible");
    $("#tapstart").css('display','inline-block');
    document.getElementById("screenbutton2").style.display = "none"; 
    document.getElementById("screenbutton3").style.display = "block";
    }

    audio3.onended = function gotochapter4() {
        const capitolo = document.getElementsByClassName("indexindex");
      
        capitolo[0].classList.remove('menotre');
        capitolo[1].classList.remove('menodue');
        capitolo[2].classList.remove('uno');
        capitolo[3].classList.remove('due');
        capitolo[4].classList.remove('tre');
      
        capitolo[0].classList.add('menoquattro');
        capitolo[1].classList.add('menotre');
        capitolo[2].classList.add('menodue');
        capitolo[3].classList.add('uno');
        capitolo[4].classList.add('due');
      
        audio3.currentTime = 0;
        $("#timer").removeClass("visible");
        $("#tapstart").css('display','inline-block');
        document.getElementById("screenbutton3").style.display = "none"; 
        document.getElementById("screenbutton4").style.display = "block";
        }
    
        audio4.onended = function gotochapter5() {
            const capitolo = document.getElementsByClassName("indexindex");
          
            capitolo[0].classList.remove('menoquattro');
            capitolo[1].classList.remove('menotre');
            capitolo[2].classList.remove('menodue');
            capitolo[3].classList.remove('uno');
            capitolo[4].classList.remove('due');
          
            capitolo[0].classList.add('menocinque');
            capitolo[1].classList.add('menoquattro');
            capitolo[2].classList.add('menotre');
            capitolo[3].classList.add('menodue');
            capitolo[4].classList.add('uno');
          
            audio4.currentTime = 0;
            $("#timer").removeClass("visible");
            $("#tapstart").css('display','inline-block');
            document.getElementById("screenbutton4").style.display = "none"; 
            document.getElementById("screenbutton5").style.display = "block";
            }



  function gobacktochapter1() {
    const capitolo = document.getElementsByClassName("indexindex");
  
    capitolo[0].classList.remove('menodue');
    capitolo[1].classList.remove('uno');
    capitolo[2].classList.remove('due');
    capitolo[3].classList.remove('tre');
    capitolo[4].classList.remove('quattro');
  
    capitolo[0].classList.add('uno');
    capitolo[1].classList.add('due');
    capitolo[2].classList.add('tre');
    capitolo[3].classList.add('quattro');
    capitolo[4].classList.add('cinque');
  
    document.getElementById("screenbutton").style.display = "block"; 
    document.getElementById("screenbutton2").style.display = "none";
    }

  function gobacktochapter2() {
    const capitolo = document.getElementsByClassName("indexindex");
  
    capitolo[0].classList.remove('menotre');
    capitolo[1].classList.remove('menodue');
    capitolo[2].classList.remove('uno');
    capitolo[3].classList.remove('due');
    capitolo[4].classList.remove('tre');
  
    capitolo[0].classList.add('menodue');
    capitolo[1].classList.add('uno');
    capitolo[2].classList.add('due');
    capitolo[3].classList.add('tre');
    capitolo[4].classList.add('quattro');
  
    document.getElementById("screenbutton2").style.display = "block"; 
    document.getElementById("screenbutton3").style.display = "none";
    }

  function gobacktochapter3() {
        const capitolo = document.getElementsByClassName("indexindex");
      
        capitolo[0].classList.remove('menoquattro');
        capitolo[1].classList.remove('menotre');
        capitolo[2].classList.remove('menodue');
        capitolo[3].classList.remove('uno');
        capitolo[4].classList.remove('due');
      
        capitolo[0].classList.add('menotre');
        capitolo[1].classList.add('menodue');
        capitolo[2].classList.add('uno');
        capitolo[3].classList.add('due');
        capitolo[4].classList.add('tre');
      
        document.getElementById("screenbutton3").style.display = "block"; 
        document.getElementById("screenbutton4").style.display = "none";
    }

    function gobacktochapter4() {
        const capitolo = document.getElementsByClassName("indexindex");
      
        capitolo[0].classList.remove('menocinque');
        capitolo[1].classList.remove('menoquattro');
        capitolo[2].classList.remove('menotre');
        capitolo[3].classList.remove('menodue');
        capitolo[4].classList.remove('uno');
      
        capitolo[0].classList.add('menoquattro');
        capitolo[1].classList.add('menotre');
        capitolo[2].classList.add('menodue');
        capitolo[3].classList.add('uno');
        capitolo[4].classList.add('due');
      
        document.getElementById("screenbutton4").style.display = "block"; 
        document.getElementById("screenbutton5").style.display = "none";
        }





//gestures audio1
var longpress;
var tappedup=false;
var tapped=false;
let isPlaying = true;
$('#screenbutton').on("touchstart",function(e){

                if(!tapped){ //if not tapped yet
                    tapped=setTimeout(function(){
                        isPlaying = !isPlaying;
                        tapped=null
                        document.getElementById("myAudio1").currentTime = 0;
                        //longpress=setTimeout(function(){

                        //},2000);
                    },1500); 
                } 
                

    e.preventDefault()
});

$('#screenbutton').on("touchend",function(){
    clearTimeout(tapped);
    //clearTimeout(longpress);
            if(!tappedup) {
                    tappedup=setTimeout(function(){
                            tapped=null
                            tappedup=null
                            var x = document.getElementById("myAudio1"); 
                            if (isPlaying) {
                                x.play();
                            } else {
                                x.pause();
                            }
                            isPlaying = !isPlaying;
                    },300);
            }

            else {    //tapped within 300ms of last tap. double tap
                clearTimeout(tappedup);
                tapped=null
                tappedup=null
                document.getElementById("myAudio1").currentTime += 10;
                navigator.vibrate([100, 50]); // vibration for double tap
                }
    
});



//gestures audio2
var longpress2;
var tappedup2=false;
var tapped2=false;
let isPlaying2 = true;
$('#screenbutton2').on("touchstart",function(e){

                if(!tapped2){ //if not tapped yet
                    tapped2=setTimeout(function(){
                        isPlaying2 = !isPlaying2;
                        tapped2=null
                        document.getElementById("myAudio2").currentTime = 0;
                    },1000);
                    longpress2=setTimeout(function(){
                        isPlaying2 = !isPlaying2;
                        audio2.pause();
                        gobacktochapter1();
                        audio1.play();
                    },3000);
                } 
                

    e.preventDefault()
});

$('#screenbutton2').on("touchend",function(){
    clearTimeout(tapped2);
    clearTimeout(longpress2);
            if(!tappedup2) {
                    tappedup2=setTimeout(function(){
                            tapped2=null
                            tappedup2=null
                            var x = document.getElementById("myAudio2"); 
                            if (isPlaying2) {
                                x.play();
                            } else {
                                x.pause();
                            }
                            isPlaying2 = !isPlaying2;
                    },300);
            }

            else {    //tapped within 300ms of last tap. double tap
                clearTimeout(tappedup2);
                tapped2=null
                tappedup2=null
                document.getElementById("myAudio2").currentTime += 10;
                navigator.vibrate([100, 50]); // vibration for double tap
                }
    
});



//gestures audio3
var longpress3;
var tappedup3=false;
var tapped3=false;
let isPlaying3 = true;
$('#screenbutton3').on("touchstart",function(e){

                if(!tapped3){ //if not tapped yet
                    tapped3=setTimeout(function(){
                        navigator.vibrate([50, 50, 50]);
                        isPlaying3 = !isPlaying3;
                        tapped3=null
                        document.getElementById("myAudio3").currentTime = 0;
                    },1000);
                    longpress3=setTimeout(function(){
                        navigator.vibrate([50, 50, 50]);
                        isPlaying3 = !isPlaying3;
                        audio3.pause();
                        gobacktochapter2();
                        audio2.play();
                    },3000);
                } 
                

    e.preventDefault()
});

$('#screenbutton3').on("touchend",function(){
    clearTimeout(tapped3);
    clearTimeout(longpress3);
            if(!tappedup3) {
                    tappedup3=setTimeout(function(){
                            tapped3=null
                            tappedup3=null
                            var x = document.getElementById("myAudio3"); 
                            if (isPlaying3) {
                                navigator.vibrate(100);
                                x.play();
                            } else {
                                navigator.vibrate(100);
                                x.pause();
                            }
                            isPlaying3 = !isPlaying3;
                    },300);
            }

            else {    //tapped within 300ms of last tap. double tap
                clearTimeout(tappedup3);
                tapped3=null
                tappedup3=null
                document.getElementById("myAudio3").currentTime += 10;
                navigator.vibrate([100, 50]); // vibration for double tap
                }
    
});



//gestures audio4
var longpress4;
var tappedup4=false;
var tapped4=false;
let isPlaying4 = true;
$('#screenbutton4').on("touchstart",function(e){

                if(!tapped4){ //if not tapped yet
                    tapped4=setTimeout(function(){
                        navigator.vibrate([50, 50, 50]);
                        isPlaying4 = !isPlaying4;
                        tapped4=null
                        document.getElementById("myAudio4").currentTime = 0;
                    },1000);
                    longpress4=setTimeout(function(){
                        navigator.vibrate([50, 50, 50]);
                        isPlaying4 = !isPlaying4;
                        audio4.pause();
                        gobacktochapter3();
                        audio3.play();
                    },3000);
                } 
                

    e.preventDefault()
});

$('#screenbutton4').on("touchend",function(){
    clearTimeout(tapped4);
    clearTimeout(longpress4);
            if(!tappedup4) {
                    tappedup4=setTimeout(function(){
                            tapped4=null
                            tappedup4=null
                            var x = document.getElementById("myAudio4"); 
                            if (isPlaying4) {
                                navigator.vibrate(100);
                                x.play();
                            } else {
                                navigator.vibrate(100);
                                x.pause();
                            }
                            isPlaying4 = !isPlaying4;
                    },300);
            }

            else {    //tapped within 300ms of last tap. double tap
                clearTimeout(tappedup4);
                tapped4=null
                tappedup4=null
                document.getElementById("myAudio4").currentTime += 10;
                navigator.vibrate([100, 50]); // vibration for double tap
                }
    
});




//gestures audio5
var longpress5;
var tappedup5=false;
var tapped5=false;
let isPlaying5 = true;
$('#screenbutton5').on("touchstart",function(e){

                if(!tapped5){ //if not tapped yet
                    tapped5=setTimeout(function(){
                        navigator.vibrate([50, 50, 50]);
                        isPlaying5 = !isPlaying5;
                        tapped5=null
                        document.getElementById("myAudio5").currentTime = 0;
                    },1000);
                    longpress5=setTimeout(function(){
                        navigator.vibrate([50, 50, 50]);
                        isPlaying5 = !isPlaying5;
                        audio5.pause();
                        gobacktochapter4();
                        audio4.play();
                    },3000);
                } 
                

    e.preventDefault()
});

$('#screenbutton5').on("touchend",function(){
    clearTimeout(tapped5);
    clearTimeout(longpress5);
            if(!tappedup5) {
                    tappedup5=setTimeout(function(){
                            tapped5=null
                            tappedup5=null
                            var x = document.getElementById("myAudio5"); 
                            if (isPlaying5) {
                                navigator.vibrate(100);
                                x.play();
                            } else {
                                navigator.vibrate(100);
                                x.pause();
                            }
                            isPlaying5 = !isPlaying5;
                    },300);
            }

            else {    //tapped within 300ms of last tap. double tap
                clearTimeout(tappedup5);
                tapped5=null
                tappedup5=null
                document.getElementById("myAudio5").currentTime += 10;
                navigator.vibrate([100, 50]); // vibration for double tap
                }
    
});

