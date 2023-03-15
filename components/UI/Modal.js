import BackDrop from "./BackDrop";

const Modal = ({ isOpen, setIsOpen, children }) => {
  return (
    isOpen && (
      <>
        <BackDrop show={isOpen} setShow={setIsOpen} />
        <div className="fixed z-30 top-5 left-5 right-5 sm:top-7 sm:left-7 sm:right-7 md:top-10 md:left-[calc(50%-375px)] max-w-[750px]">
          {children}
        </div>
      </>
    )
  );
};

export default Modal;
