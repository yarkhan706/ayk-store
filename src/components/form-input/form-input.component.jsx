import "../form-input/form-input.styles.scss";

const FormInput = ({ label, ...inputInformation }) => {
  return (
    <div className="group">
        <input className="form-input"{...inputInformation} />
      {label && (
        <label
          className={`${
            inputInformation.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
