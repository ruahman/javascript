// think of an object as a collectio of name value pairs

// eslint-disable-next-line no-unused-vars
var car = {
  make: 'VW',
  range: 360,
  model: 'Golf',
};

var donut = {
  type: 'coconut',
  glazed: true,
  sayHi: function () {
    console.log('hi: ', this.type);
  },
};

donut.sayHi();

// constructor pattern for creating objects

function Donut(type, glazed) {
  this.type = type;
  this.glazed = glazed;
  this.sayHi = function () {
    console.log('hi: ', this.type);
  };
}

var d = new Donut('chocolate', true);
console.log(d);
