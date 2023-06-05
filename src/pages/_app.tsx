import '../styles/global.css';
import type { AppType } from 'next/app';
import { trpc } from 'utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

// If we had a session or something, we'd fetch it here
// MyApp.getInitialProps = async ({ ctx }) => {
//   return {
//     session: await getSession(ctx),
//   };
// };

export default trpc.withTRPC(MyApp);
