"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const eventCategories = [
  "Music & Entertainment",
  "Sports & Fitness",
  "Education & Workshops",
  "Technology & Business",
  "Arts & Culture",
  "Food & Lifestyle",
  "Community & Causes",
];

type FilterProps = {
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const Categories = ({ setFilter }: FilterProps) => {
  return (
    <Select
      onValueChange={(value) => {
        setFilter(value);
      }}
    >
      <SelectTrigger className="border border-white/35 w-[250px] my-4 bg-gray-800/70">
        <SelectValue placeholder="Select Category" />
      </SelectTrigger>
      <SelectContent className="bg-gray-900 border border-white/35  text-gray-100/70 ">
        <SelectGroup>
          <SelectLabel className="text-white/90">Categories</SelectLabel>
          {eventCategories.map((category, i) => {
            return (
              <SelectItem key={i} value={category} className="font-normal">
                {category}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
