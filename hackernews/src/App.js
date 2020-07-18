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

    // class method is bound to this
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
  }

  onSearchTermChange(event) {
    let updatedList = [];

    if (event.target.value !== "") {
      updatedList = myList.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
    } else {
      updatedList = myList; //resfresh data
    }

    this.setState({ list: updatedList });
  }

  onDismiss(id) {
    const updatedList = this.state.list.filter((item) => item.objectID !== id);

    this.setState({
      list: updatedList,
    });

    this.onSearchTermChange = this.onSearchTermChange.bind(this);
  }

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <header className="App-header" style={style.header}>
          <form>
            Search based on the title:
            {/* event handler function
              if using arrow function, no need for binding this in the constructor, 
              otherwise it needs binding

              this.function_name => only executed if event is triggered
              this.function_name() => executed immediately on render
            */}
            <input type="text" onChange={this.onSearchTermChange} />
          </form>
          {list.map((item) => (
            <div style={style.card} key={item.objectID}>
              <span style={style.cardItem}>
                <a href={item.url}>{item.title}</a>
              </span>
              <span style={style.cardItem}>{item.author}</span>
              <span style={style.cardItem}>{item.num_comments}</span>
              <span style={style.cardItem}>{item.points}</span>

              {/* event handler using arrow function, no need binding this */}
              <button onClick={() => this.onDismiss(item.objectID)}>
                Remove
              </button>
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
