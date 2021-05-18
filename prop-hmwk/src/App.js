// import logo from './logo.svg';
// import './App.css';

import React from "react";
import "./styles.css";
import Card from "./components/Card";
import cardsArr from "./data";
// import Card2 from "./components/Card2";
console.log("this is CardsArr ", cardsArr);

export default function App() {
  const cards = cardsArr.map((ele, index) => {
    return (
      <Card
        {...ele}
        // img={ele.img}
        // title = {ele.title}
        // text = {ele.text}
        // url={ele.url}
        key={index}
      />
    );
  });
  console.log("this is cards: ", cards);
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
        <Card2 /> */}
      </section>
    </div>
  );
}
