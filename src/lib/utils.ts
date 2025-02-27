import { clsx, type ClassValue } from "clsx";
import { mock } from "node:test";
import { twMerge } from "tailwind-merge";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const mockDataArray = [
  {
    eventId: "1",
    eventName: "Live Music Concert: The Soundwave Night",
    description: `
  Get ready for an unforgettable night of music and entertainment at **The Soundwave Night**! 
  Featuring chart-topping bands and renowned artists, this event is a celebration of live music, creativity, and community. 
  Join us at the iconic Madison Square Garden in New York City for an evening that promises to be the highlight of your summer.

  **Event Highlights:**
  - Performances by top rock, pop, and indie bands.
  - Delicious food and drink stalls offering a wide range of cuisines.
  - Interactive photo booths and merchandise stalls for fans.
  - Special guest appearances and surprise acts.

  Whether you're a music enthusiast or just looking for an exciting night out, this concert has something for everyone. 
  Bring your friends, soak in the energy, and make memories that will last a lifetime. 
  Book your tickets now and don't miss out on this electrifying experience!
`,
    organizer: {
      name: "EventBuzz Entertainment",
      contactEmail: "contact@eventbuzz.com",
      phone: "+1234567890",
    },
    city: "New York",
    venue: {
      name: "Madison Square Garden",
      address: "4 Pennsylvania Plaza, New York, NY 10001, USA",
    },
    date: "2024-06-15",
    time: "7:00 PM - 11:30 PM",
    reviews: [
      {
        reviewerName: "John Doe",
        comment:
          "Fantastic lineup and great vibes! The sound quality was superb.",
      },
      {
        reviewerName: "Jane Smith",
        comment: "Loved every moment! Perfect venue and well-organized event.",
      },
      {
        reviewerName: "Sam Wilson",
        comment: "Great event but parking was a bit of a hassle.",
      },
    ],
    externalLink: "https://www.eventbuzz.com/soundwave-night",
    image: "https://www.example.com/images/soundwave-concert.jpg",
  },
  {
    eventId: "2",
    eventName: "Live Music Concert: The Soundwave Night",
    description: `
  Get ready for an unforgettable night of music and entertainment at **The Soundwave Night**! 
  Featuring chart-topping bands and renowned artists, this event is a celebration of live music, creativity, and community. 
  Join us at the iconic Madison Square Garden in New York City for an evening that promises to be the highlight of your summer.

  **Event Highlights:**
  - Performances by top rock, pop, and indie bands.
  - Delicious food and drink stalls offering a wide range of cuisines.
  - Interactive photo booths and merchandise stalls for fans.
  - Special guest appearances and surprise acts.

  Whether you're a music enthusiast or just looking for an exciting night out, this concert has something for everyone. 
  Bring your friends, soak in the energy, and make memories that will last a lifetime. 
  Book your tickets now and don't miss out on this electrifying experience!
`,
    organizer: {
      name: "EventBuzz Entertainment",
      contactEmail: "contact@eventbuzz.com",
      phone: "+1234567890",
    },
    city: "New York",
    venue: {
      name: "Madison Square Garden",
      address: "4 Pennsylvania Plaza, New York, NY 10001, USA",
    },
    date: "2024-06-15",
    time: "7:00 PM - 11:30 PM",
    reviews: [
      {
        reviewerName: "John Doe",
        comment:
          "Fantastic lineup and great vibes! The sound quality was superb.",
      },
      {
        reviewerName: "Jane Smith",
        comment: "Loved every moment! Perfect venue and well-organized event.",
      },
      {
        reviewerName: "Sam Wilson",
        comment: "Great event but parking was a bit of a hassle.",
      },
    ],
    externalLink: "https://www.eventbuzz.com/soundwave-night",
    image: "https://www.example.com/images/soundwave-concert.jpg",
  },
  {
    eventId: "3",
    eventName: "Live Music Concert: The Soundwave Night",
    description: `
  Get ready for an unforgettable night of music and entertainment at **The Soundwave Night**! 
  Featuring chart-topping bands and renowned artists, this event is a celebration of live music, creativity, and community. 
  Join us at the iconic Madison Square Garden in New York City for an evening that promises to be the highlight of your summer.

  **Event Highlights:**
  - Performances by top rock, pop, and indie bands.
  - Delicious food and drink stalls offering a wide range of cuisines.
  - Interactive photo booths and merchandise stalls for fans.
  - Special guest appearances and surprise acts.

  Whether you're a music enthusiast or just looking for an exciting night out, this concert has something for everyone. 
  Bring your friends, soak in the energy, and make memories that will last a lifetime. 
  Book your tickets now and don't miss out on this electrifying experience!
`,
    organizer: {
      name: "EventBuzz Entertainment",
      contactEmail: "contact@eventbuzz.com",
      phone: "+1234567890",
    },
    city: "New York",
    venue: {
      name: "Madison Square Garden",
      address: "4 Pennsylvania Plaza, New York, NY 10001, USA",
    },
    date: "2024-06-15",
    time: "7:00 PM - 11:30 PM",
    reviews: [
      {
        reviewerName: "John Doe",
        comment:
          "Fantastic lineup and great vibes! The sound quality was superb.",
      },
      {
        reviewerName: "Jane Smith",
        comment: "Loved every moment! Perfect venue and well-organized event.",
      },
      {
        reviewerName: "Sam Wilson",
        comment: "Great event but parking was a bit of a hassle.",
      },
    ],
    externalLink: "https://www.eventbuzz.com/soundwave-night",
    image: "https://www.example.com/images/soundwave-concert.jpg",
  },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getEvents = async (city: string, page = 1) => {
  // here we will have the database call for the city specific events retrieval
  // if city == all then we will get all the events

  //here events mean the events table in the database
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 5000);
  // });
  let events;
  let totalCount;
  if (city === "all") {
    events = await prisma.event.findMany({});
    totalCount = await prisma.event.count();
    // return response;
  } else {
    events = await prisma.event.findMany({
      where: {
        city: {
          equals: city.toLowerCase(),
        },
      },
      // take: 6,
      // skip: (page - 1) * 6,
    });
    totalCount = await prisma.event.count({
      where: {
        city: city.toLowerCase(),
      },
    });

    // return response;
  }
  return {
    events,
    totalCount,
  };
};

