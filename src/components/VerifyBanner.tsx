"use client";

import { generateEmailVerificationToken, verifyToken } from "@/lib/sessions";
import React from "react";

const VerifyBanner = ({ email }: { email: string }) => {
  return (
    <div>
      <button
        onClick={async () => {
          const gentoken = await generateEmailVerificationToken(email);
          const { status } = await verifyToken(gentoken);
          if (status === "success") {
            console.log("email verified check db");
          } else {
            console.log("error occured " + status);
          }
        }}
      >
        verify email
      </button>
    </div>
  );
};

export default VerifyBanner;
