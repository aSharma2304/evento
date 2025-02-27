import {
  MapPinIcon,
  BookmarkIcon,
  CalendarIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Find Events Near You",
    description:
      "Easily discover concerts, workshops, networking meetups, and more happening in your city. Just enter your location and never miss out!",
    icon: MapPinIcon,
  },
  {
    name: "Bookmark Your Favorites",
    description:
      "Save events you’re interested in and access them later. Never lose track of an exciting opportunity again.",
    icon: BookmarkIcon,
  },
  {
    name: "Host Your Own Event",
    description:
      "Create and manage your own events, reach the right audience, and grow your community effortlessly.",
    icon: CalendarIcon,
  },
  {
    name: "Share with Friends",
    description:
      "Spread the word! Easily share event details with friends and followers on social media.",
    icon: ShareIcon,
  },
];

export default function Feature() {
  return (
    <div className=" py-24 sm:py-32 w-full px-6 lg:px-8 ">
      <div className="mx-auto max-w-full bg-transparent ">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">
            {/* Discover & Connect */}
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-balance">
            Never miss out on opportunities again
          </p>
          <p className="mt-6 text-lg/8 text-gray-500">
            Explore events happening around you, bookmark favorites, host your
            own, and share the excitement with your friends.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-medium text-gray-90 text-sky-600">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-white/15">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
