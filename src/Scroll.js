import React from 'react';

const Scroll = props => {
  return (
    <div
      style={{
        // overflowY: Can scroll for only children component. It's like a box
        // height: height of scroll component area
        overflowY: 'scroll',
        border: '5px solid black',
        height: '500px'
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
