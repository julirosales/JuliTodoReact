import React from "react";
import { BiListPlus } from "react-icons/bi";
import "./CreateButton.css";

function CreateButton(props) {
  const onClickButtonAdd = () => {
    props.setOpenModalForm((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <div className="ContainerButtonCreate">
        <BiListPlus className="buttonCreate" onClick={onClickButtonAdd} />
      </div>
    </React.Fragment>
  );
}

export { CreateButton };
