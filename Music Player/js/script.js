let songs = [
  {
    name: "first",
    songName: "Low Life",
    title: "Future ft. The Weeknd",
  },
  {
    name: "second",
    songName: "Lizofv",
    title: "Gatway To The Real World",
  },
  {
    name: "third",
    songName: "BLOOD",
    title: "Then Comes Silence",
  },
];

let song = document.getElementById("audio-1");
let progress = document.getElementById("progress");
let playPauseBtn = document.getElementById("play-btn");
let playIcon = document.getElementById("play");
let pauseIcon = document.getElementById("pause");
let nextBtn = document.getElementById("next-song");
let prevBtn = document.getElementById("back-song");
let songName = document.getElementById("songName");
let songTitle = document.getElementById("songContent");
let songImage = document.getElementById("songImage");

setTimeout(() => {
  let durationMinute = Math.floor(song.duration / 60);
  let durationSecond = Math.floor(song.duration % 60);
  document.getElementById(
    "durationTime"
  ).innerHTML = `${durationMinute}:${durationSecond}`;
}, 300);
let stop;
playPauseBtn.addEventListener("click", PlaySong);

function PlaySong() {
  progress.max = song.duration;

  if (pauseIcon.style.display === "block") {
    document.getElementById("songImage").classList.add("rotateRemove");

    pauseIcon.style.display = "none";
    playIcon.style.display = "block";
    song.pause();
  } else {
    document.getElementById("songImage").classList.add("rotate");
    document.getElementById("songImage").classList.remove("rotateRemove");

    pauseIcon.style.display = "block";
    playIcon.style.display = "none";
    song.play();
  }

  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);

  setInterval(() => {
    let minute = Math.floor(song.currentTime / 60);
    let second = Math.floor(song.currentTime % 60);
    document.getElementById("currentTime").innerHTML = `${minute}:${second}`;
    if (song.currentTime === song.duration) {
      document.getElementById("songImage").classList.remove("rotate");
      progress.value = 0;
      pauseIcon.style.display = "none";
      playIcon.style.display = "block";
      song.currentTime = 0;
    }
  }, 500);
}

let songIndex = 1;

function songDetails() {
  songName.textContent = currentSong.songName;
  songTitle.textContent = currentSong.title;
  songImage.src = "images/" + currentSong.name + ".jpg";
  song.src = "musics/" + currentSong.name + ".mp3";
}

nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

function nextSong() {
  currentSong = songs[songIndex];
  songIndex = (songIndex + 1) % songs.length;

  pauseIcon.style.display = "none";
  playIcon.style.display = "block";
  song.pause();
  document.getElementById("songImage").classList.remove("rotate");

  setTimeout(() => {
    let durationMinute = Math.floor(song.duration / 60);
    let durationSecond = Math.floor(song.duration % 60);
    document.getElementById(
      "durationTime"
    ).innerHTML = `${durationMinute}:${durationSecond}`;
  }, 300);
  songDetails();
}

function prevSong() {
  // songIndex = 0
  songIndex = (songIndex - 1 + songs.length) % songs.length;

  currentSong = songs[songIndex];
  console.log(songIndex);

  pauseIcon.style.display = "none";
  playIcon.style.display = "block";
  song.pause();
  document.getElementById("songImage").classList.remove("rotate");
  setTimeout(() => {
    let durationMinute = Math.floor(song.duration / 60);
    let durationSecond = Math.floor(song.duration % 60);
    document.getElementById(
      "durationTime"
    ).innerHTML = `${durationMinute}:${durationSecond}`;
  }, 300);
  songDetails();
}

progress.onchange = function () {
  song.currentTime = progress.value;
};
