const { default: SelectBoxField } = require("@/common/SelectBoxField");
const { default: TextareaFieldInput } = require("@/common/TextareaFieldInput");
const Mapir = require("mapir-react-component");

const Address = ({
  options,
  selectedOption,
  setSelectedOption,
  options2,
  address,
  addressHandler,
  Map,
  markerArray,
  reverseFunction,
}) => {
  return (
    <>
      <SelectBoxField
        label="استان"
        options={options}
        customClass="w-48 "
        defaultValue={selectedOption}
        onChange={setSelectedOption}
      />
      <SelectBoxField
        label="شهر"
        options={options2}
        customClass="w-48 "
        defaultValue={selectedOption}
        onChange={setSelectedOption}
      />
      <div className="pt-4 w-48">
        <TextareaFieldInput
          label="آدرس"
          name="address"
          customClass="mt-3"
          value={address}
          onChange={addressHandler}
        />
      </div>
      <div className="w-48">
        <p className="pb-2">موقعیت مکانی آدرستان را روی نقشه مشخص کنید.</p>
        <Mapir
          Map={Map}
          className="w-100 h-200px overflow-hidden rounded-xl"
          onClick={reverseFunction}
          center={[51.42047, 35.729054]}
        >
          {markerArray}
          <Mapir.Marker coordinates={[51.42047, 35.729054]} anchor="bottom" />
        </Mapir>
      </div>
    </>
  );
};

export default Address;
