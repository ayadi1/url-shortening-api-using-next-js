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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          referrerpolicy="no-referrer"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
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
