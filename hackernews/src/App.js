import React, { Component } from "react";
import "./App.css";

const myList = [
  {
    title: "React Awesome",
    url: "https://reactjs.org/",
    num_comments: 23,
    points: 10,
    author: "Cipto Hadi",
    objectID: 0,
  },
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 2,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {myList.map((item) => (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
