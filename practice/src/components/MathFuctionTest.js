import React from 'react';
import { Button } from 'antd';


// 函数组件
function MathFunctionTest (props) {

  const { number, handleAdd } = props;

  const handleAddTo = () => {
    if(handleAdd){
      handleAdd()
    }
  }

  const  numberLess = 0
  const handleMinux = () => {
    let numberLess = 0;
   
    console.log(numberLess, 'numberles====');
  }

  return(
    <div>
      <span>{number}</span>
      <Button onClick={handleAddTo}>+</Button>
      <Button onClick={handleMinux}>-</Button>
      <span>{numberLess}</span>
    </div>
  )
}

export default MathFunctionTest;