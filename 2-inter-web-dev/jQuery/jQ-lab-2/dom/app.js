// DOM script 
document.addEventListener('DOMContentLoaded', function () {
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
    let body = document.querySelector("body");
    body.className = "bg-dark";
    // Row 1
    let row1 = createEappend('div', '', 'row justify-content-center', body);
    let row1p = createEappend('h2', '', 'col col-2 m-4 text-warning', row1);
    let row1Text = createTappend('Step 1', row1p);
    let button = createEappend('div', '', 'col col-4 m-4 btn bg-primary align-self-center', row1);
    let btnText = createTappend('Click Me for a nice message', button);
    button.addEventListener('click', function () { alert("Yes, have some!") });
    // Row 2
    let row2 = createEappend('div', '', 'row justify-content-center', body);
    let row2p = createEappend('h2', '', 'col col-2 my-4 me-5 text-warning', row2);
    let row2Text = createTappend('Step 2', row2p);
    let textBox = createEappend('input', 'input1', 'col col-2  border border-success align-self-center rounded-3', row2);
    let button2 = createEappend('div', '', 'col col-2  btn bg-primary align-self-center', row2);
    textBox.setAttribute('type', 'text');
    let btnText2 = createTappend('<- Type there, Click Here', button2);
    button2.addEventListener('click', function () {
        let textVal = document.querySelector('#input1').value;
        alert(textVal);
    });
    // Row 3
    let row3 = createEappend('div', '', 'row justify-content-center', body);
    let row3p = createEappend('h2', '', 'col col-2 m-4 text-warning', row3);
    let row3Text = createTappend('Step 3', row3p);

    let colorBox = createEappend('div', '', 'col col-4 m-4 border border-primary text-white rounded-3 align-self-center text-center', row3);
    let colorText = createTappend('Color changing box, mouse over', colorBox);
    function randomRgb() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    };
    colorBox.addEventListener('mouseover', function () {
        colorBox.style.backgroundColor = randomRgb();

    });
    colorBox.addEventListener('mouseout', function () {
        colorBox.style.backgroundColor = null;

    });

    // Row 4
    let row4 = createEappend('div', '', 'row justify-content-center', body);
    let row4p = createEappend('h2', '', 'col col-2 m-4 text-warning', row4);
    let row4Text = createTappend('Step 4', row4p);

    let colorTextDiv = createEappend('div', '', 'col col-4 m-4 border border-success bg-primary rounded-3 justify-content-center', row4);
    let colorTextp = createEappend('p', '', 'text-center ', colorTextDiv);
    let colorTextText = createTappend('Color changing text, click me', colorTextp);
    colorTextDiv.addEventListener('click', function () {
        colorTextp.style.color = randomRgb();
    });

    // Row 5
    let row5 = createEappend('div', '', 'row justify-content-center', body);
    let row5p = createEappend('h2', '', 'col col-2 m-4 text-warning', row5);
    let row5Text = createTappend('Step 5', row5p);

    let button3 = createEappend('div', '', 'col col-4 m-4 btn bg-primary align-self-center', row5);
    let button3Text = createTappend('Click here to show a friend', button3);
    let freinds = ['fred', 'ben', 'bob', 'jim', 'bo', 'john', 'susan', 'mary', 'margo', 'wes'];
    button3.addEventListener('click', function () {
        for (i = 0; i < freinds.length; ++i) {
            let freindLi = createEappend('li', '', '', row6ul);
            let liText = createTappend(freinds[i], freindLi);
        };
    });

    // Row 6
    let row6 = createEappend('div', '', 'row justify-content-center', body);
    let row6ul = createEappend('ul', '', 'col col-2 m-4 text-warning', row6);

});