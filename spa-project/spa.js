
const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            pg.addEventListener('show', app.pageShown);
        })
        
        document.querySelectorAll('.nav-link').forEach((linkItem)=>{
            linkItem.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'All Songs', '#allSongs');
        window.addEventListener('popstate', app.poppin);
    },
     nav: function(ev){
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
    }, 
    pageShown: function(ev){
        console.log('Page', ev.target.id, 'just shown');
        let h1 = ev.target.querySelector('h1');

  

      //  localStorage.setItem('person', JSON.stringify(person)); 
        //var retrievedPerson = JSON.parse(localStorage.getItem('person'));


    },
    poppin: function(ev){
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#' ,'');
        
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);   
    }   
}
document.addEventListener('DOMContentLoaded', app.init);



const songList = document.querySelector(".songList");

const allSongs = [];

function addNewSong() {
  // Define the emoji data
  let song = {
    cover:
      "https://upload.wikimedia.org/wikipedia/en/a/a6/Schoolboy_Q_-_Crash_Talk.png",
    isPlaying: false,
    artist: "Schoolboy Q",
    title: "CrasH",
    liked: false,
    songId: allSongs.length + 1,
    audio: ""
  };
  // Add it to the allSongs array
  allSongs.push(song);

  // Add it to the DOM
  let newSong = document.createElement("div");
  newSong.classList.add("newSong");
  songList.appendChild(newSong);

  //song cover
  let newSongCover = document.createElement("img");
  newSongCover.classList.add("newSongCover");
  newSongCover.src = song.cover;
  newSong.appendChild(newSongCover);

  //play button
  let newSongPlayBtn = document.createElement("img");
  newSongPlayBtn.src = "https://i.ibb.co/j59Mq8R/songlist-Play.png";
  newSongPlayBtn.classList.add("newSongPlayBtn");
  newSong.appendChild(newSongPlayBtn);

  //song artist and title div
  let newSongInfo = document.createElement("div");
  newSongInfo.classList.add("newSongInfo");
  newSong.appendChild(newSongInfo);

  //artist
  let newSongArtist = document.createElement("h3");
  newSongArtist.innerHTML = song.artist;
  newSongInfo.appendChild(newSongArtist);

  //title
  let newSongTitle = document.createElement("h4");
  newSongTitle.innerHTML = song.title;
  newSongInfo.appendChild(newSongTitle);

  //icons div
  let newSongIcons = document.createElement("div");
  newSongIcons.classList.add("icons");
  newSong.appendChild(newSongIcons);

  let newSongHeart = document.createElement("img");
  newSongHeart.setAttribute("data-index", allSongs.length);
  newSongHeart.classList.add("heart");
  newSongHeart.src = "https://i.ibb.co/N1ZtcqP/heart-Empty.png";
  newSongIcons.appendChild(newSongHeart);

  newSongHeart.addEventListener('click',makeLiked) ;


  ///TRASH BUTTON
  let newSongTrash = document.createElement("img");
  newSongTrash.classList.add("trash");
  newSongTrash.src = "https://i.ibb.co/sJTxwk6/trash.png";
  newSongIcons.appendChild(newSongTrash);
  
  //AUDIO
  let newSongAudio = document.createElement("audio");
  newSongHeart.classList.add("newAudio");
  newSongAudio.src = 'THIS NEEDS THE SRC OF UPLOADED'
  newSong.appendChild(newSongAudio);
  
  
  // REMOVE ITEM ON CLICK
  newSongTrash.addEventListener("mouseup", (e)=>  {e.target.parentNode.parentNode.remove()})

  let newSongLine = document.createElement("div");
  newSongLine.classList.add("line");
  newSong.appendChild(newSongLine);
}

addNewSong();
addNewSong();


//declare heart button and give it an event listener for click
let heartBtn = document.querySelector(".heart");
heartBtn.addEventListener("click", function () {
  //give it a new red heart image



});



//////// ADD SONG BUTTON, opens the realUploadBtn
const realUploadBtn = document.querySelector("#real-upload");
const addSongBtn = document.querySelector("#addSongBtn");

addSongBtn.addEventListener("click", function () {
  realUploadBtn.click();
});




