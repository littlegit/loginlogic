const helloWorld = require('./'); // require the `index.js` file from this same directory.
let oPromise;

console.log('-- Start');

oPromise = helloWorld('')
   .then(result => {
      console.log('- Result:',result);
   })
   .catch(oError => {
      console.log('- Error (caught by App):',oError);
   });

console.log('-- End');

console.log('-- Start');

oPromise = helloWorld('LoginLogic')
   .then(result => {
      console.log('- Result:',result);
   })
   .catch(oError => {
      console.log('- Error (caught by App):',oError);
   });

console.log('-- End');
