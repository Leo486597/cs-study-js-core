function iteratorWrapper(input) {
  let counter = 0;
  let value;
  let done = false;

  return {
    next: () => {
      if (counter < input.length) {
        value = input[counter];
        done = false;
      } else {
        value = null;
        done = true;
      }

      counter++;

      return {
        value,
        done,
      };
    },
  };
}

const input = [1, 2];
const iterator = iteratorWrapper(input);
// const next = iterator.next();
// const next2 = iterator.next();
// const next3 = iterator.next();
// console.log(next);
// console.log(next2);
// console.log(next3);

let next = iterator.next();
while (!next.done) {
  console.log(next.value);
  next = iterator.next();
}
