// import { getBookmarks } from "@/actions/submitActions";
// import { getLoggedUser } from "@/lib/sessions";
// import Link from "next/link";
// import React from "react";

// const page = async () => {
//   const loggeedUser = await getLoggedUser();
//   console.log(
//     "current bookmakrs has user logged in with user id ",
//     loggeedUser!.userId
//   );
//   const bookmarks = await getBookmarks(loggeedUser!.userId);

//   return (
//     <>
//       <h1 className="text-4xl text-white  font-semibold mx-24 my-7">
//         Your Saved Events
//       </h1>
//       <h2 className="text-xl text-white  font-normal mx-24 my-3">
//         Easily access and revisit all the events you've bookmarked. Stay
//         organized and never miss out on the experiences you love!
//       </h2>
//       <div className="grid grid-col-1  md:grid-cols-2 xl:grid-cols-3 gap-4 mx-24">
//         {bookmarks?.length > 0 ? (
//           bookmarks.map((bookmark, index) => {
//             return (
//               <Link href={`/event/${bookmark.slug}`} key={index}>
//                 <div className="p-4 border-blue-600/30 border-2 bg-blue-500/5 hover:bg-blue-500/15 rounded-lg  text-white flex flex-col ">
//                   <p className="text-2xl">{bookmark.eventName}</p>
//                   <p className="text-lg mt-3">
//                     {bookmark.description.split(".")[0]}
//                   </p>
//                 </div>
//               </Link>
//             );
//           })
//         ) : (
//           <div className="text-3xl ">No data to show</div>
//         )}
//       </div>
//     </>
//   );
// };

// export default page;
import { getBookmarks } from "@/actions/submitActions";
import { getLoggedUser } from "@/lib/sessions";
import Link from "next/link";
import React from "react";

const page = async () => {
  const loggeedUser = await getLoggedUser();
  console.log(
    "current bookmakrs has user logged in with user id ",
    loggeedUser!.userId
  );
  const bookmarks = await getBookmarks(loggeedUser!.userId);

  return (
    <div className="mx-8 md:mx-24 my-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl text-white font-bold mb-4">
          Your Saved Events
        </h1>
        <h2 className="text-xl text-gray-300/60 font-normal max-w-2xl mx-auto">
          Easily access and revisit all the events you've bookmarked. Stay
          organized and never miss out on the experiences you love!
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {bookmarks?.length > 0 ? (
          bookmarks.map((bookmark, index) => (
            <Link href={`/event/${bookmark.slug}`} key={index}>
              <div className="p-5 border-blue-600/30 border-2 bg-blue-500/10 hover:bg-blue-500/20 rounded-xl text-white transition-shadow hover:shadow-lg flex flex-col">
                <p className="text-2xl font-semibold mb-2">
                  {bookmark.eventName}
                </p>
                <p className="text-lg text-gray-300">
                  {bookmark.description.split(".")[0]}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-3xl text-center  text-gray-400">
            No data to show
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
