import React from 'react';

export default function Newbutton({ title, varient , onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className={`p-2 sm:p-3 ${
          varient === '1'
            ? 'bg-pastel-violet-bg text-royale-yellow active:text-royale-yellow active:bg-pastel-violet-ubg'
            : 'bg-royale-yellow text-pastel-violet-ubg active:text-royale-yellow active:bg-pastel-violet-bg'
        } rounded-xl font-bold text-lg sm:text-2xl shadow-md`}
      >
        <p className={`pointer-events-none ${varient === '1' ? 'w-28 sm:w-32' :''}`}>{title}</p>
      </button>
    </>
  );
}
