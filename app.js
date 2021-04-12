const songList = [{
    id: '1',
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    songSrc: './audio/Shape of You.mp3',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png'
    // imgSrc: './img/song_1_img.jpg'

}, {
    id: '2',
    title: 'Believer',
    artist: 'Imagine Dragons',
    songSrc: './audio/Believer.mp3',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Imagine-Dragons-Believer-art.jpg'

}, {
    id: '3',
    title: 'Girls Like You',
    artist: 'Maroon 5',
    songSrc: './audio/Girls Like You.mp3',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/57/Girls_like_You_cover.png'

}, {
    id: '4',
    title: 'Memories',
    artist: 'Maroon 5',
    songSrc: './audio/Memories.mp3',
    imgSrc: 'https://c-sf.smule.com/rs-s-sf-4/sing_google/performance/cover/bf/a7/8e8c5099-2985-41e6-b3f5-9a0ac8cc8636_512.jpg'

}]

// ------------------------------------------------------------------------------load songs on display music-list


arrayLength = songList.length;

for (i = 0; i < arrayLength; i++) {
    $('<span ' + 'class="songs"'+ 'id="' + songList[i].id + '"' + ' />').text(songList[i].title).appendTo('.music-list');

}



// ------------------------------------------------------------------------------ song play functions


let isPlaying = false; //to check weather song is playing or not
let currentSong = 0;
let value = 1;
let song_progress = 0;

// fetching necessary elements
const music = document.querySelector('audio'); // using audio tag directly for playing music

const audio = document.getElementById('audio-file');    //song related attributes
const cover = document.getElementById('album-cover');
const title = document.getElementById('cover-title');
const artist = document.getElementById('cover-artist');


const prev = document.getElementById('prev');       //controll related 
const play = document.getElementById('play');
const next = document.getElementById('next');

let progress = document.getElementById('progress');
let headText = document.getElementById('head-text');




// ------------------------------------------------------------------------------  play 
play.addEventListener('click', () => {

    cover.setAttribute('src', songList[currentSong].imgSrc);        //set song cover img to current index value
    audio.src = songList[currentSong].songSrc;                      //set song src audio
    title.innerText = songList[currentSong].title;                  // set song title
    artist.innerText = songList[currentSong].artist;                // set song artist name

    highlightSong();

    if (isPlaying == false) {

        //console.log(audio.src);
        music.play();
        play.classList.replace("fa-play", "fa-pause");
        isPlaying = true;
        
    } else {
        music.pause();
        play.classList.replace("fa-pause", "fa-play");
        isPlaying = false;
        
    }

})

// ------------------------------------------------------------------------------ next
next.addEventListener('click', () => {

    currentSong = (currentSong + 1) % songList.length;
    cover.setAttribute('src', songList[currentSong].imgSrc);
    audio.src = songList[currentSong].songSrc;
    title.innerText = songList[currentSong].title;
    artist.innerText = songList[currentSong].artist;
    
    removehighlightSong();
    highlightSong();

    if (isPlaying == true) {

        //console.log(audio.src);
        music.play();
        play.classList.replace("fa-play", "fa-pause");

    } else {
        music.pause();
        play.classList.replace("fa-pause", "fa-play");


    }
})

// ------------------------------------------------------------------------------ previous

prev.addEventListener('click', () => {

    currentSong = (currentSong - 1 + songList.length) % songList.length;
    cover.setAttribute('src', songList[currentSong].imgSrc);
    audio.src = songList[currentSong].songSrc;
    title.innerText = songList[currentSong].title;
    artist.innerText = songList[currentSong].artist;
    
    removehighlightSong();
    highlightSong();

    

    if (isPlaying == true) {

        //console.log(audio.src);
        music.play();
        play.classList.replace("fa-play", "fa-pause");

    } else {
        music.pause();
        play.classList.replace("fa-pause", "fa-play");


    }
})

// ------------------------------------------------------------------------------ song highlighting

function highlightSong(){
        
        //console.log(songList[currentSong].id);                          
        value = songList[currentSong].id;                          
        const songName = document.getElementById(songList[currentSong].id);     //highlight current playing song
        //console.log(songName);
        songName.style.background= 'grey';
        
}
function removehighlightSong(){
        
        //console.log(value);                          
        const songName = document.getElementById(value);     //remove highlight  from previous  playing song
        songName.style.background= '';
        
}

// ------------------------------------------------------------------------------ song progress bar


 music.addEventListener("timeupdate",(event)=>{
     const { currentTime , duration } = event.srcElement;
     
     let acurrentTime = (currentTime/60).toFixed(2);
    
     let aduration = (duration/60).toFixed(2) ;

     //console.log(acurrentTime);
     //console.log(duration);
     song_progress=(currentTime/duration )* 100;
     //console.log(song_progress);
    progress.style.width= song_progress + '%';
   
    headText.innerText= `${acurrentTime} - ${aduration}`;
 })
 

//  todo

/*  
    //add progressbar(songName)
        //add timings
        //covers mismatch
        //decimal place fixex
        //highlighting fixes

        NAN issue
*/