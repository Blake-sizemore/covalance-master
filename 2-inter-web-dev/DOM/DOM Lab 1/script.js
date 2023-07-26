document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div');
    div.className = "header-container";
    let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'gray', 'magenta', 'cyan'];
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Click to add a new list items');
    let list = document.createElement('ul');
    btn.className = 'listBtn';
    let l = 1;
    function randomColors(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let select = arr[randomIndex];
        return select;
    };
    for (let i = 1; i <= 6; i++) {
        let h = 'h' + i;
        let hNum = document.createElement(h);
        let hText = document.createTextNode('this is ' + h + ' text');
        hNum.appendChild(hText);
        div.appendChild(hNum);
        hNum.className = h;
        let hTags = div.querySelectorAll(h);
        hTags.forEach(h => {
            h.addEventListener('dblclick', function () {
                h.style.color = randomColors(colors);
            });
        });
    };
    btn.addEventListener('click', function () {
        let listed = document.querySelector('ul');
        let listItem = document.createElement('li');
        let listText = document.createTextNode('This is list item ' + l);
        listItem.addEventListener('click', function () {
            listItem.style.color = randomColors(colors);
        });
        listItem.addEventListener('dblclick', function () {
            listed.removeChild(listItem);
        });
        if (l > 0) { ++l; };
        listItem.appendChild(listText);
        listed.appendChild(listItem);
    });
    btn.appendChild(btnText)
    document.body.appendChild(div);
    document.body.appendChild(btn);
    document.body.appendChild(list);
});