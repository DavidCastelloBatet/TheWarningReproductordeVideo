window.onload = inicio;

let videos = [
  "choke.mp4",
  "evolve.mp4",
  "martirio.mp4",
  "narcicista-live.mp4",
  "z-live.mp4",
];

console.log(videos);

var vid = document.querySelector("video");
var videoActual = 2;

function inicio() {
  vid.src = `videos/${videos[videoActual]}`;

  // evento para el play / pause
  document.querySelector(".play").onclick = play;

  // evento para el mute
  document.querySelector(".mute").onclick = mute;
}

// funcion para el play / pause
let play = () => {
  if (vid.paused) {
    vid.play();
    document.querySelector(".play").src = "./images/pause-outline.svg";
  } else {
    vid.pause();
    document.querySelector(".play").src = "./images/play.svg";
  }
};

//funcion para siguiente cancion
// funcion reset cancion

// funcion mute
let mute = () => {
  if (vid.paused) {
    // si no hay nada sonando, el boton no hace nada
    console.log("no esta sonant res");
  } else {
    // si hay video en reproduccion hago el mute
    if (vid.volume > 0) {
      vid.volume = 0;
      document.querySelector(".mute").src = "./images/volumen2.svg";
      console.log("esta en mute");
    } else {
      vid.volume = 0.5;
      document.querySelector(".mute").src = "./images/volumen1.svg";
      console.log("ara sona");
    }
  }
};

//funcion control del volumen
window.setVolume = function (val) {
  vid.volume = val / 100;
  console.log("Nivell so: " + vid.volume);
};

// funcion velocidad de reproduccion
