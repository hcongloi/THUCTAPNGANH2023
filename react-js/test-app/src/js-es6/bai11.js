// Một hàm trả về một Promise
function delay(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  // Promise resolve sau 2s
  let promise1 = delay(2000).then(() => 'Hello World');
  
  // Promise reject sau 2s
  let promise2 = delay(2000).then(() => { throw 'Error'; });
  
  // Promise resolve hoặc reject dựa trên Math.random
  let promise3 = new Promise((resolve, reject) => {
      if (Math.random() > 0.5) {
          resolve('Hello World');
      } else {
          reject('Error');
      }
  });
  
  promise1.then(success => console.log('Success:', success))
      .catch(error => console.log('Fail:', error))
      .finally(() => console.log('End'));
  
  promise2.then(success => console.log('Success:', success))
      .catch(error => console.log('Fail:', error))
      .finally(() => console.log('End'));
  
  promise3.then(success => console.log('Success:', success))
      .catch(error => console.log('Fail:', error))
      .finally(() => console.log('End'));