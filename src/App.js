import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Kossie");
  const onSubmit = () => {
    alert("submitted");
  };

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      onSubmit();
    }
  };

  // let text = 'Kossie';

  const updateText = () => {
    // text = 'Coder';
    setText("Coder");
    console.log(text);
  };

  console.log(text);

  return <div className="App"></div>;
}

export default App;
