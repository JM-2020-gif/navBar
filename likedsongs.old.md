//LIKE SONG FUNCTIONS
let likedSongs = [];

function makeLiked(e) {
//allSongs[e.target.getAttribute("data-index")-1].liked = !allSongs[e.target.getAttribute("data-index" )-1].liked;

likedSongs = allSongs.filter((heartBtn) => heartBtn.liked === true);

//take the html of the selected song and push into the #likedSongs page
// if (e.target === ) {
const likedSongDivs = [];
likedSongs.forEach(song => {
const allSongDivs = document.querySelectorAll(".newSong");
// push click targets div into likedSongDivs
likedSongDivs.push(allSongDivs[e.target.getAttribute("data-index")])

})
}
