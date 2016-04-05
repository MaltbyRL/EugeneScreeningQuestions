"use Strict"
// Javascript Screening Questions

//one
var questionOne = "Write a currying (partial application) function that will generate the following output when invoked: console.log(currying(“curry!”)); curry!curry!curry!"
var currying = function(text, n) {
  console.log("1: ")
  console.log("input: ", text)
  var string = ""
  for (var i = 0; i < n; i++) {
    string += text
  }
  return string;
};
console.log("output: ", currying("curry!", 3))



//two
var questionTwo = "What are the differences between undefined, null, and NaN? How about apply(), bind(), and call()?"
var definitionsFunction = function() {
  console.log("2: ")
  var testThis = function(num, num2, num3) {
    return this.number + num + num2 + num3
  }
  var obj = {
    number: 5
  };
  var arr = [4, 5, 6];
  var bindThis = testThis.bind(obj)
  var test = null;
  var hotel;

  var definitions = {
    undefined: {
      definition: "Indicates that a variable has not been assigned a value",
      function: "var hotel; console.log(hotel)",
      returned: hotel,
      __: ""
    },
    null: {
      definition: "Represents something having no value. The following code (var test = null; console.log(test == undefined)) will return true. If null has any value at all, the statement would return false.",
      function: "var test = null; console.log(test == undefined)",
      returned: test == undefined,
      __: ""
    },
    NaN: {
      definition: "Stands for 'Not a Number' it is the returned value of operations with results, that cant be adequately represented,('0/0', Number(5) + 'frog')",
      function: "0/0",
      returned: 0 / 0,
      __: ""
    },
    call: {
      definition: "We can use call() to link the function to an object that is currently outside of its scope, passing in the object as the first argument and the argument's for 'num' as latter arguments:",
      function: "testThis.call(obj, 4, 5, 6) ",
      returned: testThis.call(obj, 4, 5, 6),
      __: ""
    },
    apply: {
      definition: "apply() is almost identical with the exeption that you can now pass in an array as the second argument. ",
      function: "testThis.apply(obj, arr) ",
      returned: testThis.apply(obj, arr),
      __: ""
    },
    bind: {
      definition: "bind() is different in that you can create a whole new function with the object already bound to it. ",
      function: "bindThis(4, 5, 6) ",
      returned: bindThis(4, 5, 6),
      __: ""
    }
  }

  for (keys in definitions) {
    if (typeof(definitions[keys]) === "object") {
      var object = definitions[keys]
      console.log(keys)
      for (key in object) {
        console.log(key, ": ", object[key])
      }
    } else {
      console.log(keys, ": ", definitions[keys])
      console.log("...")
    }
  }
}
definitionsFunction()


//three
var questionThree = "Describe what the following function does:";
var describeTheFunction = function() {
  console.log("3: ")
  // (function() {
  //     for (var i = 0; i < 10; i++) {
  //         setTimeout(function () {
  //             console.log(i);
  //         }, 1000)
  //     }
  // })();
  var threeObj = {
    threeA: "An immediately-invoked function expression. ",
    threeB: "The 'for' expression will loop through a given range, in this case 0 through 9, it will stop when i is no longer less that 10. ",
    threeC: "On each loop it will call the setTimeout function to console.log the value of 'i' after the given time has passed. ",
    threeD: "This results in all of the setTimeout functions being called rapidly one after the other, ",
    threeE: "The value of 'i' that is logged will be i's value at the time it is logged. in this case it will be ten"
  }

console.log(questionThree)
  for (key in threeObj) {
    console.log(threeObj[key])
  }

}
describeTheFunction()


var questionFour =  "Correct question 3 so that when it invokes, it generates the expected output.";

(function() {
  console.log("4: ")
  console.log(questionFour)
  var i = 0
  var setTheTimeout = (n) => {
    setTimeout(function() {
      console.log(n)
      i++
      if (i < 10) {
        setTheTimeout(i)
      }
    }, 1000)
  }
  setTheTimeout(i)

})();
