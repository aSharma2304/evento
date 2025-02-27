// "use client";

// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   ReactNode,
// } from "react";
// import { getLoggedUserAction } from "@/actions/submitActions";

// interface UserContextType {
//   user: any | null;
//   setUser: (user: any | null) => void;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<any | null>(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const data = await getLoggedUserAction(); // Call the server action
//         console.log("Got null user from getLoggedUserAction");
//         setUser(data); // Update state with user info
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//       }
//     };

//     fetchUser();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (!context) throw new Error("useUser must be used within a UserProvider");
//   return context;
// };

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getLoggedUserAction } from "@/actions/submitActions";

interface UserContextType {
  user: any | null;
  setUser: (user: any | null) => void;
  refreshUser: () => Promise<void>; // New function to manually refresh user state
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);

  // Function to refresh user data manually
  const refreshUser = async () => {
    try {
      const data = await getLoggedUserAction();
      setUser(data);
    } catch (error) {
      console.error("Failed to fetch user:", error);
    }
  };

  useEffect(() => {
    refreshUser(); // Fetch user on mount
  }, []);
  useEffect(() => {
    if (user) {
      // Perform some side effect when user changes
      console.log("User updated:", user);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
