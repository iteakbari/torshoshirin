import Select from "react-select";

const StateSelectBox = ({
  statesList,
  onChange,
  value,
  error,
  errorMessage,
}) => {
  const states = statesList?.map((state) => ({
    value: state.title,
    label: state.title,
  }));
  const stateDefaultValue = (states, value) => {
    return states ? states.find((state) => state.value === value) : "";
  };
  return (
    <div className={`select-box w-48`}>
      <Select
        value={stateDefaultValue(states, value)}
        options={states}
        onChange={(value) => onChange(value)}
        placeholder=""
        className="h-14 w-full select"
      />
      <label className={value ? "top" : ""}>استان</label>
      {error && (
        <p className="text-xs text-red-500  mt-1">{errorMessage.state}</p>
      )}
    </div>
  );
};

export default StateSelectBox;