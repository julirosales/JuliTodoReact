import React from "react";

function ListItems(props) {
  return (
    <React.Fragment>
      {props.loading && <div className="cargando"></div>}
      <ul>{props.children}</ul>
    </React.Fragment>
  );
}

export { ListItems };
