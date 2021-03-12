import React from 'react';

const Example = (props) => {
   const add=props.add
   let greeting= add?<h1>isharf true</h1>: <h1>ishraf false</h1>
    return (
        <div>
          {greeting}
        </div>
    );
};

export default Example;