import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-fit flex  justify-center items-center">
      <div className="w-1/4 bg-white p-7 flex flex-col justify-center mt-12 gap-3 text-black rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
