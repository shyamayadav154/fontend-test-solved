import NextAuth from 'next-auth';
import CredintialProvider from 'next-auth/providers/credentials';
import jwt from 'next-auth/jwt';
import axios from 'axios';

export default NextAuth({
  providers: [
    CredintialProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'username',
          type: 'text',
          placeholder: ' username ',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const url = 'http://localhost:3000/api/hello';
        const response = await axios.post(url, credentials);
        if (response) {
         
          return response.data;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.user = user.user;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.id = token.id;
      session.accessToken = token.accessToken;

      return session;
    },
  },
  theme: {
    colorScheme: 'light',
  },
  session: {
    jwt: true,
    maxAge: 60 * 60 * 24,
  },
  jwt: {
    secret: 'JWT_SECRET',
  },
});
