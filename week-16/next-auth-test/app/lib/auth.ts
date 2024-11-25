import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

const userProfile = "Abhinav-ark"
// Login with password, email
// Login with google oAuth
export const NEXT_AUTH = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: { label: "password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials: any) {
        // const user = await prisma.user.findOne({
        //   where: {
        //     username: username,
        //     password: password
        //   }
        // });

        // NextAuth automatically understands that the credentials are 
        // incorrect and it will let the front-end know
        // if (!user) {
        //   return null;
        // }

        // If the credentails are correct then we can allow for a sign-in
        return {
          id: "user1",
          email: credentials.email,
        }
      }
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // async jwt({ token, user, account, profile }) {
    //   console.log(token);
    //   token.userId = "user1";
    //   token.type = "admin";
    //   return token;
    // },
    async signIn({ user, account, profile }: any) {
      console.log(user);
      console.log(account);
      console.log(profile);

      if (profile.login === userProfile) {
        console.log("Success")
        return true;
      }
      console.log("Failure")
      return false;

      //   console.log("Authenticated")
      //   return true;
      // }
      // console.log("Not Authenticated")
      // return false;
    },
    async session({ session, token, user }: any) {
      console.log(session);
      if (session && session.user) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
};
