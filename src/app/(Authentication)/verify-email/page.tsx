import React from "react";

type VerifyProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: VerifyProps) => {
  let sp = await searchParams;
  const token = sp.token;

  if (!token) {
    return <div>No token received</div>;
  }

  // got the token now call a function tocheck if its valid and not expired update the database entry with the corresponding email to isEmailVerified=true
  // if got true display the corresponding message to be successfull and please go back to home page ;
  // else if something wrong show either expired token or not a valid token
  // while processing show yellow mesage to be processing your request;

  return <div>{token}</div>;
};

export default page;
