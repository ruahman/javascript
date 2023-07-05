console.log(true);
var shouldBeTrue = true;
console.log(shouldBeTrue === true);

var isItTrue = 'am I true?';

// is truthy
if (isItTrue) {
  console.log('yes');
}

// you assign a null, undefined is default of varabiable not assigned
console.log(null == undefined);
console.log(null === undefined);
