const helloWorld = require('./'); // require the `index.js` file from this same directory.

let iTestTotalSuccess, oPromise1, oPromise2, aPromise;

iTestTotalSuccess = 0;

console.log('- LoginLogic Unit Tests - Start');
console.log('-');

oPromise1 = helloWorld('')
   .then(result => {
      return new Promise(resolve => resolve('TEST FAIL - Result: '+result));
   })
   .catch(oError => {
      iTestTotalSuccess++;
      return new Promise(resolve => resolve('TEST SUCCESS - Error (caught by App): ' + JSON.stringify(oError)));
   });

oPromise2 = helloWorld('LoginLogic')
   .then(result => {
      iTestTotalSuccess++;
      return new Promise(resolve => resolve('TEST SUCCESS - Result: '+result));
   })
   .catch(oError => {
      return new Promise(resolve => resolve('TEST FAIL - Result: ' + JSON.stringify(oError)));
   });

aPromise = [oPromise1,oPromise2];

Promise.all(aPromise).then(function(aPromise){

   aPromise.map(function(oPromise){
      console.log(oPromise);
   });

   console.log('-');
   console.log('TESTS: ', aPromise.length);
   console.log('PASS: ',  iTestTotalSuccess);
   console.log('FAIL: ',  aPromise.length - iTestTotalSuccess);
   console.log('-');
   console.log('- LoginLogic Unit Tests - End')

});
