"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { getEvents } from "@/lib/utils";
import Pagination from "./Pagination";
import next from "next";

import { MdNotInterested } from "react-icons/md";
import { EventType } from "@/lib/types";
import { Categories } from "./Categories";
import { Input } from "./ui/input";

type EventListProps = {
  cityname: string;
  page: number;
  events: EventType[];
  totalCount: number;
};

const EventsList = ({ cityname, page, events, totalCount }: EventListProps) => {
  page = page - 1;
  const [eventsToShow, setEventsToShow] = useState<EventType[]>([]);
  const [eventsCount, setEventsCount] = useState(0);
  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (filter === "" && search == "") {
      const newEvents = events.slice(
        page * 6,
        Math.min(page * 6 + 6, totalCount)
      );
      setEventsToShow(newEvents);
      setEventsCount(totalCount);
    } else {
      const filteredEvents = events
        .filter((event) => event.category.includes(filter))
        .filter((even) =>
          even.eventName.toLowerCase().includes(search.toLowerCase())
        );
      setEventsToShow(
        filteredEvents.slice(page * 6, Math.min(page * 6 + 6, totalCount))
      );
      setEventsCount(filteredEvents.length);
      console.log(eventsToShow);
      console.log(filter);
    }
  }, [filter, search]);

  const prevPath = page > 0 ? `/events/${cityname}?page=${page}` : "";
  const nextPath =
    eventsCount > 6 * (page + 1) ? `/events/${cityname}?page=${page + 2}` : "";
  return (
    <div className="w-full min-h-screen px-44 flex flex-col items-center">
      <section className="  flex gap-5 justify-end w-full px-7  mb-6">
        {/* <Input
          value={search || ""}
          className="border placeholder-white border-white/50 w-[250px] my-4 bg-gray-800/70"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="search by name "
        ></Input> */}
        <Input
          value={search || ""}
          className="border  border-white/35 w-[250px] my-4 bg-gray-800/70 text-white placeholder-white ::placeholder:text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name"
        />

        <Categories setFilter={setFilter}></Categories>
        <button
          className="hover:text-sky-600 transition transform ease-in-out  my-4"
          onClick={() => {
            setSearch("");
            setFilter("");
          }}
        >
          reset
        </button>
      </section>
      <div className="  my-3 flex flex-col items-center gap-7 lg:grid lg:grid-cols-2 lg:gap-9 xl:grid-cols-3 ">
        {eventsToShow.length > 0 ? (
          eventsToShow.map((event) => {
            return <EventCard key={event.eventId} event={event}></EventCard>;
          })
        ) : (
          <div className="w-full col-span-full text-4xl font-bold gap-y-4 text-white/25 flex text-pretty  flex-col items-center ">
            <MdNotInterested size={70}></MdNotInterested>
            No data Available
          </div>
        )}
      </div>
      <Pagination prevPath={prevPath} nextPath={nextPath}></Pagination>
      {/* <button onClick={() => setFilter((prev) => (prev === "" ? "music" : ""))}>
        fitler me
      </button> */}
    </div>
  );
};

export default EventsList;
