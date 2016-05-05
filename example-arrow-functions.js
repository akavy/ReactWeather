var names = ["Jonathan", "Anne-Kathrin", "Andrew", "Janne"];


// forEach gets called once for every element, takes one argument, which is the response from the array
names.forEach(function (name) {
  console.log('forEach', name);
});

names.forEach((name) => {
  console.log('arrowedFunc', name);
});

names.forEach((name) => console.log('shortened',name));

var returnMe = (name) => name + '!';
console.log(returnMe('Jonathan'));

var Person = {
  name: 'Jonathan',
  greet: function () {
    names.forEach(function (name) {
      console.log(this.name + ' says Hi to ' + name);
    });
  }
};

Person.greet();

var OtherPerson = {
  name: 'Jonathan',
  greet: function () {
    names.forEach((name) => {
      console.log(this.name + ' says Hi to ' + name);
    });
  }
};

OtherPerson.greet();

// Challenge

function add (a,b) {
  return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

// addStatement
var addStatement = (a,b) => {
  return a+b;
};

console.log(addStatement(4,7));

// addExpression
var addExpression = (a,b) => a+b;

console.log(addExpression(1,322));
