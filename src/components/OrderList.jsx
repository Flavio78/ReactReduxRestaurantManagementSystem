import React from "react";

const OrderList = props => {
  var style = {
    textAlign: "left",
    marginLeft: 20
  };

  if (props.selectedTable === null) return null;
  
  // fixed key in div
  return (
    <div style={style}>
      {props.items.map((items, i) => {
        return (
          <div key={i}>
            <button onClick={() => props.onDelete(props.id, i)}>x</button>
            &nbsp; {items.name} | ${items.price}
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
