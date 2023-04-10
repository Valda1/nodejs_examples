/* WAYS TO DECLARE ASYNC FUNTIONS

async function myFunction() {
    //function code
};

myFunction();

const myFunction = async () => {
    //function code
};

myFunction();*/

let myPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise is resolved!')
        }, 1000);
    });
}

async function myFunction() {
    let value = await myPromise();
    console.log(value);
}

myFunction();

async function asyncPromAll() {
    try{
        const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);

        for (let i = 0; i < resultArray.length; i++){
            console.log(resultArray[i]); 
    }
    }catch (error) {
        console.log(error);
    }

  };