// listen for DOMContentLoaded
window.addEventListener('DOMContentLoaded', function () {
    let headers = document.getElementsByTagName('h2'); // get a list of all <h2> elements
    let header = headers[0]; // get the first h2 element
    let likes = document.getElementById('likes'); // this will get the element with the id "likes"
    let numLikes = Math.ceil(Math.random() * 100000); // don't do this in production ;)
    let likeContent = document.createTextNode(numLikes + ' Likes'); // create the likes text

    header.style.color = '#4682B4'; // set the header text color to a nice blue
    header.style.textTransform = 'uppercase'; // transform the header text to be all uppercase
    header.style.textAlign = 'center'; // center the header text
    likes.style.textAlign = 'center'; // center the likes

    likes.appendChild(likeContent);
});