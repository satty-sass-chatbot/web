import { useState } from "react";

export const Button = () => {
  const [state, setState] = useState(0);

  return (
    <button
      className="
      bg-blue-500 
      hover:bg-blue-700 
      text-white 
      font-bold 
      py-2 
      px-4 
      rounded
    "
      onClick={() => setState(state + 1)}
    >
      Click me: {state}
    </button>
  );
};

export default Button;
