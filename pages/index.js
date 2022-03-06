import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import BoostSection from "../components/BoostSection";
export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/logo.png"
        />
        <meta
          name="description"
          content="Loopstudios landing page using react js"
        />
        <meta
          name="keywords"
          content="react,javascript,flexbox,html,css,html5,css3,nextJS"
        />
        <meta name="author" content="oussama ayadi" />
        <title>url shortening api | using nextJS</title>
      </Head>
      <Header />
      <Main />
      <BoostSection />
      <Footer />
    </>
  );
}
