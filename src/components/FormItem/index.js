import React from "react";

function FormItem() {

  return (
    <React.Fragment>
      <form className="popUpCreate">
        <div className="container-caja-todo">
          <div className="container-close">
            <p className="titulo-caja">Nueva Tarea</p>
          </div>
          <input placeholder="Titulo" className="titulo" />
          <textarea
            className="descripcion"
            placeholder="Descripcion"
            required
          ></textarea>
          <button className="button-add" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}

export { FormItem };
