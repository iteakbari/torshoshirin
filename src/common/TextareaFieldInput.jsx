const TextareaFieldInput = ({
  label,
  name,
  id,
  value,
  onChange,
  customClass,
}) => {
  return (
    <div className={`input-box ${customClass}`}>
      <textarea
        name={name}
        id={id}
        className="bg-transparent textarea"
        value={value}
        onChange={onChange}
        placeholder=" "
      ></textarea>
      <label>{label}</label>
    </div>
  );
};

export default TextareaFieldInput;
