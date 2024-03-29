import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;

      if (user?.isAdmin) token.isAdmin = user.isAdmin;

      return token;
    },

    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;

      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;

      return session;
    },
  },

  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const user = await User.findOne({
          email: "example@gmail.com",
          password: "ali1382",
        });
      },
    }),
  ],
});
