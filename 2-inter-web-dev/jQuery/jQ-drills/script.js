$(document).ready(function () {
    $('body').append('<input type="submit" id="btnSubmit" value="click me" disabled></input>');

    $('input#btnSubmit').before('<input type=text id=textBox></input>');

    $('input').wrapAll('<form>');

    $('input#btnSubmit').click(function () {
        alert($("input#textBox").val());  
        });

    // if($("input#textBox").attr("value") == undefined ) { 
    //     console.log ('working2');
    //     $('input#btnSubmit').attr('disabled','');
    // } else {
    //     console.log ()
    // };

    $("input#textBox").on('keypress',function(){$('input#btnSubmit').removeAttr('disabled',);});


});

   
