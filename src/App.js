import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [color, setColor] = useState("");
  const [wrongColor, setWrongColor] = useState("");
  const [answer, setAnswer] = useState("");

  // Color options array
  const colorValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];

  // Color picker
  const actualColor = () => {
    return colorValues
      .sort(() => 0.5 - Math.random())
      .slice(0, 6)
      .toString()
      .replaceAll(",", "")
      .replaceAll('"', "");
  };

  useEffect(() => {
    setColor(actualColor);
    setWrongColor(actualColor);
    // console.log(color, wrongColor);
  }, []);

  // handle click function for buttons
  const handleInput = (e) => {
    const buttonValue = e.target.name;
    setAnswer(buttonValue);
    console.log(buttonValue);
  };

  function refreshPage() {
    // setTimeout(window.location.reload(false), 10000);
    setTimeout(window.location.reload.bind(window.location), 1200);
  }

  // Once a button is clicked and state is updated, this is run
  const buttonLogic = () => {
    if (answer === "") {
      return <p>Pick a color</p>;
    } else if (answer === color) {
      refreshPage();
      return <p style={{ color: "green" }}>Correct!</p>;
    } else {
      return <p style={{ color: "red" }}>Incorect...</p>;
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div
          className="colorBox"
          style={{ backgroundColor: `#${color}` }}
        ></div>
        <div className="buttonContainer">
          <button onClick={handleInput} name={color}>
            #{color}
          </button>
          <button onClick={handleInput} name={wrongColor}>
            #{wrongColor}
          </button>
        </div>
        <div className="pickerAnswer">{buttonLogic()}</div>
      </div>
    </div>
  );
}
