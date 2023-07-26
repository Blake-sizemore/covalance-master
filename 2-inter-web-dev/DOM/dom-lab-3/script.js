document.addEventListener("DOMContentLoaded", function () {
    let friends = ['Jeff', 'Claire', 'Andrew', 'Cory', 'Parker'];
    let lyric = [" lines of code in the file, ", " lines of code; ", " strikes one out, clears it all out ,", " lines of code in the file."];
    let noNum = "no more";
    let num = 99;

    // // create appendTo for Elements function
    const createEappend = (element, idName, className, appendTo) => {
        const e = document.createElement(element);
        e.className = className;
        appendTo.appendChild(e);
        e.setAttribute('id', idName);
        return e;
    };
    // // create appendTo for text function
    const createTappend = (text, appendTo) => {
        const t = document.createTextNode(text);
        appendTo.appendChild(t);
        return t;
    };
    // get body tag
    let body = document.querySelector("body");

    let title = createEappend('h1', '', 'title', body);
    let titleText = createTappend('My Singing Friends', title);
    let singBtn = createEappend("div", '', "col btn bg-primary", body);
    let singText = createTappend("Sing", singBtn);
    singBtn.addEventListener('click', function () {
        for (n = 0; n < friends.length; ++n) {
            let friend = friends[n];
            console.log(friend);
            let divFriend = createEappend('div', '', 'friend', body)
            let addFriend = createEappend('h3', '', 'friend', divFriend);
            let friendName = createTappend(friend, addFriend);
                for (i = 99; i >= 1; --i) {
                    if (i > 1) {
                        let songLyric = i + lyric[0] + i + lyric[1] + friend + lyric[2] + (i - 1) + lyric[3];
                        console.log(songLyric);
                        let p = createEappend('p','','',divFriend);
                        let pText = createTappend(songLyric,p);
                        
                    } else {
                        let songLyric = i + lyric[0] + i + lyric[1] + friend + lyric[2] + noNum + lyric[3];
                        console.log(songLyric);
                        let p = createEappend('p','','',divFriend);
                        let pText = createTappend(songLyric,p);
                    };
                };
            };
        });
    });
