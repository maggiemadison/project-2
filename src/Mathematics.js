import React from "react";

export const Mathematics = (props) => {
    console.log(props);
    return (
        <>
      <h1>Let's do some math !</h1>
      <h2>The sum of {props.numberOne} and {props.numberTwo} = {+props.numberOne + +props.numberTwo}</h2>

      <h2>The sum of {props.numberThree} and {props.numberFour} = {+props.numberThree + +props.numberFour}</h2>

      <h2>The sum of {props.numberFive} and {props.numberSix} = {+props.numberFive + +props.numberSix}</h2>

      <h2>The difference of {props.numberOne} and {props.numberTwo} = {props.numberOne - props.numberTwo}</h2>

      <h2>The difference of {props.numberThree} and {props.numberFour} = {props.numberThree - props.numberFour}</h2>

      <h2>The difference of {props.numberFive} and {props.numberSix} = {props.numberFive - props.numberSix}</h2>

      <h2>The product of {props.numberOne} and {props.numberTwo} = {props.numberOne * props.numberTwo}</h2>

      <h2>The product of {props.numberThree} and {props.numberFour} = {props.numberThree * props.numberFour}</h2>

      <h2>The product of {props.numberFive} and {props.numberSix} = {props.numberFive * props.numberSix}</h2>

      <h2>The quotient of {props.numberOne} and {props.numberTwo} = {props.numberOne / props.numberTwo}</h2>

      <h2>The quotient of {props.numberThree} and {props.numberFour} = {props.numberThree / props.numberFour}</h2>

      <h2>The quotient of {props.numberFive} and {props.numberSix} = {props.numberFive / props.numberSix}</h2>
    </>

    );
};
