import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container = async ({ children }: ContainerProps) => {
  return <div className="w-full min-h-screen flex flex-col">{children}</div>;
};

export default Container;
