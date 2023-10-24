import Select from "react-select";

const SelectBoxField = ({
  label,
  name,
  id,
  value,
  onChange,
  customClass,
  options,
  defaultValue,
}) => {
  return (
    <div className={`select-box ${customClass}`}>
      <Select
        options={options}
        onChange={onChange}
        placeholder=""
        className="h-14 w-full select"
        defaultValue={defaultValue}
      />
      <label className={defaultValue ? "top" : ""}>{label}</label>
    </div>
  );
};

export default SelectBoxField;
