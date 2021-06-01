// // const play = document.getElementById('play');
// // const back = document.getElementById('back');
// // const forwa = document.getElementById('forwa')
// // const music = document.querySelector('audio');
// // const image = document.getElementById('logo')

// // let isPlaying = false;



// // const playMusic = ()=>{
// //     isPlaying = true;
// //     music.play();
// //     play.classList.replace("fa-play", "fa-pause")
// //     image.classList.add('circle')
// // };

// // const pauseMusic = ()=>{
// //     isPlaying = false;
// //     music.pause ();
// //     play.classList.replace("fa-pause", "fa-play")
// //     image.classList.add('circle')
// // };

// // play.addEventListener("click",()=>{
// //     if(isPlaying){
// //         pauseMusic();
// //     }else{
// //         playMusic()
// //     }
// // })



// const myImage = document.querySelector("logo");
// const play = document.getElementById("play");
// const next = document.getElementById("next");
// const music = document.querySelector("audio");
// const previous = document.getElementById("previous")

// let isPlaying = false;

// const songs = [{
//     name=abhishek,
//     neta=bca,
//     last=chaturvedi



// }]
// [{
//         name=abhishek,
//         neta=bca,
//         last=chaturvedi
//     }]

// [{
//         name=abhishek,
//         neta=bca,
//         last=chaturvedi
//     }]

// const playMusic = () => {
//     isPlaying = true;
//     music.play();
//     play.classList.replace("fa-play", "fa-pause")
//     myImage.classList.add("circle");
// }
// const pauseMusic = () => {
//     isPlaying = false;
//     music.pause();
//     play.classList.replace("fa-pause", "fa-play");
//     myImage.classList.add("circle");
// }

// play.addEventListener("click", () => {
//     if (isPlaying) {
//         pauseMusic();
//     } else {
//         playMusic();
//     }
// })

// next.addEventListener("click",next)


const previous = document.getElementById('previous')
const play = document.getElementById('play')
const next = document.getElementById('next')
const img = document.querySelector('.image')
const music = document.querySelector('audio')
const title = document.getElementById('title')
const artist = document.getElementById('artist')


const songs = [
{
    name: "audio",
    title: "NCS songs",
    artist: "lost sky",
},
{
    name: "audio1",
    title: "NCS NEW",
    artist: "Fearless",
},
{
    name: "audio2",
    title: "Siddhu Moosewala",
    artist: "Same Beef",
},
];

let isPlaying = false;

const playMusic = () =>{
    music.play();
    isPlaying=true;
    play.classList.replace('fa-play','fa-pause')
    img.classList.add('anime')
}
const pauseMusic = () =>{
    music.pause();
    isPlaying=false;
    play.classList.replace('fa-pause','fa-play')
    img.classList.remove('anime')
}


 
play.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})

const loadSong = (songs) =>{
  title.textContent = songs.title
  artist.textContent = songs.artist;
  music.src = "music/" +songs.name + ".mp3";
  img.src = "./images/" +songs.name + ".png";
}
songIndex = 0;
const nextSong = ()=>{
    songIndex = (songIndex + 1)% songs.length;
    loadSong(songs[songIndex])
    playMusic();
}
const previousSong = ()=>{
    songIndex = (songIndex - 1 + songs.length)% songs.length;
    loadSong(songs[songIndex])
    playMusic();
}



next.addEventListener("click",nextSong)
previous.addEventListener("click",previousSong)