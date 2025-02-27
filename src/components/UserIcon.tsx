import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { handleLogout } from "@/actions/submitActions";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/lib/types";
import { toast } from "sonner";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
// import { useLoggedInUser } from "@/lib/userStore";

// const UserIcon = ({
//   username,
//   userId,
//   setUser,
// }: {
//   username: string;
//   userId: number;
//   setUser: (user: any | null) => void;
// }) => {
//   // const userId = useLoggedInUser((state) => state.userId);
//   console.log("user icon got " + userId);
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" className="text-black">
//           {username ? username : "abd"}
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-fit flex justify-center ">
//         <DropdownMenuItem>
//           <form action={handleLogout}>
//             <Button
//               type="submit"
//               onClick={() => {
//                 setUser(null);
//               }}
//             >
//               Logout
//             </Button>
//           </form>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default UserIcon;

const UserIcon = ({
  username,
  userId,
  setUser,
  user,
}: {
  username: string;
  userId: number;
  setUser: (user: any | null) => void;
  user: User;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!userId) {
      setUser(null);
      router.push("/login"); // Redirect to login page if needed
    }
  }, [userId, setUser, user]);
  // useEffect(() => {}, [open]);
  return (
    <DropdownMenu onOpenChange={(isOpen) => setOpen(isOpen)}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-black">
          {username || "User"}
          {!open ? (
            <FaAngleDown className="size-6"></FaAngleDown>
          ) : (
            <FaAngleUp className="size-6"></FaAngleUp>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit flex justify-center ">
        <DropdownMenuItem>
          <form
            action={handleLogout}
            onClick={() => toast("Logged out successfully")}
          >
            <Button type="submit">Logout</Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserIcon;
