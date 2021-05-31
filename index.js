// const play = document.getElementById('play');
// const back = document.getElementById('back');
// const forwa = document.getElementById('forwa')
// const music = document.querySelector('audio');
// const image = document.getElementById('logo')

// let isPlaying = false;



// const playMusic = ()=>{
//     isPlaying = true;
//     music.play();
//     play.classList.replace("fa-play", "fa-pause")
//     image.classList.add('circle')
// };

// const pauseMusic = ()=>{
//     isPlaying = false;
//     music.pause ();
//     play.classList.replace("fa-pause", "fa-play")
//     image.classList.add('circle')
// };

// play.addEventListener("click",()=>{
//     if(isPlaying){
//         pauseMusic();
//     }else{
//         playMusic()
//     }
// })



const myImage = document.querySelector("logo");
const play = document.getElementById("play");
const next = document.getElementById("next");
const music = document.querySelector("audio");
const previous = document.getElementById("previous")

let isPlaying = false;

const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause")
    myImage.classList.add("circle");
}
const pauseMusic = () =>{
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");


}

play.addEventListener("click",() =>{
    if(isPlaying){
      pauseMusic();
    }else{
        playMusic();
    }
})

