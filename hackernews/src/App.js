import React, { Component } from "react";
import "./App.css";
import { myList } from "./API/DataSource";
import { style } from "./Styles/Styles";
import ListDisplay from "./Components/ListDisplay";
import SearchBox from "./Components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: myList,
      searchTerm: "",
    };

    // class method is bound to this
    this.onSearchTermChange = this.onSearchTermChange.bind(this);
    this.onDismissListItem = this.onDismissListItem.bind(this);
  }

  getFilterRules(searchTerm) {
    return (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase());
  }

  onSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });

    /* let updatedList = [];

    if (event.target.value !== "") {
      updatedList = myList.filter((item) =>
        item.title.toLowerCase().includes(event.target.value.toLowerCase())
      );
    } else {
      updatedList = myList; //resfresh data
    }

    this.setState({ list: updatedList }); */
  }

  onDismissListItem(id) {
    const updatedList = this.state.list.filter((item) => item.objectID !== id);

    this.setState({
      list: updatedList,
    });
  }

  render() {
    const { list, searchTerm } = this.state;
    const FilteredList = list.filter(this.getFilterRules(searchTerm));

    return (
      <div className="App">
        <header className="App-header" style={style.header}>
          <SearchBox
            searchTerm={searchTerm}
            onSearchTermChange={this.onSearchTermChange}
          />
          <ListDisplay
            list={FilteredList}
            onDismissListItem={this.onDismissListItem}
          />
        </header>
      </div>
    );
  }
}

export default App;
