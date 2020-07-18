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
  constructor(props) {
    super(props);
    this.state = {
      list: myList,
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <header className="App-header" style={style.header}>
          {list.map((item) => (
            <div style={style.card} key={item.objectID}>
              <span style={style.cardItem}>
                <a href={item.url}>{item.title}</a>
              </span>
              <span style={style.cardItem}>{item.author}</span>
              <span style={style.cardItem}>{item.num_comments}</span>
              <span style={style.cardItem}>{item.points}</span>
            </div>
          ))}
        </header>
      </div>
    );
  }
}

// style rules
const style = {
  header: {
    paddingTop: 50,
    paddingLeft: 100,
    alignItems: "start",
    justifyContent: "start",
  },
  card: {
    marginTop: 20,
    textAlign: "left",
  },
  cardItem: {
    display: "block",
  },
};

export default App;
