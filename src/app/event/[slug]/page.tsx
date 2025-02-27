// import Image from "next/image";
// import React from "react";
// import concert from "../../../../public/concert.jpg";
// import DateTIme from "@/components/DateTIme";
// import SocialShare from "@/components/SocialShare";
// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import { getEvent, getReview } from "@/lib/utils";
// import ReviewForm from "@/components/ReviewForm";

// import Bookmark from "@/components/Bookmark";
// import { isBookmarked } from "@/actions/submitActions";
// // import { mock } from "node:test";

// type EventPageProps = {
//   params: {
//     slug: string;
//   };
// };

// const EventPage = async ({ params }: EventPageProps) => {
//   const slg = await params;
//   const slug = decodeURIComponent(slg.slug);
//   // find the event from database and get all the details and display

//   const mockData = await getEvent(slug);
//   if (!mockData) {
//     return (
//       <div className="flex justify-center items-center w-full mt-28">
//         No data available
//       </div>
//     );
//   }
//   const reviews = await getReview(mockData!.eventId);
//   const isBooked = await isBookmarked(mockData!.eventId, 2);
//   return (
//     <>
//       <div className="py-6 px-10 grid grid-col-1 lg:grid-col-5">
//         <div className=" h-[400px] md:h-[500px] lg:h-[600px] w-full lg:w-[700px] rounded-3xl col-span-1 lg:col-span-2  flex justify-center items-center bg-white/5 backdrop-blur-2xl">
//           <Image
//             src={concert}
//             className=" h-5/6 w-4/5 object-cover rounded-xl"
//             alt="img"
//           ></Image>
//         </div>
//         {/* <div className="m-2 col-span-1 w-full lg:col-start-5 flex justify-end items-center">
//         <DateTIme></DateTIme>
//       </div> */}
//         <main className="m-2 col-span-1 lg:col-span-3 lg:col-start-3 flex flex-col gap-y-3 ml-10 ">
//           <div className=" w-full md:mt-0 mb-3  min-w-fit flex justify-end">
//             <DateTIme date={mockData!.date}></DateTIme>
//           </div>
//           <h1 className=" font-bold text-4xl ">{mockData!.eventName}</h1>
//           <span className="bg-lime-100 text-lime-800 text-lg w-fit font-medium me-2 px-2.5 py-0.5 rounded-lg dark:bg-lime-900 dark:text-lime-300">
//             Free
//           </span>
//           <h2 className="text-xl font-light text-white/60 ">
//             {mockData!.description}
//           </h2>

//           <h3 className="text-lg text-white/90 my-7 flex">
//             Venue : {mockData!.address}
//           </h3>

//           <section className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between  lg:items-center">
//             <div>
//               <a
//                 href={mockData!.link}
//                 target="_blank"
//                 className=" lg:ml-7 w-fit h-fit bg-lime-800/70 text-lime-400 font-medium border text-xl border-lime-400/70 p-3 rounded-xl"
//               >
//                 Get Your Spot
//               </a>
//             </div>
//             <ul className="mt-3 text-white/40 flex flex-col  items-center md:items-end text-lg">
//               <li>Organizer : {mockData!.organizerName}</li>
//               <li>Mobile Number : {mockData!.contactNo}</li>
//               <li>Email : {mockData!.email}</li>
//             </ul>
//           </section>

//           <div className="flex  justify-center md:justify-end text-white/30 text-2xl mt-5">
//             <p className="mr-3">Share</p> <SocialShare></SocialShare>
//           </div>
//         </main>
//       </div>

//       {/* uncomment this when reading data from reviews table in database make a
//       db call with the event id */}
//       {reviews.length > 0 ? (
//         <section className="w-full p-5 flex justify-center">
//           <InfiniteMovingCards
//             items={reviews}
//             direction="right"
//             speed="fast"
//           ></InfiniteMovingCards>
//         </section>
//       ) : (
//         <div className="text-white">No comments yet</div>
//       )}
//       <section className="w-full  flex justify-end">
//         <ReviewForm eventId={mockData!.eventId}></ReviewForm>
//       </section>
//       <Bookmark eventId={mockData!.eventId} isBooked={isBooked}></Bookmark>
//     </>
//   );
// };

