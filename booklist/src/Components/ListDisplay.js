import React from "react";
import { style } from "../Styles/Styles";
import Button from "./Button";

const ListDisplay = ({ list, onDismissListItem }) => {
  const largeColumn = {
    width: "40%",
  };

  const midColumn = {
    width: "30%",
  };

  const smallColumn = {
    width: "10%",
  };
  return list.map((item) => (
    <div style={style.card} key={item.objectID} className="table">
      <div className="table-row">
        <span style={{ ...style.cardItem, ...largeColumn }}>
          <a href={item.url}>{item.title}</a>
        </span>
        <span style={{ ...style.cardItem, ...midColumn }}>{item.author}</span>
        <span style={{ ...style.cardItem, ...smallColumn }}>
          {item.num_comments}
        </span>
        <span style={{ ...style.cardItem, ...smallColumn }}>{item.points}</span>
        <span style={{ ...style.cardItem, ...smallColumn }}>
          <Button
            onClick={() => onDismissListItem(item.objectID)}
            className="button-inline"
          >
            Remove
          </Button>
        </span>
      </div>
    </div>
  ));
};

export default ListDisplay;
