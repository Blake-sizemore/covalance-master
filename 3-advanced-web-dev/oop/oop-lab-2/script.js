$(document).ready(function () {
    $(`body`).addClass(`contianer`);
    $(`header`).addClass(`row justify-content-center`);
    $(`header`).append(`<button>`);
    $(`button`).text(`click me to roll a die`);
    $(`button`).addClass(`col col-sm-3 btn bg-primary`);
    $('main').addClass(`row bg-dark`);
    $(`main`).append(`<div>`);
    $(``).text(textString);
    $(`div`).addClass(`row`);
    class die {
        constructor(){
            this.div = $(`main`).append(`<div>`);
            $(this.div).addClass(`row bg-dark`);
            this.value = this.roll();

        }
        roll(){
            return Math.floor(Math.random()*6);
        }
    }
    new die();
    // button.addEventListener('click', function () {
    // })

});