/////////////////// Callback Pattern //////////////////////////
// ---- Example 4 - Call Backs ---- \\
// function passed as an argument to another

function test1(funct) {
  console.log('Step 1')
  funct();
}

function test2() {
  console.log('Step2')
}

test1(test2);


//  Callback Hell ---- \\




function motion() {
  setTimeout(() => {
    console.log('Step 1');
    setTimeout(() => {
      console.log('Step 2');
      setTimeout(() => {
        console.log('Step 3');
        setTimeout(() => {
          console.log('Step 4');
        }, 1000)
      }, 2000)
    }, 1000)
  }, 1000)
}
