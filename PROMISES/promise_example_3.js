const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 recorded successfully!');
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 recorded successfully!');
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 recorded successfully!');
});



Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
    .then((messages) => {
        console.log(messages);
    });



Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree])
    .then((message) => {
        console.log(message);
    });   
