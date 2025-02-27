"use server";
import { LoginformSchema } from "@/app/(Authentication)/login/page";
import { formSchema } from "@/app/(Authentication)/signup/page";
import { eventFormSchema } from "@/app/host/page";
import z from "zod";
import bcrypt from "bcryptjs";
import { useLoggedInUser } from "@/lib/userStore";
// import NextAuth from "../../auth";
// import { authOptions } from "../../auth";

// const { signIn } = NextAuth(authOptions);
// import { CommentType } from "./types";
import { PrismaClient } from "@prisma/client";
import { createSession, deleteSession, getLoggedUser } from "@/lib/sessions";
import test from "node:test";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

type CommentType = {
  comment: string;
  commenterName: string;
  eventId: number;
};

export const submitComment = async (comment: CommentType) => {
  const resp = await prisma.reviews.create({
    data: {
      commenterName: comment.commenterName,
      comment: comment.comment,
      eventId: comment.eventId,
    },
  });
  if (!resp) {
    return { message: "An error occured", status: "error" };
  } else {
    return { message: "Submitted Comment", status: "success" };
  }
};

export const submitFormData = async (formData: FormData) => {
  const formObject = Object.fromEntries(formData.entries());

  console.log(formObject);
};

export const handleSignUp = async (data: z.infer<typeof formSchema>) => {
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  if (user) {
    return { status: "failed", message: "email already in use" };
  }

  const hashedPassword = await bcrypt.hash(data.password, 8);

  const newUser = {
    username: data.name,
    email: data.email,
    password: hashedPassword,
  };
  const res = await prisma.user.create({ data: newUser });

  if (!res) {
    return {
      status: "failed",
      message: "An unexpected error ocuured, Try Later",
    };
  }
  // const { userId, username, email } = res;
  // useLoggedInUser.setState({
  //   userId: userId.toString(),
  //   username: username,
  //   email: email,
  // });
  await createSession(String(res.userId));

  return {
    success: true,
    status: "success",
    message: "Logged in successfully",
    user: {
      userId: res.userId,
      username: res.username,
      email: res.email,
    },
  };

  // redirect("/");
  // console.log(data);
};

const testUser = {
  userId: "11",
  email: "elonMusk@spacex.com",
  password: "12345678",
};

export const handleLogin = async (data: z.infer<typeof LoginformSchema>) => {
  const { email, password } = data;
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (!user) {
    return { status: "failed", message: "No user found with this email" };
  }
  // console.log(data);
  // if (email !== testUser.email || password !== testUser.password) {
  //   return { message: "Login Failed" };
  // }
  const isPasswordMatching = await bcrypt.compare(password, user.password);
  if (!isPasswordMatching) {
    return { status: "failed", message: "Login Failed" };
  }
  await createSession(String(user.userId));

  // const { userId, username } = user;
  // useLoggedInUser.setState({
  //   userId: userId.toString(),
  //   username: username,
  //   email: user.email,
  // });
  return {
    success: true,
    status: "success",
    message: "Logged in successfully",
    user: {
      userId: user.userId,
      username: user.username,
      email: user.email,
    },
  };
  // redirect("/");
};

export const handleLogout = async () => {
  // useLoggedInUser.setState({
  //   userId: "",
  //   username: "",
  //   email: "",
  // });
  await deleteSession();
  redirect("/login");
};

export const handleAddEvent = async (data: z.infer<typeof eventFormSchema>) => {
  console.log(data);
};

export const handleBookmark = async (
  userId: number,
  eventId: number,
  isBooked: boolean
) => {
  if (isBooked) {
    try {
      const resp = await prisma.bookmark.delete({
        where: {
          userId_eventId: {
            userId: userId,
            eventId: eventId,
          },
        },
      });
      return { message: "Removed from Bookmarks" };
    } catch (err) {
      console.log(err);
      return { message: "An error Occured" };
    }
  }
  try {
    const res = await prisma.bookmark.create({
      data: {
        userId: userId,
        eventId: eventId,
      },
    });
    if (res) {
      return { message: "Addes to Bookmarks" };
    } else {
      return { message: "Addes to Bookmarks" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Cannot" };
  }
};

export const isBookmarked = async (eventId: number, userId: number) => {
  const bookmark = await prisma.bookmark.findUnique({
    where: {
      userId_eventId: {
        userId: userId,
        eventId: eventId,
      },
    },
  });
  if (bookmark) return true;
  return false;
};

export const getBookmarks = async (userId: number) => {
  const bookmarks = await prisma.bookmark.findMany({
    where: {
      userId: userId,
    },
  });

  const eventsBookmarked = bookmarks.map((bookmark) => bookmark.eventId);
  const eventsData = await prisma.event.findMany({
    where: {
      eventId: {
        in: eventsBookmarked,
      },
    },
  });
  return eventsData;
};

export const getLoggedUserAction = async () => {
  return await getLoggedUser();
};
