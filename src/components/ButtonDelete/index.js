function ButtonDeleteItem({onclick, type = "primary", text = "" }) {
  //danger = rojo, tiene letra blanca y borde negro
  //primary = Fondo verde letra blanca
  //disabled = fondo gris letra gris oscuro y puntero desabilitado

/*   const tiposEstilos = {
    danger: "danger",
    primary: "primary",
    disabled: "disabled"
  } */

 

  return (
    <>
      <button onClick={onclick} className={type}>{text}</button>
    </>
  );
}

export { ButtonDeleteItem };
