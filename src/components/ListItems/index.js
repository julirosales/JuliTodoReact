import React from "react";

function ListItems(props) {
  return (
    <React.Fragment>
      <ul>{props.children}</ul>
    </React.Fragment>
  );
}

export { ListItems };
