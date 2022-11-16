import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineClear } from "react-icons/md";
function Search() {
  return (
    <React.Fragment>
      <form id="buscador">
        <input
          type="text"
          className="buscador-barra"
          placeholder="Buscador"
          /*  name="buscador" */
          required
          minLength="1"
        />
        <BiSearchAlt2 />
        <MdOutlineClear />
      </form>
    </React.Fragment>
  );
}

export { Search };
