import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  // Configure one or more authentication providers by adding them to the `providers` array
  // For now, I only need a simple way to enter a username, so I'm using a custom CredentialsProvider
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Username',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // But I'm just using this as a hack to get some user name, so I don't need any of that
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' }, // only using username as I don't need any user authentication or passwords for my use case
      },
      async authorize(credentials, req) {
        if (!credentials?.username) {
          return null;
        }
        // normally you would do some validation proper validation here, but I don't need any of that
        return {
          name: credentials.username,
          id: createRandomID(), // creating some random ID as NextAuth requires it
        };
      },
    }),
  ],
});

function createRandomID() {
  return Math.random().toString(36).substring(7);
}
