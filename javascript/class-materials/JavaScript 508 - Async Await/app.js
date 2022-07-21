/////////////////// Async Await //////////////////////////
function resolveAfterOneSecond() {
  return new Promise((resolve, reject) => {
    const isExist = false;
    if (isExist) {
      resolve("Completed");
    } else {
      reject("Rejected");
    }
  });
}

// This catches resolved and rejected promise.

// resolveAfterOneSecond()
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((errMsg) => console.log(errMsg));

// Catches only resolved promise
// async function testAsync() {
//   const result = await resolveAfterOneSecond();
//   console.log(result);
// }

// testAsync();
