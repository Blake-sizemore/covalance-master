$(document).ready(function () {
    // Elements
    $('body').append('<input type="submit" id="btnSubmit" value="click me" disabled=""></input>');
    $('input#btnSubmit').before('<input type="text" id="textBox" placeholder="enter text here" value=></input>');
    $('input').wrapAll('<form>');
    $('body').append('<div><ul>');

    // Events - .on, .change, .keyup, .keydown, .keypress, .click, .dblclick, .blur
    $("input#textBox").on('blur' && 'mouseover' && 'mouseout' && 'keyup', function () {
        if ($(this).val() !== '') {
            console.log("defined");
            $('input#btnSubmit').removeAttr('disabled');
        } else {
            console.log("undefined");
            $('input#btnSubmit').attr('disabled', 'disabled');
        };
    });

    // random RGB function
    function randomNum() {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return [r, g, b];
    };

    // click function for button
    $('input#btnSubmit').click(function (event) {
        alert($("input#textBox").val());
        $('ul').append('<li>' + $("input#textBox").val());
        $("li").mouseover(function () { console.log("mouseover"); });
        $("li").click(function () { $(this).css('color', "rgb(" + randomNum() + ")"); });
        $("li").dblclick(function () { $(this).remove(); });
        $("input#textBox").val(null);
        event.preventDefault();
    });
});