// export default EventPage;

//__________________________________

import Image from "next/image";
import React from "react";
import concert from "../../../../public/concert.jpg";
import DateTIme from "@/components/DateTIme";
import SocialShare from "@/components/SocialShare";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { getEvent, getReview } from "@/lib/utils";
import ReviewForm from "@/components/ReviewForm";
import Bookmark from "@/components/Bookmark";
import { getLoggedUserAction, isBookmarked } from "@/actions/submitActions";

type EventPageProps = {
  params: {
    slug: string;
  };
};

const EventPage = async ({ params }: EventPageProps) => {
  const slg = await params;
  const slug = decodeURIComponent(slg.slug);
  const mockData = await getEvent(slug);
  if (!mockData) {
    return (
      <div className="flex justify-center items-center w-full mt-28 text-xl text-gray-300">
        No data available
      </div>
    );
  }
  const userlogged = await getLoggedUserAction();
  const reviews = await getReview(mockData!.eventId);
  const isBooked = await isBookmarked(mockData!.eventId, userlogged!.userId);

  return (
    <div className="py-10 px-6 lg:px-12 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-2 flex justify-center">
          <div className="h-[400px] md:h-[500px] lg:h-[600px] w-full max-w-lg rounded-3xl shadow-lg overflow-hidden">
            <Image
              src={concert}
              className="object-cover w-full h-full"
              alt="Event Image"
            />
          </div>
        </div>

        <main className="col-span-3 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">{mockData!.eventName}</h1>
            <DateTIme date={mockData!.date} />
          </div>

          <span className="bg-lime-100 text-lime-800 text-lg w-fit font-medium px-3 py-1 rounded-lg">
            Free
          </span>

          <p className="text-lg text-white/70 leading-relaxed">
            {mockData!.description}
          </p>

          <h3 className="text-lg text-white/90 font-medium">
            <strong>Venue:</strong> {mockData!.address}
          </h3>

          <div className="flex flex-wrap gap-4">
            <a
              href={mockData!.link}
              target="_blank"
              className="relative p-3 text-lg font-medium border border-lime-400/70 text-lime-300 rounded-lg transition-all duration-300
  bg-white/10 backdrop-blur-md hover:bg-lime-500 hover:text-black hover:scale-105 shadow-md"
              // className="bg-lime-800/80 text-lime-300 border border-lime-400/70 px-4 py-2 rounded-lg text-xl font-medium hover:bg-lime-700 transition-all"
            >
              Get Your Spot
            </a>
            <Bookmark eventId={mockData!.eventId} isBooked={isBooked} />
          </div>

          <div className="mt-4 bg-gray-800/50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white/80">
              Organizer Details
            </h4>
            <ul className="text-white/60 text-sm mt-2 space-y-1">
              <li>
                <strong>Name:</strong> {mockData!.organizerName}
              </li>
              <li>
                <strong>Phone:</strong> {mockData!.contactNo}
              </li>
              <li>
                <strong>Email:</strong> {mockData!.email}
              </li>
            </ul>
          </div>

          <div className="flex justify-center items-center gap-4 text-white/50 text-lg mt-6 ">
            <p>Share:</p>
            <SocialShare />
          </div>
        </main>
      </div>

      {reviews.length > 0 ? (
        <section className="w-full mt-10 p-5 flex justify-center">
          <InfiniteMovingCards items={reviews} direction="right" speed="fast" />
        </section>
      ) : (
        <p className="text-center text-white/50 mt-8">No comments yet</p>
      )}

      <section className="w-full flex justify-center mt-10">
        <ReviewForm eventId={mockData!.eventId} />
      </section>
    </div>
  );
};

export default EventPage;
