import { EventType } from "@/lib/types";
import Image from "next/image";
import React from "react";
import concert from "../../public/concert.jpg";
import football from "../../public/football.jpg";
import ArrowButton from "./ArrowButton";
import { TitalizeString } from "@/lib/utils";

type EventCardProps = {
  event: EventType;
};
const EventCard = ({ event }: EventCardProps) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dateArray = event.date.split("-");
  const year = dateArray[0];
  const month = months[Number(dateArray[1]) - 1];
  const date = dateArray[2];

  return (
    <div
      key={event.eventId}
      className="realtive  hover:scale-[1.03] active:scale-[1.01] transition  ease-in-out transform duration-[400ms] h-[380px] min-w-[310px] max-w-[400px] rounded-lg bg-gray-800/50 border border-sky-500/30 flex flex-col items-center px-6 py-6 justify-start "
    >
      <div className="z-3 absolute h-14 w-14 top-[33px] right-[35px] bg-black/80 rounded-2xl flex flex-col place-items-center  font-medium italic  text-sky-500">
        <p className="text-2xl ">{date}</p>
        <p className=" -mt-1">{month}</p>
      </div>
      <Image
        src={football}
        className=" mb-4 w-[350px] rounded-xl object-cover  h-[225px]  top-[20px] left-[25px]  overflow-y-hidden "
        alt="img"
      ></Image>
      <section>
        <div className="flex flex-col justify-center gap-3">
          <span className="font-bold text-white text-2xl  overflow-ellipsis">
            {event.eventName}
          </span>
          <span className="text-base text-white/50">
            Organizer - {event.organizerName}
          </span>
          <span className="text-sm text-white/50 flex justify-between mt-3 items-center">
            {TitalizeString(event.city)}
            <ArrowButton path={`/event/${event.slug}`}></ArrowButton>
          </span>
        </div>
      </section>
    </div>
  );
};

export default EventCard;
