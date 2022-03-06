import Script from "next/script";
import "../styles/globals.css";
import { AuthUserProvider } from "../Homework/AuthUserContext";
import { RecoilRoot } from "recoil";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <RecoilRoot>
        <Head>
          <script
            async
            src="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.js"
          ></script>
          <link
            href="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css"
            rel="stylesheet"
          />
        </Head>
        <AuthUserProvider>
          <Component {...pageProps} />
        </AuthUserProvider>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;

// import Navbar from '../components/containers/NavBar'
// import Head from 'next/head'
// import { ThemeProvider } from '@mui/styles'
// import { RecoilRoot } from 'recoil'
// import { useRouter } from 'next/router'
// import AuthGuard from '../components/presentations/Authguard';
// import PrimarySearchAppBar from '../components/containers/NavBarAfterLogin'
// import "../styles/globals.css"
// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   return (

//     <RecoilRoot>
//       <Head>
//         <script src="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.js"></script>
//         <link href="https://unpkg.com/maplibre-gl@1.15.2/dist/maplibre-gl.css" rel="stylesheet" />
//       </Head>
//       <ThemeProvider >
//          <Navbar/>
// {
//   router.pathname === '/' || router.pathname === '/cards/${image.id}' || router.pathname === '/articlepage/[id]' || router.pathname === '/FilterPagesBeforeLogin' || router.pathname === '/FilterPagesBeforeLogin' || router.pathname === '/FilterPagesBeforeLogin' || router.pathname === '/signup' ? (    //public route
//     <Component {...pageProps} />
//   ) : (
//       <AuthGuard>
//        <PrimarySearchAppBar />
//         <Component {...pageProps} />
//       </AuthGuard>
//     )
// }

//       </ThemeProvider >
//     </RecoilRoot >

//   )
// }

// export default MyApp;
