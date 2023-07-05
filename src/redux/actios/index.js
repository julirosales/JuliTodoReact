const TILDE_VERDE = "TILDE_VERDE";
const TILDE_GRIS = "TILDE_GRIS";
const TOTAL_TILDES_OK= "TOTAL_TILDES_OK";

const incrementarTareaRealizada = (number) => {
  return {
    type: TILDE_VERDE,
    payload: number,
  };
};

const decrementarTareaRealizada = (number) => {
  return {
    type: TILDE_GRIS,
    payload: number,
  };
}

const totalTareasReaizadas = (number) => {
  return{
    type: TOTAL_TILDES_OK,
    payload: number,
  }
}

export { incrementarTareaRealizada ,decrementarTareaRealizada,totalTareasReaizadas};
