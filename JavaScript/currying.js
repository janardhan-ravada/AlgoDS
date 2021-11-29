/*function sum(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

const sum1 = sum(1);
const sum2 = sum1(2);
const result = sum2(3);
console.log(result); // 6

console.log(sum(3,4,5));*/

/*
function curry(fn) {
    var args = [].slice.call(arguments, 1);

    function curried(fnArgs) {
        if (fnArgs.length >= fn.length) {
            return fn.apply(null, fnArgs);
        }

        return function () {
            return curried(fnArgs.concat([].slice.apply(arguments)));
        };
    }

    return curried(args);
}

function sumc(a,b,c) {
    return a + b + c
}

let add = curry(sumc,10);
console.log(add(20,90)); // 120
console.log(add(70,60)); // 140

console.log(add(10)(20)(30));
*/

/*
function add(a,b,c,d){
   return a+b+c+d;
}

function currying(fn){
    let arity = fn.length;
    console.log("arity:" + arity);
    console.log("arguemenst inside currying"+ arguments);
    function curried(){
        console.log("arguemenst inside curried"+arguments);
        var memory = Array.prototype.slice.call(arguments);

        return function(){
            var local = memory.slice();
            console.log("local"+local);
            Array.prototype.push.apply( local, arguments );

            var next = local.length >= arity ? fn : curried;

            return next.apply(null, local);
        }

        console.log("Memory" + memory);

    }

    return curried();
}
let curried = currying(add);

curried(1);
/*console.log(curried(1)(2)(3)(4));*/

/*console.log(curried(1,2,3,5));*/

function currying(fn) {
  let arity = fn.length;

  let curried = function () {
    let memory = [...arguments];
    return function () {
      let local = [...memory, ...arguments];
      if (local.length >= arity) {
        return fn.apply(null, local);
      } else {
        return curried.apply(null, local);
      }
    };
  };

  return curried();
}

/*ES-6 */
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function multiply(a, b, c, d) {
  return a * b * c * d;
}

let curreid = curry(multiply);

console.log(curreid(1)(2)(3)(4));

console.log(curreid(1)(2, 3, 4));
