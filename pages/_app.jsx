import "../styles/globals.css";
import "../styles/github-highlight.css";
import "../styles/github-md.css";
// import '../node_modules/highlight.js/styles/default.css'
import "../styles/main.scss";
import Header from "../components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <div className="layout">
            <Head>
                <title>V by example</title>
                <meta
                    name="description"
                    content="Learn vlang by simple and real-wrold examples"
                />
                <meta
                    property="og:title"
                    content="Learn vlang by simple and real-wrold examples"
                />
                <meta
                    property="og:description"
                    content="Learn vlang by simple and real-wrold examples"
                />
                <meta property="og:url" content="https://snipcart.com/" />
                <meta property="og:type" content="website"></meta>
            </Head>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
