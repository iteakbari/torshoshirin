import Select from "react-select";

const CitiesSelectBox = ({
  citiesList,
  onChange,
  value,
  error,
  errorMessage,
  customClass,
  forced,
}) => {
  const cities = citiesList
    ? citiesList.map((city) => ({
        value: city.title,
        label: city.title,
      }))
    : [];

  const cityDefaultValue = (cities, value) => {
    return cities ? cities.find((city) => city.value === value) : "";
  };

  return (
    <div className={`select-box w-48 ${customClass}`}>
      <Select
        value={cityDefaultValue(cities, value)}
        options={cities}
        onChange={(value) => onChange(value)}
        placeholder=""
        className="h-14 w-full select"
      />
      <label className={value ? "top" : ""}>
        شهر {forced && <span className="text-orange">*</span>}
      </label>
      {error && (
        <p className="text-xs text-red-500  mt-1">{errorMessage.city}</p>
      )}
    </div>
  );
};

export default CitiesSelectBox;
