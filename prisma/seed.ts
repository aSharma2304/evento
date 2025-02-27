import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// const data = [
//   {
//     eventId: 1,
//     eventName: "Live Music Concert: The Soundwave Night",
//     slug: "live-music-concert",
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

//     organizerName: "EventBuzz Entertainment",
//     email: "contact@eventbuzz.com",
//     contactNo: "+1234567890",

//     city: "New York",

//     address:
//       "Madison Square Park, 4 Pennsylvania Plaza, New York, NY 10001, USA",

//     date: "2024-06-15",
//     time: "7:00 PM - 11:30 PM",

//     link: "https://www.eventbuzz.com/soundwave-night",
//   },
// ];

const data = [
  {
    eventId: 2,
    eventName: "Delhi Food Fest 2024",
    slug: "delhi-food-fest",
    description:
      "Experience the diverse flavors of India at the annual Delhi Food Fest. Enjoy live cooking demos, street food, and culinary workshops.",
    organizerName: "Foodies United",
    email: "info@foodiesunited.com",
    contactNo: "+919876543210",
    city: "Delhi",
    address: "Pragati Maidan, New Delhi, India",
    date: "2024-02-10",
    time: "11:00 AM - 8:00 PM",
    link: "https://www.delhifoodfest.com",
    category: "Food & Lifestyle",
  },
  {
    eventId: 3,
    eventName: "Art and Culture Expo",
    slug: "art-and-culture-expo",
    description:
      "Discover the rich heritage of India at the Art and Culture Expo in Delhi. Featuring art exhibitions, live performances, and craft workshops.",
    organizerName: "Cultural Connect",
    email: "connect@cultureexpo.com",
    contactNo: "+919812345678",
    city: "Delhi",
    address: "India Habitat Centre, New Delhi, India",
    date: "2024-03-15",
    time: "10:00 AM - 7:00 PM",
    link: "https://www.culturalconnect.com",
    category: "Arts & Culture",
  },
  {
    eventId: 4,
    eventName: "Delhi Startup Meetup",
    slug: "delhi-startup-meetup",
    description:
      "An opportunity for budding entrepreneurs to network and pitch their ideas to investors and mentors.",
    organizerName: "Delhi Innovators",
    email: "info@delhiinnovators.com",
    contactNo: "+919845678910",
    city: "Delhi",
    address: "CyberHub, Gurgaon, Delhi NCR, India",
    date: "2024-05-20",
    time: "2:00 PM - 6:00 PM",
    link: "https://www.delhistartupmeetup.com",
    category: "Technology & Business",
  },
  {
    eventId: 5,
    eventName: "Yoga in the Park",
    slug: "yoga-in-the-park",
    description:
      "Join us for a refreshing yoga session in the serene environment of Lodhi Gardens.",
    organizerName: "Healthify India",
    email: "contact@healthifyindia.com",
    contactNo: "+919876543322",
    city: "Delhi",
    address: "Lodhi Gardens, New Delhi, India",
    date: "2024-06-21",
    time: "7:00 AM - 9:00 AM",
    link: "https://www.yogainthepark.com",
    category: "Sports & Fitness",
  },
  {
    eventId: 6,
    eventName: "Delhi Literature Fest",
    slug: "delhi-literature-fest",
    description:
      "Celebrate the world of books and literature with authors, poets, and speakers from around the globe.",
    organizerName: "Book Lovers Delhi",
    email: "litfest@booklovers.com",
    contactNo: "+919987654321",
    city: "Delhi",
    address: "Siri Fort Auditorium, New Delhi, India",
    date: "2024-07-12",
    time: "10:00 AM - 5:00 PM",
    link: "https://www.delhilitfest.com",
    category: "Arts & Culture",
  },
  {
    eventId: 7,
    eventName: "Women Empowerment Workshop",
    slug: "women-empowerment-workshop",
    description:
      "A motivational workshop focusing on skill development and empowerment for women.",
    organizerName: "Empower India",
    email: "workshop@empowerindia.com",
    contactNo: "+919898765432",
    city: "Delhi",
    address: "India International Centre, New Delhi, India",
    date: "2024-09-05",
    time: "9:00 AM - 4:00 PM",
    link: "https://www.empowerindiaworkshop.com",
    category: "Community & Causes",
  },
  {
    eventId: 8,
    eventName: "AI Revolution Conference",
    slug: "ai-revolution-conference",
    description:
      "Dive into the future of AI with industry leaders and hands-on workshops.",
    organizerName: "FutureTech Delhi",
    email: "ai@futuretechdelhi.com",
    contactNo: "+919889998877",
    city: "Delhi",
    address: "Le Meridien, New Delhi, India",
    date: "2024-08-25",
    time: "9:00 AM - 6:00 PM",
    link: "https://www.aiconference.com",
    category: "Technology & Business",
  },
  {
    eventId: 9,
    eventName: "Delhi Green Marathon",
    slug: "delhi-green-marathon",
    description:
      "Run for a cause and support sustainability at the Delhi Green Marathon.",
    organizerName: "Eco Runners",
    email: "contact@ecorunners.com",
    contactNo: "+919877665544",
    city: "Delhi",
    address: "Jawaharlal Nehru Stadium, New Delhi, India",
    date: "2024-10-15",
    time: "6:00 AM - 11:00 AM",
    link: "https://www.delhigreenmarathon.com",
    category: "Sports & Fitness",
  },
  // Mumbai Events
  {
    eventId: 10,
    eventName: "TechCon Mumbai 2024",
    slug: "techcon-mumbai",
    description:
      "Join India's largest technology conference with industry leaders, keynote sessions, and networking opportunities.",
    organizerName: "Innovate India",
    email: "events@innovateindia.com",
    contactNo: "+912233445566",
    city: "Mumbai",
    address: "NESCO Ground, Goregaon, Mumbai, India",
    date: "2024-04-25",
    time: "9:00 AM - 6:00 PM",
    link: "https://www.techconmumbai.com",
    category: "Technology & Business",
  },
  {
    eventId: 11,
    eventName: "Mumbai Film Festival 2024",
    slug: "mumbai-film-festival",
    description:
      "Celebrate the art of filmmaking with screenings of indie, regional, and international movies at the Mumbai Film Festival.",
    organizerName: "Cinephiles Mumbai",
    email: "info@cinephilesmumbai.com",
    contactNo: "+912244556677",
    city: "Mumbai",
    address: "PVR Cinemas, Juhu, Mumbai, India",
    date: "2024-03-10",
    time: "10:00 AM - 10:00 PM",
    link: "https://www.mumbaifilmfest.com",
    category: "Arts & Culture",
  },
  {
    eventId: 12,
    eventName: "Marine Drive Yoga Fest",
    slug: "marine-drive-yoga-fest",
    description:
      "Start your day with peace and positivity at the scenic Marine Drive Yoga Fest. Perfect for fitness enthusiasts.",
    organizerName: "Wellness Mumbai",
    email: "contact@wellnessmumbai.com",
    contactNo: "+912298765432",
    city: "Mumbai",
    address: "Marine Drive, Mumbai, India",
    date: "2024-05-01",
    time: "6:30 AM - 9:30 AM",
    link: "https://www.mumbaifitnessfest.com",
    category: "Sports & Fitness",
  },
  {
    eventId: 13,
    eventName: "Street Food Carnival",
    slug: "street-food-carnival",
    description:
      "Indulge in the finest street food from across India at the Street Food Carnival in Mumbai.",
    organizerName: "Food Fiesta",
    email: "info@foodfiesta.com",
    contactNo: "+912233445566",
    city: "Mumbai",
    address: "Carter Road Promenade, Mumbai, India",
    date: "2024-04-15",
    time: "4:00 PM - 10:00 PM",
    link: "https://www.streetfoodcarnival.com",
    category: "Food & Lifestyle",
  },
  {
    eventId: 14,
    eventName: "Mumbai Marathon for a Cause",
    slug: "mumbai-marathon",
    description:
      "Participate in the Mumbai Marathon to support local charities and stay fit.",
    organizerName: "Run Mumbai",
    email: "events@runmumbai.com",
    contactNo: "+912255667788",
    city: "Mumbai",
    address: "Bandra Kurla Complex, Mumbai, India",
    date: "2024-06-05",
    time: "6:00 AM - 12:00 PM",
    link: "https://www.mumbaimarathon.com",
    category: "Sports & Fitness",
  },
  {
    eventId: 15,
    eventName: "Startup India Summit",
    slug: "startup-india-summit",
    description:
      "Join budding entrepreneurs and top investors at the Startup India Summit in Mumbai.",
    organizerName: "Mumbai Entrepreneurs",
    email: "info@mumbaientrepreneurs.com",
    contactNo: "+912266778899",
    city: "Mumbai",
    address: "WTC Mumbai, Cuffe Parade, Mumbai, India",
    date: "2024-07-20",
    time: "10:00 AM - 5:00 PM",
    link: "https://www.startupindiasummit.com",
    category: "Technology & Business",
  },
  {
    eventId: 16,
    eventName: "Music Under the Stars",
    slug: "music-under-the-stars",
    description:
      "Experience soulful music and starlit skies with local and international artists performing live.",
    organizerName: "Starry Nights",
    email: "events@starrynights.com",
    contactNo: "+912212345678",
    city: "Mumbai",
    address: "Mahalaxmi Racecourse, Mumbai, India",
    date: "2024-08-05",
    time: "7:00 PM - 11:30 PM",
    link: "https://www.musicunderthestars.com",
    category: "Music & Entertainment",
  },
  {
    eventId: 17,
    eventName: "Coding Bootcamp Mumbai",
    slug: "coding-bootcamp-mumbai",
    description:
      "A hands-on coding workshop for beginners and professionals to sharpen their programming skills.",
    organizerName: "Code Up Mumbai",
    email: "workshops@codeupmumbai.com",
    contactNo: "+912277889900",
    city: "Mumbai",
    address: "Andheri IT Park, Mumbai, India",
    date: "2024-09-15",
    time: "9:00 AM - 5:00 PM",
    link: "https://www.codingbootcampmumbai.com",
    category: "Education & Workshops",
  },
  {
    eventId: 18,
    eventName: "Mumbai Arts and Crafts Fair",
    slug: "mumbai-arts-crafts-fair",
    description:
      "Shop for unique handcrafted items and enjoy live demonstrations at the Mumbai Arts and Crafts Fair.",
    organizerName: "Handmade India",
    email: "fair@handmadeindia.com",
    contactNo: "+912266554433",
    city: "Mumbai",
    address: "Jio World Drive, Mumbai, India",
    date: "2024-10-10",
    time: "11:00 AM - 8:00 PM",
    link: "https://www.mumbaiartsandcrafts.com",
    category: "Arts & Culture",
  },
  {
    eventId: 19,
    eventName: "Mumbai Charity Gala",
    slug: "mumbai-charity-gala",
    description:
      "Support noble causes by attending the Mumbai Charity Gala. Featuring auctions, live music, and a gourmet dinner.",
    organizerName: "Mumbai Cares",
    email: "info@mumbaicares.com",
    contactNo: "+912233445599",
    city: "Mumbai",
    address: "Taj Mahal Palace, Mumbai, India",
    date: "2024-11-05",
    time: "7:00 PM - 11:30 PM",
    link: "https://www.mumbaicharitygala.com",
    category: "Community & Causes",
  },
  {
    eventId: 20,
    eventName: "Mumbai Tech Fest",
    slug: "mumbai-tech-fest",
    description:
      "Explore innovations in technology at the annual Mumbai Tech Fest. Perfect for tech enthusiasts and professionals.",
    organizerName: "Innovate Mumbai",
    email: "contact@innovatetech.com",
    contactNo: "+912255443322",
    city: "Mumbai",
    address: "Worli Naka, Mumbai, India",
    date: "2024-11-25",
    time: "10:00 AM - 6:00 PM",
    link: "https://www.mumbaitechfest.com",
    category: "Technology & Business",
  },
  {
    eventId: 21,
    eventName: "Bandra Christmas Carnival",
    slug: "bandra-christmas-carnival",
    description:
      "Celebrate the festive season with music, food, and holiday shopping at the Bandra Christmas Carnival.",
    organizerName: "Festive Mumbai",
    email: "info@festivemumbai.com",
    contactNo: "+912288776655",
    city: "Mumbai",
    address: "Mount Mary Church, Bandra, Mumbai, India",
    date: "2024-12-20",
    time: "4:00 PM - 10:00 PM",
    link: "https://www.bandrachristmascarnival.com",
    category: "Community & Causes",
  },
  {
    eventId: 22,
    eventName: "Mumbai Classical Music Night",
    slug: "mumbai-classical-music-night",
    description:
      "Enjoy a mesmerizing evening of classical music performed by renowned artists.",
    organizerName: "Classical Ragas",
    email: "events@classicalragas.com",
    contactNo: "+912211223344",
    city: "Mumbai",
    address: "Shanmukhananda Hall, Mumbai, India",
    date: "2024-12-25",
    time: "7:00 PM - 10:00 PM",
    link: "https://www.mumbaiclassicalmusic.com",
    category: "Music & Entertainment",
  },
  {
    eventId: 23,
    eventName: "New Year’s Eve Bash 2024",
    slug: "new-years-eve-bash",
    description:
      "Welcome 2025 in style at the grand New Year’s Eve Bash in Mumbai with live DJ, food, and drinks.",
    organizerName: "Mumbai Party Planners",
    email: "info@mumbaipartyplanners.com",
    contactNo: "+912299887766",
    city: "Mumbai",
    address: "JW Marriott, Juhu, Mumbai, India",
    date: "2024-12-31",
    time: "9:00 PM - 1:00 AM",
    link: "https://www.mumbainewyearbash.com",
    category: "Music & Entertainment",
  },
];

async function main() {
  for (const event of data) {
    const resultevent = await prisma.event.upsert({
      where: { eventId: event.eventId },
      update: {},
      create: event,
    });
    console.log(`seeded event with id ${event.eventId}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
