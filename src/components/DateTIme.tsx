import React from "react";
type DateTimeProps = {
  date: string;
};

const DateTIme = ({ date }: DateTimeProps) => {
  return (
    <div className="md:w-fit w-full px-4  bg-sky-700/30 border-sky-400/60 rounded-lg border-2 min-h-11 h-fit text-nowrap text-sky-400 font-semibold text-xl flex justify-center items-center">
      {date}
    </div>
  );
};

export default DateTIme;
