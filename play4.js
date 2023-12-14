function delay(letter, time) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(letter);
        resolve();
      }, time);
    });
  }
  
  async function printSequence() {
    await delay('a', 1000);
    await delay('b', 1000);
    await delay('c', 1000);
    await delay('d', 1000);
    await delay('e', 1000);
  }
  
  printSequence();
  