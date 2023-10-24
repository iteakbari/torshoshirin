const TextFieldInput = ({ label, name, id, value, onChange, customClass }) => {
  return (
    <div className={`input-box ${customClass}`}>
      <input
        type="text"
        className="h-14 bg-transparent"
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        placeholder=" "
      />
      <label>{label}</label>
    </div>
  );
};

export default TextFieldInput;
