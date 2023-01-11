'use strict';
const app = {
  name: 'leo',
  getName() {
    console.log(this.name);
  },
  get nameGetter() {
    console.log(this.name);
  },
};

const appFuc = function () {
  const name = 'leo';
  // this only exist when the function is invoked with new keywordg
  // the propert will assign to it's prototype
  this.wife = 'molly';

  return {
    that: this,
    name,
    getName() {
      // name in backpack, must be there
      console.log('name from closure', name);

      // name in backpack, must be there
      console.log('name from this', this.name);

      // undefined, as the lexicol scope is the wrapper empty object
      console.log('this is,', this);

      console.log('that,', this.that);
    },
  };
};

// app.getName()
// app.nameGetter
// console.dir(app)

console.log('appFuc');
console.dir(appFuc);
const app2 = new appFuc();
app2.getName();
console.log('app2');
console.dir(app2);
