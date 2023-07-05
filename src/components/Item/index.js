import React, { useRef, useState } from "react";
import { BsCheck2All } from "react-icons/bs";
import { AiOutlineEdit /* , AiOutlineLoading */ } from "react-icons/ai";
import { CiTrash } from "react-icons/ci";
import { connect } from "react-redux";
import {
  incrementarTareaRealizada,
  decrementarTareaRealizada,
} from "../../redux/actios/index.js";
import {
  ContainerTarea,
  CargandoCheck,
  TituloLista,
  DescriptionLista,
  ButtonGeneral,
  ContainerBtns,
  CointenerListAlter,
  Tarea,
} from "./styled.js";

function Items({
  todo,
  setTodoAEditar,
  setTodoAEliminar,
  setOpenModalEliminar,
  cargarTodoManual,
  url,
  incrementarTareaRealizada,
  decrementarTareaRealizada,
}) {
  const [cargandoTilde, setCargandoTilde] = useState(false);
  const onClickDelete = () => {
    setOpenModalEliminar((prevState) => !prevState);
  };
  const tildeCapturado = useRef();

  const onClickTareaFinalizada = (todo) => {
    const newItem = {
      ...todo,
      estado: !todo.estado,
    };
    if (todo.estado) {
      incrementarTareaRealizada(1);
    } else {
      decrementarTareaRealizada(1);
    }
    fetch(`${url}/${todo.number}`, {
      method: "PUT",
      body: JSON.stringify(newItem),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(setCargandoTilde(true))
      .then((response) => response.json())
      .then((data) => {
        setCargandoTilde(false);
        cargarTodoManual(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <React.Fragment>
      <ContainerTarea>
        <Tarea
          ref={tildeCapturado}
          id={todo.id}
          onClick={() => {
            onClickTareaFinalizada(todo);
          }}
          estado={todo.estado}
        >
          {cargandoTilde ? <CargandoCheck></CargandoCheck> : <BsCheck2All />}
        </Tarea>
        <CointenerListAlter estado={todo.estado}>
          <TituloLista>{todo.titulo}</TituloLista>
          <DescriptionLista> {todo.descripcion}</DescriptionLista>
        </CointenerListAlter>
        <ContainerBtns>
          <ButtonGeneral onClick={() => setTodoAEditar(todo)}>
            <AiOutlineEdit />
          </ButtonGeneral>
          <ButtonGeneral
            onClick={() => {
              setTodoAEliminar(todo);
              onClickDelete();
            }}
          >
            <CiTrash />
          </ButtonGeneral>
        </ContainerBtns>
      </ContainerTarea>
    </React.Fragment>
  );
}

const mapsDispatchToProps = {
  incrementarTareaRealizada,
  decrementarTareaRealizada,
};
export default connect(null, mapsDispatchToProps)(Items);
