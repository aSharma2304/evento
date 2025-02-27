"use client";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { handleLogout } from "@/actions/submitActions";
import UserIcon from "./UserIcon";
// import { useLoggedInUser } from "@/lib/userStore";
import { useUser } from "@/app/(context)/UserContext";
// import { useSession } from "next-auth/react";
import { User } from "@/lib/types";
import { toast } from "sonner";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Events",
    route: "/events/all",
  },
  {
    name: "Host Event",
    route: "/host",
  },
  {
    name: "Bookmarks",
    route: "/bookmarks",
  },
];

const Header = () => {
  const { user, setUser } = useUser();
  console.log("User Context Provider has user " + user?.username);
  const currentPath = usePathname();
  const router = useRouter();

  const logout = async () => {
    await handleLogout();
    setUser(null);
    router.push("/");
  };

  useEffect(() => {
    if (user) {
      console.log("User logged in:", user.username);
    } else {
      console.log("User logged out");
    }
  }, [user]);

  return (
    <header className="py-3 sm:py-6 px-12 flex justify-between border-b border-white/10 align-middle">
      <Link href="/" className="text-2xl italic">
        EVENTO
      </Link>

      {user ? (
        <>
          <ul className=" gap-x-6 hidden sm:flex">
            {routes.map((route) => {
              return (
                <li key={route.name}>
                  <Link
                    href={route.route}
                    className={`${
                      currentPath === route.route
                        ? "text-sky-600"
                        : "text-white/50 hover:text-white/70"
                    } transition`}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <form
            action={() => {
              logout();
            }}
          >
            {/* <Button
              type="submit"
              className="bg-blue-800/30 text-white/90  hover:bg-blue-800/60"
            >
              Logout
            </Button> */}
            <UserIcon
              username={user.username}
              userId={user.userId}
              setUser={setUser}
              user={user}
            ></UserIcon>
          </form>
        </>
      ) : (
        <button className="bg-transparent text-white w-fit px-7 h-10 border border-[#3654ff] rounded-[11px] text-center align-middle transition-all duration-600 ease-in-out hover:bg-[#3654ff] cursor-pointer font-normal ">
          Login
        </button>
      )}
    </header>
  );
};

export default Header;
