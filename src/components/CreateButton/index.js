import React from "react";
import { BiListPlus } from "react-icons/bi";
import { ButtonConteiner, ButtonCreate } from "./styled";

function CreateButton(props) {
  const onClickButtonAdd = () => {
    props.setOpenModalForm((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <ButtonConteiner>
        <ButtonCreate onClick={onClickButtonAdd}>
          <BiListPlus />
        </ButtonCreate>
      </ButtonConteiner>
    </React.Fragment>
  );
}

export { CreateButton };
