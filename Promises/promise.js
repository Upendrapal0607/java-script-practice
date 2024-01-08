// Function that returns a promise to simulate an asynchronous operation
function asyncOperation1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Result from asyncOperation1');
      }, 1000);
    });
  }
  
  // Function that returns a promise to simulate another asynchronous operation
  function asyncOperation2(previousResult) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`${previousResult}, and result from asyncOperation2`);
      }, 1000);
    });
  }
  
  // Using promise chaining
  asyncOperation1()
    .then((result1) => {
      console.log(result1); // Output: Result from asyncOperation1
      return asyncOperation2(result1);
    })
    .then((result2) => {
      console.log(result2); // Output: Result from asyncOperation1, and result from asyncOperation2
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
  