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
          onClick={() => {
            console.log("clicked");
          }}
          shape="circle"
          href="https://tailwindcss.com"
        />
      </header>
    </div>
  );
}

export default App;
