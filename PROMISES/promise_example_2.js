/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 5000)
});*/

/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject()
    }, 5000)
});*/

const myFunction = (resolve, reject) => {
    if(num > 0){
        resolve();
    }else{
        reject();
    };

};

const myPromise = new Promise (myFunction);

const onFullfilment = () => {
    console.log('The promise resolved!');
};

const onRejection = () => {
    console.log('The promise got rejected!');
};

myPromise.then(onFullfilment);
myPromise.catch(onRejection);