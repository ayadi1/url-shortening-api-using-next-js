import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import BoostSection from "../components/BoostSection";
export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="url shortening api" />
        <meta property="og:type" content="url shortening api" />
        <meta
          property="og:url"
          content="https://raw.githubusercontent.com/ayadi1/url-shortening-api-using-next-js/main/design/desktop-preview.jpg?token=GHSAT0AAAAAABR6U5DT62IPT6J2WM3Y2YPUYRN6KSQ"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/ayadi1/url-shortening-api-using-next-js/main/design/desktop-preview.jpg?token=GHSAT0AAAAAABR6U5DT62IPT6J2WM3Y2YPUYRN6KSQ"
        />
        <meta
          name="twitter:image"
          content="https://raw.githubusercontent.com/ayadi1/url-shortening-api-using-next-js/main/design/desktop-preview.jpg?token=GHSAT0AAAAAABR6U5DT62IPT6J2WM3Y2YPUYRN6KSQ"
        />
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
