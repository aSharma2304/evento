// import { LoginformSchema } from "@/app/(Authentication)/login/page";
// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";
// import z from "zod";

// export const authOptions = {
//   providers: [
//     Credentials({
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const safeParsed = LoginformSchema.safeParse(credentials);
//         // if (!safeParsed.success) {
//         //   console.log("Invalid Credentials passed rejected by zod");
//         //   return null;
//         // }
//         // if (!credentials?.email || !credentials.password) {
//         //   //   throw new Error("Missing email or password");
//         //   return null;
//         // }
//         // Example user lookup
//         const user = {
//           id: "3035",
//           username: "Salman Khan",
//           email: "jojo@mojo.com",
//         };

//         if (!user) {
//           throw new Error("Invalid credentials");
//         }

//         return user;
//       },
//     }),
//   ],
// };

// export default NextAuth(authOptions);
