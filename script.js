console.log("hey JavaScript This is javed");
// initilize the variable


let songIndex=0;
let audioElement=new Audio(`songs/${songIndex+1}.mp3`);
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let playingSong=document.getElementById('playingSong');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let previous=document.getElementById('previous');
let forward=document.getElementById('forward');

let songs = [
    {songName: "Chand Se Parda Kijiye :Ashwani Machal", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bekhudi :Darshan Raval", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Noor :Sona Mohapatra", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Kithe Chaliye Tu :Jubin Nautiyal", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Katu Kaise Rahta :Jubin Nautiyal", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Sanam :Ashwani Machal", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Dil Ko Karar Aaya :Neha Kakkar", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Teri Nazron Ne Kuch Aisa Jadoo Kiya :Jubin Nautiyal", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tere Bina Jeena Saza Ho :Tej Gill", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Hawa Banke :Darshan Raval", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]



// handle play pause 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
       
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        document.getElementById(`${songIndex}`).style.backgroundColor="#bdb993";
        gif.style.opacity="1";

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play');
        document.getElementById(`${songIndex}`).style.backgroundColor="white";
        gif.style.opacity="0";

    }
});


songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
});


previous.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playingSong.innerText=songs[songIndex].songName;
    audioElement.play();
    makeAllBackgroundStyleWhite();
    document.getElementById(`${songIndex}`).style.backgroundColor="#bdb993";
});

const makeAllBackgroundStyleWhite=()=>{
    console.log("clicked!!!!");
    songItem.forEach((element)=>{

    element.style.backgroundColor="white";
    });
}

forward.addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    playingSong.innerText=songs[songIndex].songName;
    audioElement.play();
    makeAllBackgroundStyleWhite();
    document.getElementById(`${songIndex}`).style.backgroundColor="#bdb993";
   
})

audioElement.addEventListener('timeupdate',()=>{
   
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;  
});

myProgressBar.addEventListener('change',()=>{

    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})