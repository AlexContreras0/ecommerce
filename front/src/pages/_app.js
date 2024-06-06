import "@/styles/globals.css";
import NavMenu from "@/components/NavMenu/NavMenu";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavMenu />
      <Component {...pageProps} />
    </>
  );
}
