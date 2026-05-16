import { useState } from "react";

export const BoxCard = ({ result, children }) => {
  const [show, setShow] = useState(true);

  return (
    show && (
      <div className={`box ${result}`}>
        {children}
        <button className="trigger" onClick={() => setShow(false)}>
          Close
        </button>
      </div>
    )
  );
};
