import H1 from "@/components/H1";
import React, { Suspense } from "react";
import { EventType } from "@/lib/types";
import EventsList from "@/components/EventsList";
import { getEvents, TitalizeString } from "@/lib/utils";
import { Categories } from "../../../components/Categories";
import Loading from "./loading";
type EventPageProps = {
  params: {
    city: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};
// const mockEventData = [
//   {
//     eventId: "1",
//     eventName: "Live Music Concert: The Soundwave Night",
//     description: `
//   Get ready for an unforgettable night of music and entertainment at **The Soundwave Night**!
//   Featuring chart-topping bands and renowned artists, this event is a celebration of live music, creativity, and community.
//   Join us at the iconic Madison Square Garden in New York City for an evening that promises to be the highlight of your summer.

//   **Event Highlights:**
//   - Performances by top rock, pop, and indie bands.
//   - Delicious food and drink stalls offering a wide range of cuisines.
//   - Interactive photo booths and merchandise stalls for fans.
//   - Special guest appearances and surprise acts.

//   Whether you're a music enthusiast or just looking for an exciting night out, this concert has something for everyone.
//   Bring your friends, soak in the energy, and make memories that will last a lifetime.
//   Book your tickets now and don't miss out on this electrifying experience!
// `,
//     organizer: {
//       name: "EventBuzz Entertainment",
//       contactEmail: "contact@eventbuzz.com",
//       phone: "+1234567890",
//     },
//     city: "New York",
//     venue: {
//       name: "Madison Square Garden",
//       address: "4 Pennsylvania Plaza, New York, NY 10001, USA",
//     },
//     date: "2024-06-15",
//     time: "7:00 PM - 11:30 PM",
//     reviews: [
//       {
//         reviewerName: "John Doe",
//         comment:
//           "Fantastic lineup and great vibes! The sound quality was superb.",
//       },
//       {
//         reviewerName: "Jane Smith",
//         comment: "Loved every moment! Perfect venue and well-organized event.",
//       },
//       {
//         reviewerName: "Sam Wilson",
//         comment: "Great event but parking was a bit of a hassle.",
//       },
//     ],
//     externalLink: "https://www.eventbuzz.com/soundwave-night",
//     image: "https://www.example.com/images/soundwave-concert.jpg",
//   },
//   {
//     eventId: "2",
//     eventName: "Live Music Concert: The Soundwave Night",
//     description: `
//   Get ready for an unforgettable night of music and entertainment at **The Soundwave Night**!
//   Featuring chart-topping bands and renowned artists, this event is a celebration of live music, creativity, and community.
//   Join us at the iconic Madison Square Garden in New York City for an evening that promises to be the highlight of your summer.

//   **Event Highlights:**
//   - Performances by top rock, pop, and indie bands.
//   - Delicious food and drink stalls offering a wide range of cuisines.
//   - Interactive photo booths and merchandise stalls for fans.
//   - Special guest appearances and surprise acts.

//   Whether you're a music enthusiast or just looking for an exciting night out, this concert has something for everyone.
//   Bring your friends, soak in the energy, and make memories that will last a lifetime.
//   Book your tickets now and don't miss out on this electrifying experience!
// `,
//     organizer: {
//       name: "EventBuzz Entertainment",
//       contactEmail: "contact@eventbuzz.com",
//       phone: "+1234567890",
//     },
//     city: "New York",
//     venue: {
//       name: "Madison Square Garden",
//       address: "4 Pennsylvania Plaza, New York, NY 10001, USA",
//     },
//     date: "2024-06-15",
//     time: "7:00 PM - 11:30 PM",
//     reviews: [
//       {
//         reviewerName: "John Doe",
//         comment:
//           "Fantastic lineup and great vibes! The sound quality was superb.",
//       },
//       {
//         reviewerName: "Jane Smith",
//         comment: "Loved every moment! Perfect venue and well-organized event.",
//       },
//       {
//         reviewerName: "Sam Wilson",
//         comment: "Great event but parking was a bit of a hassle.",
//       },
//     ],
//     externalLink: "https://www.eventbuzz.com/soundwave-night",
//     image: "https://www.example.com/images/soundwave-concert.jpg",
//   },
//   {
//     eventId: "3",
//     eventName: "Live Music Concert: The Soundwave Night",
//     description: `
//   Get ready for an unforgettable night of music and entertainment at **The Soundwave Night**!
//   Featuring chart-topping bands and renowned artists, this event is a celebration of live music, creativity, and community.
//   Join us at the iconic Madison Square Garden in New York City for an evening that promises to be the highlight of your summer.

//   **Event Highlights:**
//   - Performances by top rock, pop, and indie bands.
//   - Delicious food and drink stalls offering a wide range of cuisines.
//   - Interactive photo booths and merchandise stalls for fans.
//   - Special guest appearances and surprise acts.

//   Whether you're a music enthusiast or just looking for an exciting night out, this concert has something for everyone.
//   Bring your friends, soak in the energy, and make memories that will last a lifetime.
//   Book your tickets now and don't miss out on this electrifying experience!
// `,
//     organizer: {
//       name: "EventBuzz Entertainment",
//       contactEmail: "contact@eventbuzz.com",
//       phone: "+1234567890",
//     },
//     city: "New York",
//     venue: {
//       name: "Madison Square Garden",
//       address: "4 Pennsylvania Plaza, New York, NY 10001, USA",
//     },
//     date: "2024-06-15",
//     time: "7:00 PM - 11:30 PM",
//     reviews: [
//       {
//         reviewerName: "John Doe",
//         comment:
//           "Fantastic lineup and great vibes! The sound quality was superb.",
//       },
//       {
//         reviewerName: "Jane Smith",
//         comment: "Loved every moment! Perfect venue and well-organized event.",
//       },
//       {
//         reviewerName: "Sam Wilson",
//         comment: "Great event but parking was a bit of a hassle.",
//       },
//     ],
//     externalLink: "https://www.eventbuzz.com/soundwave-night",
//     image: "https://www.example.com/images/soundwave-concert.jpg",
//   },
// ];

const CityEventsPage = async ({ params, searchParams }: EventPageProps) => {
  let city = await params;
  let sp = await searchParams;
  const page = sp.page ?? 1;

  const cityname = decodeURIComponent(city.city);

  // get data for events specific to city
  const { events, totalCount } = await getEvents(cityname, +page);

  return (
    <div className="mt-8 flex flex-col items-center pt-1 px-4">
      <H1>
        {cityname === "all"
          ? "All Events"
          : `Events in ${TitalizeString(cityname)}`}
      </H1>

      <Suspense fallback={<Loading></Loading>}>
        <EventsList
          events={events}
          cityname={cityname}
          page={+page}
          totalCount={totalCount}
        ></EventsList>
      </Suspense>
    </div>
  );
};

export default CityEventsPage;
