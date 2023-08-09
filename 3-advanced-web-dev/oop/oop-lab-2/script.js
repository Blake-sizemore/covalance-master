$(document).ready(function () {
    $(`body`).addClass(`contianer`).addClass(`bg-dark`);
    $(`header`).addClass(`row justify-content-center`).append(`<div></div`);
    $(`div`).text(`Generate Die`).addClass(`col col-4 btn bg-primary m-1 gen`);
    $('main').addClass(`row bg-dark justify-content-center my-3`).append(`<div>`);
    $(`main div`).addClass(`dieHold row justify-content-center`);
    let diceGen = document.querySelector(`div.gen`);
    let dieCount = 0;

    class Die {
        constructor() {
            this.div = document.createElement(`div`);
            this.value = this.roll();
            $(this.div).addClass(`die bg-light text-center borader boarder rounded-2 m-2`).text(`${this.value}`).width(`100px`).height(`100px`).attr(`id`, `${dieCount}`);
            console.log(this);
            $(this.div).appendTo(`div.dieHold`);
            this.reRoll();
        }
        roll() {
            return Math.floor(Math.random() * (6 - 1)) + 1;
        }
        reRoll() {
            if (dieCount == 0) {
                $(`main`).append('<div id="rr">');
                this.rr = document.getElementById("rr");
                $(this.rr).addClass(`col col-4 btn bg-primary text-center borader boarder rounded-2 m-3`).text(`reroll all dice`);
                this.rr.addEventListener('click', function () {
                    this.die = document.getElementsByClassName('die');
                    console.log($(this.die).text());
                    // this.val = $(this.die).val(keys);
                    // console.log(this.val);
                })
            }

        }
    }

    class roll extends Die {

    }
    diceGen.addEventListener('click', function () {
        new Die();
        ++dieCount;

    }
    );
    // button.addEventListener('click', function () {
    // })

});