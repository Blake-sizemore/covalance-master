$(document).ready(function () {
    $(`body`).addClass(`contianer`).addClass(`bg-dark`);
    $(`header`).addClass(`row justify-content-center`).append(`<button>`);
    $(`button`).text(`Generate Die`).addClass(`col col-4 btn bg-primary m-1`);
    $('main').addClass(`row bg-dark justify-content-center my-3`).append(`<div>`);
    $(`main div`).addClass(`dieHold row justify-content-center`);
    let button = document.querySelector(`button`);
    let dieCount = 0;

    class Die {
        constructor() {
            this.div = document.createElement(`div`);
            this.value = this.roll();
            $(this.div).addClass(`die bg-primary text-center borader boarder rounded-2 m-1`).text(`${this.value}`).width(`100px`).height(`100px`).attr(`id`,`${dieCount}`);
            console.log(this);
            $(this.div).appendTo(`div.dieHold`);
            this.reRoll();
        }
        roll() {
            return Math.floor(Math.random() * 6);
        }
        reRoll(){
            this.die = document.getElementsByClassName(`die`);
            if (dieCount == 0) {
                $(`main`).append(`<button>`);
                $(`button.roll`).addClass(`row btn bg-primary text-center borader boarder rounded-2 m-1 roll`).text(`reroll all dice`);
            }

        }
    }

    class roll extends Die {

    }
    button.addEventListener('click', function () { 
        new Die(); 
        ++dieCount;
        
    }
        );
    // button.addEventListener('click', function () {
    // })

});