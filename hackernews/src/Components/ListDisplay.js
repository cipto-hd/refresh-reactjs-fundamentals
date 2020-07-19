import React from "react";
import { style } from "../Styles/Styles";
import Button from "./Button";

const ListDisplay = ({ list, onDismissListItem }) => {
  return list.map((item) => (
    <div style={style.card} key={item.objectID}>
      <span style={style.cardItem}>
        <a href={item.url}>{item.title}</a>
      </span>
      <span style={style.cardItem}>{item.author}</span>
      <span style={style.cardItem}>{item.num_comments}</span>
      <span style={style.cardItem}>{item.points}</span>

      <Button onClick={() => onDismissListItem(item.objectID)}>Remove</Button>
    </div>
  ));
};

export default ListDisplay;
