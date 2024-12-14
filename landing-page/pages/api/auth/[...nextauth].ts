import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log("NextAuth API Route File Loaded");

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set
};

console.log("NextAuth API Route Loaded");

export default NextAuth(authOptions);

