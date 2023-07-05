import { BtnModal } from "./styled.js";

function ButtonModal({ text, onClick, disabled, type }) {
  return (
    <>
      <BtnModal
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </BtnModal>
    </>
  );
}

export { ButtonModal };
