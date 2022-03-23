// La funcio inicio() es crida immediatament després
// que el navegador carregui l'objecte.
window.onload = inicio;

// Array inicial de los videos
let videos = [
  "choke.mp4",
  "evolve.mp4",
  "martirio.mp4",
  "narcicista-live.mp4",
  "z-live.mp4",
];
console.log(videos);

// Array vacio que se llenara al ejecutar reordenar()
let ordenDeLosVideos = [];

var vid = document.querySelector("video");

// funcion comodin para llamar funciones y disparar eventos
function inicio() {
  // LLamada a la funcion para reordenar videos
  reordenar();
  console.log(ordenDeLosVideos);

  // mandamos el video seleccionado al src del html
  vid.src = `videos/${videos[ordenDeLosVideos[0]]}`;

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

// Funciones relacionadas con el SONIDO (mute y control volumen)
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
      console.log("Nivell so: " + vid.volume);
    }
  }
};

//funcion subir / bajar volumen
window.setVolume = function (val) {
  vid.volume = val / 100;
  console.log("Nivell so: " + vid.volume);
};

// funcion para reordenar los videos del array de forma aleatoria
function reordenar() {
  for (video of videos) {
    do {
      var azar = Math.floor(Math.random() * videos.length);
    } while (ordenDeLosVideos.indexOf(azar) >= 0);
    ordenDeLosVideos.push(azar);
  }
  return ordenDeLosVideos;
}

// funcion velocidad de reproduccion
