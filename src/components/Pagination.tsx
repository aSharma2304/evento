import Link from "next/link";
import React from "react";
// import RippleButton from "./ui/ripple-button";
import { Button, ButtonGroup } from "@nextui-org/button";

const buttonStyles = "";

type PaginationProps = {
  prevPath: string;
  nextPath: string;
};
const Pagination = ({ prevPath, nextPath }: PaginationProps) => {
  return (
    <div className="w-full flex justify-between  my-9 ">
      {prevPath ? (
        <Link href={prevPath}>
          <Button
            color="default"
            className="hover:bg-gray-800/70 text-blue-500 rounded-lg"
            variant="light"
          >
            Previous
          </Button>
        </Link>
      ) : (
        <div></div>
      )}
      {nextPath ? (
        <Link href={nextPath}>
          <Button
            color="default"
            className="hover:bg-gray-800/70 text-blue-500 rounded-lg"
            variant="light"
          >
            Next
          </Button>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Pagination;
