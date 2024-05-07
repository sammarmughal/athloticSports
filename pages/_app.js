import Layout from "../components/layout";
import { useRouter } from "next/router";
import "../styles/globals.css";
import { Inter } from "@next/font/google";
import { Roboto_Condensed } from "@next/font/google";
import ReduxProvider from "../components/store/reduxProvider";
import Nav from "../components/nav";
const inter = Inter({ subsets: ["latin"] });
const robotos = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isAdminPortalPage = router.pathname.startsWith('/admin-portal');
  const isUserPortalPage = router.pathname.startsWith('/user-dashboard');
  const showNavAndFooter  = !(isAdminPortalPage || isUserPortalPage )  ;
  return (
    <ReduxProvider>
      <Layout showNavAndFooter={showNavAndFooter}>
        <style jsx global>{`
          html {
            font-family: ${inter.style.fontFamily};
            h1,
            h2,
            h3,
            nav,
            .top-links a {
              font-family: ${robotos.style.fontFamily};
            }
          }
        `}</style>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  );
}

export default MyApp;
