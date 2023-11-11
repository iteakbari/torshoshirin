const FormikTextInputField = ({
  label,
  name,
  id,
  customClass,
  readOnly,
  type,
  formik,
}) => {
  return (
    <div className={`input-box ${customClass}`}>
      <input
        type={type ? type : "text"}
        className="h-14 bg-transparent text-right px-3"
        value={formik.values[name]}
        onChange={formik.handleChange}
        name={name}
        id={id}
        placeholder=" "
        readOnly={readOnly}
        onBlur={formik.hsndleBlur}
      />
      <label>{label}</label>
      {formik.errors[name] && formik.touched[name] && (
        <p className="text-xs text-red-500  mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default FormikTextInputField;
