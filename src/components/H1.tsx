import React from "react";

type H1Props = {
  children: React.ReactNode;
};

const H1 = ({ children }: H1Props) => {
  return (
    <>
      <h1 className="text-4xl lg:text-6xl tracking-tight font-bold mb-10">
        {children}
      </h1>
    </>
  );
};

export default H1;
