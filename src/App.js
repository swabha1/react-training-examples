import React from "react";
import prs from "./Person";
import { Person1, Person2, Person3 } from "./Person";
import * as persons from "./Person";

import "./App.css";

export const App = () => {
  //Variables
  const variableDeclarationKeyword = () => {
    var oldStyle = "Actually ES5 style";
    let newStyle = "Actually ES6 style";
    const newConstKeyword = "This is how we declare constant in JS";
    console.log(oldStyle, newStyle, newConstKeyword);
    // newConstKeyword = 'Not valid bro!!'
  };

  //ES6 Arrow Functions
  //ES5 functions

  function oldFunctionStyle(param) {
    console.log(param);
  }

  const oldFunctionStyle1 = function(param) {
    console.log(param);
  };

  //ES6 functions

  const callMe = name => {
    console.log(name);
  };

  const callMeAnother = () => {
    console.log("Swapnil!");
  };

  const returnMeSame = name => name;

  const returnMeSameAgain = name => {
    return name;
  };

  //Exports & Imports

  const createInstance = () => {
    let p = new prs();

    let p1 = new Person1();
    let p2 = new Person2();
    let p3 = Person3;

    // let p1 = new persons.Person1();
    // let p2 = new persons.Person2();
    //let p3 = persons.Person3;
    console.log(p, p1, p2, p3);
  };

  //Spread & Rest Operator

  const spreadOperatorArray = () => {
    const oldArray = [1, 2, 3];
    const newArray = [...oldArray, 4, 5];
    console.log(newArray);
  };

  const spreadOperatorObject = () => {
    const oldObject = {
      name: "Swapnil"
    };
    const newObject = {
      ...oldObject,
      age: 29
    };
    console.log(newObject);
  };

  const restOperator = (...param) => {
    console.log(param);
  };
  //restOperator(1, 2, 3, 4);

  //Destructuring
  const destructuringArray = () => {
    const array = [1, 2, 3];
    const [a, b] = array;
    console.log(a); // prints 1
    console.log(b); // prints 2
    console.log(array); // prints [1, 2, 3]
  };

  const destructuringObject = () => {
    const myObj = {
      name: "Swapnil",
      age: 29
    };
    const { name } = myObj;
    console.log(name);
    // console.log(age);
  };

  const printName = personObj => {
    console.log(personObj.name);
  };
  //printName({ name: "Swapnil", age: 29 });

  const printNameDestructuring = ({ name }) => {
    console.log(name);
  };
  //printNameDestructuring({ name: "Swapnil", age: 29 });

  return (
    <div className="container text-center">
      <span className="h1">Hello All :)</span>
    </div>
  );
};
