console.log("Welcome to Spotify");

let songIndex= 0;
let audioElement = new Audio('songs/1.mp3');



document.addEventListener('DOMContentLoaded', function() {

let myGif = document.getElementById("gif")
let masterSongName = document.getElementById("masterSongName")
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs = [
    {songName: "Salam-e-Ishq", filePath:"songs/1.mp3", coverPath:"covers/1.jpg" },
    {songName: "Cipher", filePath:"songs/2.mp3", coverPath:"covers/2.jpg" },
    {songName: "Sweeter Vermouth", filePath:"songs/3.mp3", coverPath:"covers/3.jpg" },
    {songName: "Dancing on Green Gras", filePath:"songs/4.mp3", coverPath:"covers/4.jpg" },
    {songName: "Drop and Roll", filePath:"songs/5.mp3", coverPath:"covers/5.jpg" },
    {songName: "Blue Skies", filePath:"songs/6.mp3", coverPath:"covers/6.jpg" },
    {songName: "Life of Riley", filePath:"songs/7.mp3", coverPath:"covers/7.jpg" },
    {songName: "Believer", filePath:"songs/8.mp3", coverPath:"covers/8.jpg" }

]

songItems.forEach((element,i)=>{

  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})



masterPlay.addEventListener('click', ()=> { 
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();  
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      myGif.style.opacity=1;
    }
    else {
       audioElement.pause();
       masterPlay.classList.remove('fa-pause-circle');
       masterPlay.classList.add('fa-play-circle');
       myGif.style.opacity = 0;
      }
})




audioElement.addEventListener('timeupdate', ()=> {

let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value = progress;

})


myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = (clickedElement) => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    if (element !== clickedElement) {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays(element);
    songIndex= parseInt(e.target.id);
    element.classList.remove("fa-play-circle");
    element.classList.add("fa-pause-circle");
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    myGif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle"); 
    masterPlay.classList.add("fa-pause-circle"); 
  
  });
});

document.getElementById('next').addEventListener('click',()=>{
  console.log("next clicked")
  if(songIndex>=7){
    songIndex=0;
  }
  else{
    songItems +=1;
  }

  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  myGif.style.opacity=1;
  masterPlay.classList.remove("fa-play-circle"); 
  masterPlay.classList.add("fa-pause-circle"); 

})

document.getElementById('previous').addEventListener('click',()=>{
  console.log("previous clicked")
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songItems-=1;
  }

  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText=songs[songIndex].songName;
  audioElement.currentTime=0;
  audioElement.play();
  myGif.style.opacity=1;
  masterPlay.classList.remove("fa-play-circle"); 
  masterPlay.classList.add("fa-pause-circle"); 

})



})