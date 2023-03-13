import BackDrop from "./BackDrop";

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    isOpen && (
      <>
        <BackDrop show={isOpen} setShow={setIsOpen} />
        <div className="fixed z-30 transition rounded-lg p-4 top-12 left-1/2">
          {children}
        </div>
      </>
    )
  );
};

export default Modal;
