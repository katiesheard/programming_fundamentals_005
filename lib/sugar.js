// =============== PART 1 - Advanced Objects ================

function size(object) {
  return Object.keys(object).length;
}

function min(object) {
  const values = (Object.values(object));
  let smallest;
  for (let i = 0; i < values.length; i++) {
    if (smallest === undefined || values[i] < smallest) {
      smallest = values[i]
    }
  }
  return smallest;
}

function max(object) {
  const values = (Object.values(object));
  let largest;
  for (let i = 0; i < values.length; i++) {
    if (largest === undefined || values[i] > largest) {
      largest = values[i]
    }
  }
  return largest;
}

function clone(object) {
  return Object.assign({}, object);
}
const source = { a: 1, b: 2 };
const target = clone(source);
console.log(target);

function get(object, key) { }

function has(object, key) {
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      return true;
    }
    else {
      return false;
    }
  }
}

function sum(object) {
  let sum = 0;
  for (let value in object) {
    if (object.hasOwnProperty(value)) {
      sum += parseFloat(object[value]);
    }
  }
  return sum;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) { }

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) { }

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) { }

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) { }

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
