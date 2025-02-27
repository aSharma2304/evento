import { create } from "zustand";

type UserType = {
  userId: string;
  setUserId: (id: string) => void; // ✅ Function to update userId
};

export const useLoggedInUser = create<UserType>((set) => ({
  userId: "",
  setUserId: (id) => set({ userId: id }), // ✅ Correct way to update Zustand state
}));
