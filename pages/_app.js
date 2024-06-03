import Layout from "../components/layout";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { Roboto_Condensed } from "@next/font/google";
import ReduxProvider from "../components/store/reduxProvider";
import Nav from "../components/nav";
import { SessionProvider } from 'next-auth/react';
const inter = Inter({ subsets: ["latin"] });
const robotos = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();
  const isAdminPortalPage = router.pathname.startsWith('/admin-portal');
  const isUserPortalPage = router.pathname.startsWith('/user-dashboard');
  const isHomepage = router.pathname.startsWith('/products/homepage');
  const isTablepage = router.pathname.startsWith('/table');

  const showNavAndFooter = !(isAdminPortalPage || isUserPortalPage || isHomepage || isTablepage);
  
  return (
    <SessionProvider session={session}>
      <ReduxProvider>
        <Layout showNavAndFooter={showNavAndFooter}>
          <style jsx global>{`
            html {
              font-family: 'Inter', sans-serif;
              h1, h2, h3, nav, .top-links a {
                font-family: 'Roboto', sans-serif;
              }
            }
          `}</style>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </SessionProvider>
  );
}

export default MyApp;
