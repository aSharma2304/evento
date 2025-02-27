"use server";
import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const secretKey = process.env.SESSION_SECRET || "secret123";
const encodedKey = new TextEncoder().encode(secretKey);

type SessionType = {
  userId: string;
  expiresAt: Date;
};

// const encrypt = async (payload:SessionType)=>{

// }

export const createSession = async (userId: string) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  // const session ="sljkd";

  (await cookies()).set("session", session, {
    httpOnly: true,
    expires: expiresAt,
    secure: true,
  });
};

export async function deleteSession() {
  (await cookies()).delete("session");
  //   redirect("login");
}

export async function encrypt(payload: SessionType) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch (error) {
    console.log("Failed to verify session");
    return undefined;
  }
}

export async function generateEmailVerificationToken(email: string) {
  const token = await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("5m") // Set expiration time to 5 minutes
    .sign(encodedKey);

  return token;
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, encodedKey);
    const email = payload.email as string;

    // If email is missing in the payload
    if (!email) {
      return { message: "Invalid token payload", status: "failed" };
    }

    // Update the user's email verification status in the database
    const user = await prisma.user.update({
      where: { email },
      data: { isEmailVerified: true },
    });
    return { message: "Successfully Verified", status: "success" };
  } catch (error: any) {
    if (error.code === "ERR_JWT_EXPIRED") {
      console.error("Token has expired!");
      return { message: "Token Expired", status: "expired" };
    } else {
      console.error("Invalid token!");
      return { message: "Invalid Token", status: "failed" };
    }
  }
}

// export const getLoggedUser = async () => {
//   try {
//     const cookieStore = await cookies();
//     const cookie = cookieStore.get("session")?.value;
//     const session = await decrypt(cookie);

//     // if (session) return session;

//     if(session){
//       const uId = session['userId']
//       const loggedUser =await prisma.user.findUnique({where:{
//         userId:+uId
//       }})
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };

export const getLoggedUser = async () => {
  try {
    const cookieStore = await cookies();
    const cookie = cookieStore.get("session")?.value;
    if (!cookie) return null; // No session found

    const session = (await decrypt(cookie)) as SessionType | undefined;

    if (session?.userId) {
      const loggedUser = await prisma.user.findUnique({
        where: {
          userId: Number(session.userId), // Ensure `userId` is a number
        },
      });

      return loggedUser; // Return the logged-in user
    }

    return null; // Session exists but no user found
  } catch (err) {
    console.error("Error getting logged user:", err);
    return null;
  }
};
// export const getLoggedUser = async () => {
//   try {
//     const cookieStore = await cookies();
//     const cookie = cookieStore.get("session")?.value;

//     console.log("Session Cookie:", cookie); // Log cookie value

//     if (!cookie) {
//       console.log("No session cookie found.");
//       return null;
//     }

//     const session = (await decrypt(cookie)) as SessionType | undefined;

//     console.log("Decrypted Session:", session); // Log decrypted session

//     if (!session || !session.userId) {
//       console.log("Session is invalid or missing userId.");
//       return null;
//     }

//     const userId = Number(session.userId); // Ensure it's a number

//     console.log("Fetching user with userId:", userId);

//     const loggedUser = await prisma.user.findUnique({
//       where: {
//         userId: userId,
//       },
//     });

//     console.log("Logged User:", loggedUser); // Log fetched user

//     return loggedUser;
//   } catch (err) {
//     console.error("Error getting logged user:", err);
//     return null;
//   }
// };
