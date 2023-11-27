import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Element = () => {
  return (
    <div className="divStyle">
      <div>Green is the prime color of the world</div>
    </div>
  );
};

ReactDOM.render(<Element />, document.getElementById('root'));
