// import the react and react dom libraris
import React from 'react';
import ReactDOM from 'react-dom';

// create a react components
const App = () => {
  const buttonText = { text: 'Click me!'};
  const style = { backgroundColor: 'blue', color: 'white' };

  return <div>
    <label className="label" htmlFor="name">Enter name:</label>
    <input id="name" type="text" />
    <button style={style}>{ buttonText.text }</button>
  </div>

}

// take react component and show on the screen
ReactDOM.render(
  <App />, document.querySelector('#root')
);
