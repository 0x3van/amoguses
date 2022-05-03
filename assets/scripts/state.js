// EVAN.SYSTEMS
let playPause = document.getElementsByClassName('play');
let vhsSound = new Audio('./assets/sounds/vhs.mp3');
let wham = new Audio('assets/sounds/nae.mp3');


function changeStateFlash() {
    $('#test').addClass('test');
    $('.loading').css('opacity', '0');
}

function changeStateMain() {
    $('.play').html('PLAY');
    $('#test').removeClass('test');
    // dnr $('#test').css('background', '#c85151');
    $('#final-wrap').addClass('final-wrap-anim');
	$('#test').addClass('intro-wrap-anim');
}

let totalTime = 0
function updateElapsed() {
	if (totalTime == 3600) {
		$('.record-time').html('GO AWAY');
	} else {
		++totalTime;
		$('#sec').html(pad(totalTime % 60));
		$('#min').html(pad(parseInt(totalTime / 60)));
	}
}

function pad(val) {
	var valString = val + "";
	if (valString.length < 2) {
	  return "0" + valString;
	} else {
	  return valString;
	}
  }

$('#start').click(function() {
    setTimeout(changeStateFlash, 5000);
    setTimeout(changeStateMain, 5300);

    setInterval('updateElapsed()', 1000);
	setInterval('updateClock()', 1000);

    $('#start').css('visibility', 'hidden');
    $('#loading').css('visibility', 'visible');

    vhsSound.play();
	setTimeout(() => {
		wham.play();
	}, 7100);
});

$(document).keypress(function(e) {
	if(e.which == 32) {
		$('#start').css('visibility', 'hidden');

		setInterval('updateElapsed()', 1000);
		setInterval('updateClock()', 1000);

		changeStateFlash();
		changeStateMain();
	}
  });