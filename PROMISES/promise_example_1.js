//Example 1 of how to declare a Promise object

let num = 1;

const myFunction = (resolve, reject) => {
    if(num > 0){
        resolve('Promise resolved!');
    }else{
        reject('Promise got rejected!');
    };

};

const myPromise = new Promise (myFunction);

//Example 2 of how to use a Promise object

const shopInventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};

const myExecutor = (resolve, reject) => {
  if(inventory['sunglasses'] > 0){
    resolve('Sunglasses order processed.');
  }else{
    reject('That item is sold out.');
  }
}

const orderSunglasses = () => {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise);