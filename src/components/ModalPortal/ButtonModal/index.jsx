import "./index.css";

function ButtonModal({ text, className, onClick, disabled, type }) {
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </>
  );
}

export { ButtonModal };
