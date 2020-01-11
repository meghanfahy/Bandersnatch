
  var beach = {
  	videoSRC: "video/beach.mp4",
  	text: "Wow, the beach is so relaxing"

  }

  var lake = {
  	videoSRC: "video/lake.mp4",
  	text: "Look how beautiful the lake is"

  }
  var skyline = {
    videoSRC: "video/skyline.mp4",
    text: "Look at that view"

  }

  var forrest = {
    videoSRC: "video/forrest.mp4",
    text: "Look how beautiful the forrest is"

  }


  var car = {
  	videoSRC: "video/car.mp4",
  	text: "Look at all of the traffice",
  	choice1: {
  		btnTxt: "Take me somewhere relaxing",
  		nextState: beach
  	}
  }
  var outside = {
  	videoSRC: "video/outside.mp4",
  	text: "Isn't this nice",
  	choice1: {
  		btnTxt: "Take me somewhere more peaceful",
  		nextState: lake
  	}
  }

  var cookies = {
    videoSRC: "video/cookies.mp4",
    text: "These smell good",
    choice1: {
      btnTxt: "I wanna see more",
      nextState: skyline
    }
  }

  var coffee = {
    videoSRC: "video/cofee.mp4",
    text: "I needed some caffeine",
    choice1: {
      btnTxt: "I wanna go outside",
      nextState: forrest
    }
  }

  var rain = {
  	videoSRC: "video/rain.mp4",
  	text: "Ugh I hate the rain",
  	choice1: {
  		btnTxt: "Stay outside",
  		nextState: outside
  	},
  	choice2: {
  		btnTxt: "Go inside",
  		nextState: car
  	}
  }

  var snow = {
  	videoSRC: "video/snow.mp4",
  	text: "I'm cold!",
  	choice1: {
  		btnTxt: "Bake something",
  		nextState: cookies
  	},
  	choice2: {
  		btnTxt: "Drink something",
  		nextState: coffee
  	}
  }

  var go = {
    text: "What weather do you prefer?",
    choice1:{
      btnTxt:"Rain",
      nextState: rain
    },
    choice2:{
      btnTxt:"Snow",
      nextState: snow
    }
  }

  var start = {
  	text: "It's time for some interactive fiction!",
  	choice1: {
  		btnTxt: "Yes, let's get this thing started",
  		nextState: go
  	}
  }

  function init() {
  	video = document.getElementById('vid');
  	btn1 = document.getElementById('button1');
  	btn2 = document.getElementById('button2');
  	btn3 = document.getElementById('button3');
  	txtBox = document.getElementById('textBox');

  	loadState(start);

  }

  function loadState(state) {
  	console.log(state);
    if(state.videoSRC) {
  		video.style.display = "block";
  		video.src = state.videoSRC;
  		video.play()

  	} else {
  		video.style.display = "none";
  	}
  	if(state.skip) {
  		video.currentTime = state.skip;
  	}
  	if(state.text) {
  		txtBox.style.display = "block";
  		txtBox.innerHTML = state.text;
  	} else {
  		txtBox.style.display = "none";
  	}
  	if(state.choice1) {
  		btn1.style.display = "block"
  		btn1.innerHTML = state.choice1.btnTxt;
  		btn1.addEventListener("click", changeState);
  		btn1.nextState = state.choice1.nextState;
  	} else {
  		btn1.style.display = "none";
  	}
  	if(state.choice2) {
  		btn2.style.display = "block"
  		btn2.innerHTML = state.choice2.btnTxt;
  		// Add an event listener
  		btn2.addEventListener("click", changeState);
  		btn2.nextState = state.choice2.nextState;
  	} else {
  		btn2.style.display = "none";
  	}
  }

  function changeState(e) {
  	loadState(e.target.nextState);
  }

  window.onload=init;
