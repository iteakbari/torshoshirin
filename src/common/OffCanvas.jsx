import "./../styles/OffCanvas.css";
const OffCanvas = ({
  children,
  origin,
  height,
  show,
  setIsOpen,
  isOpen,
  customeClass,
  staticBackdrop,
}) => {
  return (
    <>
      {staticBackdrop ? (
        <div className={`offcanvas ${show}`}></div>
      ) : (
        <div
          className={`offcanvas ${show}`}
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}

      <div
        className={`offCanvas-content ${customeClass} px-5 ${
          origin === "right"
            ? "offcanvas-right"
            : origin === "bottom"
            ? "offcanvas-bottom"
            : origin === "left"
            ? "offcanvas-left"
            : origin === "center"
            ? "offcanvas-center"
            : ""
        } ${height} ${show}`}
      >
        {children}
      </div>
    </>
  );
};

export default OffCanvas;
