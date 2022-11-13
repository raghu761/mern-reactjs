import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

  const inputEvent = (event) => {
    console.log(event.target.value);

    setName(event.target.value);
  };

  const onbuttonclick = (event) => {
    event.preventDefault();
    setFullName(name);
  };

  return (
    <>
    <h1> form ends </h1>
      <form onSubmit={onbuttonclick}>
        <div>
          <h1>hello {fullName}</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={inputEvent}
            on
          />
          <button > Click me </button>
        </div>
      </form>
      <h1> form ends </h1>
    </>
  );
};

export default App;
