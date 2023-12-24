$(document).ready(function () {

    function instantReturn(instant) {
        return console.log(instant);
    }

    instantReturn(`This callback is instantReturn line 7, function declared on 3 through 5 and got logged instantly`);

    let instantReturnTwo = (instant) => {
        return console.log(instant);
    }

    instantReturnTwo(`This callback is instantReturnTwo line 12, function declared on 9 through 11 and got logged instantly`);

    // let getWords(message, delay){
    //     instantReturn(``This callback is instantReturn line 7, function declared on 3 through 5 and got logged instantly``)

    //     })
    // }

    function echo(message, delay) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(message);
                let err = new Error(`something is not correct`);
                reject(err);
            }, delay)
        });
    };

    echo(`hello 3000`,3000)
        .then((a)=>{
            console.log(a);
            echo(`hello again 2000`,2000)
                .then((a)=>{
                    console.log(a);
                    echo(`hello again 1000`,1000)
                        .then((a)=>{
                        console.log(a);
                })
        }).catch((e)=>{
            console.log(`An error ocurred!`);
            console.log(e);
        });

    // document.getElementById(btn).addEventListener(`click`,()=>{
    //     slowEcho(`Hello`,1000)
    //     .then((a)=>{
    //         console.log(a);
    //     }).catch((e)=>{
    //         console.log(`An error ocurred!`);
    //         console.log(e);
    //     });
    // });

    // let resolveAfter2Seconds = () => {
    //     console.log('starting slow promise');

    //     return new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(20);
    //             console.log('slow promise is done');
    //         }, 2000);
    //     });
    // };

});

});
