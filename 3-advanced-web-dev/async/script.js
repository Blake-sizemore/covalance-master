$(document).ready(function () {

    function instantReturn(instant) {
        return console.log(instant);
    }

    function echo(message, delay) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                resolve(message);
                let err = new Error(`something is not correct`);
                reject(err);
            }, delay)
        });
    };

    let getWords = () => {
        instantReturn(`This callback is instantReturn line 7, function declared on 3 through 5 and got logged instantly`);
        echo(`hello 3000`, 3000)
            .then((a) => {
                console.log(a);
                echo(`hello again 2000`, 2000)
                    .then((a) => {
                        console.log(a);
                        echo(`hello again 1000`, 1000)
                            .then((a) => {
                                console.log(a);
                            })
                    }).catch((e) => {
                        console.log(`An error ocurred!`);
                        console.log(e);
                    });
            })
    }

    getWords();

    // Create a function called done that logs Job's done! to the console
    // Create a different function (on the global scope) called countdown that accepts two arguments, num and callback
    //     The goal of this function will be to log a "countdown" from the number passed in as an argument, delayed by 1 second each time, and when it gets to 1, it should execute the callback argument

    function done(){
        console.log(`Job's Done`);
    }

    function countdown (num,callback){
        setTimeout(()=>{
            console.log(num),1000;
        });
        const newNum = num - 1;

        let promise = new Promise ( function (resolve,reject){
            if (num == 0){
                resolve(done());
            }else {
                countDown(newNum,callback);
            }
            // let err = new Error (`oops something went wrong`);
            // reject(err);
        })
    }

countdown(10,);

});