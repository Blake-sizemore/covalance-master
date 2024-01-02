
let resolveAfter2Seconds = () => {
    console.log('starting slow promise');

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(20);
            console.log('slow promise is done');
        }, 2000);
    });
};

let resolveAfter1Second = () => {
    console.log('starting fast promise');

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10);
            console.log('fast promise is done');
        }, 1000);
    });
};

let sequentialStart = async () => {
    console.log('==SEQUENTIAL START==');

    const slow = await resolveAfter2Seconds();
    // If the value of the expression following the await operator is not a Promise,
    // it's converted to a resolved Promise.
    const fast = await resolveAfter1Second();

    console.log(slow);
    console.log(fast);
}

let concurrentStart = async () => {
    console.log('==CONCURRENT START with await==');

    const slow = resolveAfter2Seconds(); // starts timer immediately
    const fast = resolveAfter1Second();

    console.log(await slow);
    console.log(await fast); // waits for slow to finish, even though fast is already done!
}

let stillSerial = () => {
    console.log('==CONCURRENT START with Promise.all==');

    Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(([slow, fast]) => {
        console.log(slow);
        console.log(fast);
    });
}

let parallel = () => {
  console.log('==PARALLEL with Promise.then==');

  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
}

// Callback

sequentialStart(); // takes 2 + 1 seconds in total
// use setTimeout to wait above to finish
setTimeout(concurrentStart, 4000); // takes 2 seconds in total
// wait longer
setTimeout(stillSerial, 7000); // same as before
// wait even longer
setTimeout(parallel, 10000); // truly parallelconsole.log("JavaScript is ready to run");