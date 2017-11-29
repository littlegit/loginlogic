"use strict";

module.exports = function helloWorld(name) {

   const oResultPromise = new Promise((resolve, reject) => {

      // const sResult = ''; // DEBUG; Tgriggers runtime error handler in callee
      let sResult = '';

      if (name.length === 0) {
         sResult = 'Validation error: String length required';
         return reject(sResult); // Abort further processing
      }

      sResult = 'Hello World, ' + name;

      resolve(sResult);

   });

   return oResultPromise;

};
