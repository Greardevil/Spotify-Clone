console.log("Welcome To Spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let Playing=document.getElementById('Playing');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Uska Hi Banana",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Mast Magan",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Aaj Fir",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Aashique Aa Gyi",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Aasan Nhi Yahan",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Aabaad Barbaad",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//audioElement.play();
//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Playing.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        Playing.style.opacity = 0;
    }
})
//listen to event
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('Click',(e)=>{
        console.log(e.target);
        e.target.classList.remove('fa-circle-play');
    })
})