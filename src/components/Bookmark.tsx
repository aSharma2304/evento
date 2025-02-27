"use client";
import React, { useState } from "react";
import { MdOutlineBookmarkAdded, MdOutlineBookmarkAdd } from "react-icons/md";
import { handleBookmark } from "@/actions/submitActions";
import { useUser } from "@/app/(context)/UserContext";
import { toast } from "sonner";

const ACTIVE_STYLE =
  "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2.5 px-5 border border-blue-700 rounded-lg shadow-md transition-all w-fit";
const DISABLED_STYLE =
  "bg-blue-500/70 text-white font-bold py-2.5 px-5 rounded-lg shadow-sm opacity-90 w-fit";

type BookmarkProps = {
  eventId: number;
  isBooked: boolean;
};

const Bookmark = ({ eventId, isBooked }: BookmarkProps) => {
  const [booked, setBooked] = useState(isBooked);
  const { user } = useUser();

  const handleClick = () => {
    handleBookmark(user?.userId, eventId, booked);
    if (booked === true) {
      toast("Removed from bookmarks");
    } else {
      toast("Added to bookmarks");
    }
    setBooked((prev) => !prev);
  };

  return (
    <button
      className={booked ? DISABLED_STYLE : ACTIVE_STYLE}
      onClick={handleClick}
    >
      <span className="flex gap-2 justify-center items-center text-">
        {booked ? (
          <MdOutlineBookmarkAdded className="size-6" />
        ) : (
          <MdOutlineBookmarkAdd className="size-6" />
        )}
        {booked ? "Bookmarked" : "Bookmark it"}
      </span>
    </button>
  );
};

export default Bookmark;
