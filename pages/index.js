import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import BoostSection from "../components/BoostSection";
export default function Home() {
  return (
    <>
      <Head></Head>
      <Header />
      <Main />
      <BoostSection />
      <Footer />
    </>
  );
}
