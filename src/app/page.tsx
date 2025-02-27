"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import SearchForm from "@/components/SearchForm";
import Feature from "@/components/Feature";
import { getLoggedUser } from "@/lib/sessions";
import { useLoggedInUser } from "@/lib/userStore";

export default function Home() {
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getLoggedUser();
      console.log(session);
    };

    fetchSession();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center  px-6 lg:px-8 lg:text-balance  ">
      <h1 className="text-4xl md:text-6xl tracking-tight font-bold drop-shadow-glow text-pretty mt-28 ">
        <span className="text-nowr ">Discover Events That </span>
        Spark Your Passion
      </h1>
      <h2 className="text-xl lg:text-3xl font-light mt-5 mb-10 text-white/60 ">
        <span className="text-nowrap">From concerts to competitions ,</span>{" "}
        explore <span className="italic font-semibold text-sky-400">1000+</span>{" "}
        events near you and never miss out on the action
      </h2>
      <SearchForm></SearchForm>

      <span className="flex text-white/50">
        Popular :
        <ul className="flex gap-x-3 mx-3 font-semibold">
          <li>
            <Link
              href="events/Delhi"
              className="hover:underline hover:text-sky-600"
            >
              Delhi
            </Link>
          </li>
          <li>
            <Link
              href="events/Mumbai"
              className="hover:underline hover:text-sky-600"
            >
              Mumbai
            </Link>
          </li>
        </ul>
      </span>
      <Feature></Feature>
    </div>
  );
}
