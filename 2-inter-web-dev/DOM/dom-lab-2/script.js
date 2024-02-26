document.addEventListener("DOMContentLoaded", function () {
    // create the main container
    let body = document.querySelector("body");
    body.className = "bg-dark ";

    // create appendTo function
    const createElement = (element, idName, className, appendTo) => {
        const e = document.createElement(element);
        e.className = className;
        appendTo.appendChild(e);
        e.setAttribute('id', idName);
        return e;
    };
    // create appendTo function
    const createTappend = (text, appendTo) => {
        const t = document.createTextNode(text);
        appendTo.appendChild(t);
        return t
    };

    // elements being created
    let divContainer = createEappend("div", "contain", "container my-3", body);
    let row1 = createEappend("div", "row1", "row justify-content-center", divContainer);
    let btn = createEappend("div", "createSquare", "col col-md-3 col-lg-3 btn bg-primary", row1);
    let btnText = createTappend("Click Here for new square", btn);
    let row2 = createEappend('div', "row2", 'row col-12', divContainer);
    let squareId = 0;
    

    //create button click function
    btn.addEventListener('click', function () {
        console.log('button clicked');
        squareId+=1;
        let square = createEappend('div',squareId,'col bg-warning text-center round-3 m-1m',row2);
        let squareText = createTappend(squareId, square);
        let colors = [ '#007bff', '#6c757d', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#f8f9fa', '#343a40' ];
    });

    // create random color function
    const randomColor = () => { const myRandomColor = colors}

    });