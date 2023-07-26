document.addEventListener("DOMContentLoaded", function () {
    let friends = ['jeff', 'claire', 'andrew', 'cory', 'parker'];
    let lineOne = " lines of code in the file, ";
    let lineTwo = " lines of code; John strikes one out, clears it all out,"
    let lineThree = " lines of code in the file";
    let num = 100;
    let noNum = "no more"
    // create appendTo for Elements function
    // const createEappend = (element, idName, className, appendTo) => {
    //     const e = document.createElement(element);
    //     e.className = className;
    //     appendTo.appendChild(e);
    //     e.setAttribute('id', idName);
    //     return e;
    // };
    // create appendTo for text function
    // const createTappend = (text, appendTo) => {
    //     const t = document.createTextNode(text);
    //     appendTo.appendChild(t);
    //     return t
    // };

    for (n = 0; n <= friends.length; ++n) {
        console.log(friends[n]);
        for (i = num; i > 0; --num) {
            let songLyric = num + lineOne + num + lineTwo + --num + lineThree;
            console.log(songLyric);
        };
    };
});