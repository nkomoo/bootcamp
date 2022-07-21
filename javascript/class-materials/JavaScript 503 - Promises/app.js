/////////////////// Promises basics //////////////////////////

///// Promise Finally

////////// Promise all
let firstPromise = new Promise((resolve, reject) => {
  let userExist = true;

  if (userExist) {
    resolve("Completed");
  } else {
    reject("Failed");
  }
});


firstPromise
  .then((message) => {
    console.log(message);
  })
  .catch((catchError) => {
    console.log(catchError);
  }).finally(() => {
    console.log('It happened')
  });


  function checkMail() {
    return new Promise((resolve, reject) => {
        const randomInt = Math.random();
        console.log(randomInt);
        if(randomInt > 0.5) {
            resolve('Mail has arrived')
        } else {
            reject('Failed to arrive');
        }
    })
  }

  checkMail().then((mail) => {
    console.log(mail);
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    console.log('Experiment completed')
  })

  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((res) => {
    setTimeout(res, 100, 'Foo');
  })


  Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  })