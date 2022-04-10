import React from "react";
import "./App.css";
import Button from "./Components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          title="Manas"
          type="primary"
          danger
          disabled
          onClick={() => {
            console.log("clicked");
          }}
          shape="circle"
        />
      </header>
    </div>
  );
}

export default App;
