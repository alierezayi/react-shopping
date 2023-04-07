const BackDrop = ({ show, setShow }) => {
  return (
    show && (
      <div
        className="w-screen h-screen z-20 fixed top-0 left-0 bg-slate-400/40 backdrop-blur-md"
        onClick={() => setShow(false)}
      />
    )
  );
};

export default BackDrop;
