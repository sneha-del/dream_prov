import React, { useState } from "react";

const Homepage = () => {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);
  const add = (event) => {
    setInputList(event.target.value);
  };
  const listofItems = () => {
    setItem((olditem) => {
      return [...olditem, inputList];
    });
    setInputList("");
  };
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <input
            type="text"
            placeholder="Search"
            value={inputList}
            onChange={add}
          />
          <button onClick={listofItems}>+</button>
          <ul>
            {/* <li>{inputList}</li> */}
            {item.map((itemval) => {
              return <li>{itemval}</li>;
            })}

            {/* <li>hi</li>
            <li>hi</li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homepage;
