const TextFieldInput = ({ label, name, id, value, onChange }) => {
  return (
    <div className="input-box mt-14">
      <input
        type="text"
        className="h-14"
        value={value}
        onChange={onChange}
        name={name}
        id={id}
      />
      <label>{label}</label>
    </div>
  );
};

export default TextFieldInput;
