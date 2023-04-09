const promise = new Promise((resolve, reject) => {
    resolve();
});

promise
    .then(() => {
        console.log('first');
    })
    .then(() => {
        console.log('second');
    })
    .then(() => {
        console.log('third');
    })
    .catch((error) => {
        console.log('error ', error);
    });


    //EXAMPLE WITH setTimeout

    const anotherPromise = new Promise((resolve, reject) => {
        resolve();
    });
    
    anotherPromise
        .then(() => {
            console.log('first');
        })
        .then(() => {
            setTimeout(() => {
                console.log('second');
            }, 2000);
        })
        .then(() => {
            setTimeout(() => {
                console.log('third');
            }, 1000);
        });