/* Set Varaibles */
let cells = document.querySelectorAll('.row>div'); /* pulls all items that are inside of rows class in html */
let info = document.querySelector('.info');  /* pulls the info tagged elements into javascrips  */
let    rCounter = 0; /* control varaible for turns */
    let win = [
        ['.top .l','.top .m','.top .r'],
        ['.middle .l','.middle .m','.middle .r'],
        ['.br','.bm','.bl'],
        ['.top .l','.middle .m','.br'],
        ['.top .r','.middle .m','.bl'],
        ['.top .m','.middle .m','.bm'],
        ['.top .r','.middle .r','.br'],
        ['.top .l','.middle .m','.bl'],
    ];


/* Main Event */
document.querySelector('.info').textContent = 'X Starts';
for (let i =0;i<cells.length;i++){ /* this will log each div html in the coding */
        cells[i].addEventListener('click',clickedCell);
}; 

function clickedCell(event){
    if (rCounter > 8 ){ 
        ++rCounter;
        console.log(rCounter);
        resetBoard();
    } else if (rCounter >=0 && rCounter <= 8){
       if (rCounter%2 == 0 && event.target.textContent == '') {   
            event.target.textContent = 'X';
            /* winCheck('X') */
            ++rCounter;
            document.querySelector('.info').textContent = 'O turn '; /* Item outside of click can be changed */
            if (rCounter == 9) { 
                document.querySelector('.info').textContent = 'Tie, Click board to reset';
            };
            console.log(rCounter);
        } else if (rCounter%2 == 1 && event.target.textContent == ''){   
            event.target.textContent = 'O'; /* how to change the item that is clicked */
            /* winCheck('O') */
            ++rCounter;
            document.querySelector('.info').textContent = 'X turn'; /* Item outside of click can be changed */
            console.log(rCounter); 
        };
    } else { console.log('end') };
};
    /* console.log('working'); */
    /* console.log(event); */ /* the function inside of the addEventListener makes an event */
    /* console.log(event.target); */ /* this picks the exactly html cell info and links to the array */
    /* console.log(event.target.textContent); */
    /* event.target.textContent = 'X';
    ++counter;
    console.log(counter);
    console.log(counter%2); */
    /* if (counter%2 == 0 && counter < 9 && event.target.textContent == '' ) {   
        event.target.textContent = 'X';
        ++counter;
        console.log(counter);
    } else if (counter%2 == 1 && counter < 9 && event.target.textContent == '' ) {   
        event.target.textContent = 'O';
        ++counter;
        console.log(counter);
    } else {
        console.log('stall')
    } */
function winCheck(content){
for ( i=0;i<win.length;++i){}
};


function resetBoard(){
    cells.forEach(cell => {cell.textContent = ''});
    rCounter = 0;
    document.querySelector('.info').textContent = 'Game Reset, X starts'
    };

function selector(event){
    return document.querySelector(event).textContent
  };