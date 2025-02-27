"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchForm = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/events/${search}`);
  };
  return (
    <form
      className="w-full sm:w-[400px] md:[800px] px-4 mb-6"
      onSubmit={handleSubmit}
    >
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Cityname"
        className="w-full rounded-2xl bg-white/10 h-14 px-5 py-2 outline-none hover:scale-110 focus:scale-110 transition translate duration-300 "
      ></input>
    </form>
  );
};

export default SearchForm;
