import React from 'react';

const HelloWorld = () => {
  const Hello = '¡Hello World!';
  const isTrue = true;
  return (
    <div className="HelloWorld">
      <h1>{ Hello }</h1>
      <h2>Essential React Course</h2>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt="React Logo" />
      { isTrue ? <h4>This is true</h4> : <h5>I'm false</h5> }
      { isTrue && <h4>I's true</h4> }
    </div>
  );
};

export default HelloWorld;