export const getEvent = async (slug: string) => {
  //databse call for specif event with slug =
  const eventData = await prisma.event.findUnique({
    where: {
      slug: slug,
    },
  });
  return eventData;
  // if(!eventData){
  // return {"message":Not Data Found}}
  // return mockDataArray[0];
};

export const TitalizeString = (str: string) => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

// export const bookmarkEvent = (eventId: number) => {
//   let arrayOfBookmarks = localStorage.getItem("bookmarks");
//   if (!arrayOfBookmarks) {
//     localStorage.setItem("bookmarks", [eventId].toString());
//   } else {
//     let newArray = JSON.parse(arrayOfBookmarks);
//     newArray.push(eventId);
//     localStorage.setItem("bookmarks", newArray.toString());
//   }
//   return { message: "success" };
// };

export const bookmarkEvent = (eventId: number) => {
  let arrayOfBookmarks = localStorage.getItem("bookmarks");
  if (!arrayOfBookmarks) {
    // If no bookmarks exist, create a new array and store it as a stringified JSON
    localStorage.setItem("bookmarks", JSON.stringify([eventId]));
  } else {
    try {
      // Parse the bookmarks string into an array
      let newArray = JSON.parse(arrayOfBookmarks);
      if (Array.isArray(newArray)) {
        // Ensure it's an array before pushing
        newArray.push(eventId);
        localStorage.setItem("bookmarks", JSON.stringify(newArray));
      } else {
        // If the parsed value isn't an array, reset and store the new event
        localStorage.setItem("bookmarks", JSON.stringify([eventId]));
      }
    } catch (error) {
      // Handle potential JSON parsing errors
      console.error("Error parsing bookmarks:", error);
      localStorage.setItem("bookmarks", JSON.stringify([eventId]));
    }
  }
  return { message: "success" };
};

export const getBookmarkEvents = async () => {
  let arrayOfBookmarks = localStorage.getItem("bookmarks");
  if (!arrayOfBookmarks) {
    return [];
  } else {
    let ids = JSON.parse(arrayOfBookmarks);
    const bookmarkedEvents = await prisma.event.findMany({
      where: {
        eventId: {
          in: ids,
        },
      },
    });
    return bookmarkedEvents;
  }
};

export const getReview = async (eventId: number) => {
  const res = await prisma.reviews.findMany({
    where: {
      eventId: eventId,
    },
  });
  return res;
};

export const getUserInfo = async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: +userId,
    },
  });
  return user;
};
