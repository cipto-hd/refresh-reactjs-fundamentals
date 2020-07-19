import React from "react";

const SearchBox = ({ searchTerm, onSearchTermChange, children }) => {
  return (
    <form>
      {children}
      Search based on the title:
      {/* event handler function
              if using arrow function, no need for binding this in the constructor, 
              otherwise it needs binding

              this.function_name => only executed if event is triggered
              this.function_name() => executed immediately on render
            */}
      <input type="text" onChange={onSearchTermChange} value={searchTerm} />
    </form>
  );
};

export default SearchBox;
