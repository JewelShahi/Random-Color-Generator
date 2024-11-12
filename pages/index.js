import React, { useState, useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';


export default function Home() {
  
  // state variable for the color, sets the button color to the color state variable
  const [defaultColor, setDefaultColor] = useState('');

  // state for the random color
  const [randomColor, setRandomColor] = useState('');

  // object variable to set the color of the <div>
  const gradientColor = {
    background: `linear-gradient( ${Math.floor(
      Math.random() * (51 - 40) + 40
    )}deg, ${randomColor}, ${defaultColor} ${Math.floor(
      Math.random() * (76 - 45) + 45
    )}%)`,
  };

  // array of defualt colors and its used to name the buttons and to set the value of defaultColor
  const arrCol = [
    'DarkCyan',
    'DodgerBlue',
    'Tomato',
    'Aqua',
    'Crimson',
    'ForestGreen',
    'RoyalBlue',
    'MediumOrchid',
    'OliveDrab',
    'DarkOrange',
  ];

  // generating new color by every click
  let randomColorValue = () => {
    let color = 'rgb(';
    for (let i = 0; i < 3; i++) {
      if (i == 2) color += Math.floor(Math.random() * 255).toString() + ')';
      else color += Math.floor(Math.random() * 255).toString() + ', ';
    }
    return color;
  };

  useEffect(() => {
    const initialRandomColor = randomColorValue();
    const initialDefaultColor = randomColorValue();
    setRandomColor(initialRandomColor);
    setDefaultColor(initialDefaultColor);
  }, []);

  const handleColorValue = (col) => {
    // if clicked some of the buttons the values fo the colors will be set to these
    setDefaultColor((prevColor) => col);
    setRandomColor((prevColor) => randomColorValue());
  };

  // change the bg color of the body to black when the toggle button is clicked
  const [darkMode, setDarkMode] = useState(false);

  // when the toggle button is changed the variable darkMode changes
  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // when darkMode is true the body background is black
  const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => (props.darkMode ? 'white' : 'black')};
    height: 100%;
    color: ${props => (props.darkMode ? 'black' : 'white')};
    transition: background-color 0.5s ease-in-out;
  }
`;

  return (
    <>
      <h1>Click a button to generate a colour gradient</h1>
      <div className="toggle">
        <GlobalStyle darkMode={darkMode} />
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleToggleDarkMode}
            defaultChecked
            className="toggle-button"
          />
          <span className="slider round"></span>
        </label>
      </div>
      <div className="container">
        {arrCol.map((col, i) => {
          return (
            <a
              key={i}
              className="button-style"
              onClick={() => handleColorValue(col)}
            >
              {col}
            </a>
          );
        })}
      </div>
      <div className="color-container" style={gradientColor}>
          <div className="glass-effect">
            <div className="text">
              The colours are
              <br />
              {randomColor} and {defaultColor}
            </div>
          </div>
        </div>
    </>
  );
}
