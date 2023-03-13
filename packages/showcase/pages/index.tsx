import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Arborist</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>React Arborist Demos</h1>
        <p>
          React arborist is a tree view component library for react. It provides
          the behavior most tree views need and leaves the styling up to you.
        </p>
        <p>
          If you are using it in your project, send me a screenshot on{" "}
          <a href="https://twitter.com/specialcasedev">Twitter</a>! Also leave a
          star on{" "}
          <a href="https://github.com/brimdata/teora-react-arborist">GitHub</a>.
        </p>

        <div className={styles.demos}>
          <Link href="/gmail">
            <div className={styles.demoCard}>
              <div className={`${styles.demoCardImage} gmail`}></div>
              <b>Custom Styles</b>
              <h2>Gmail Sidebar Clone</h2>
              <p>
                In this demo, we recreate the Gmail sidebar to demonstrate how
                you can style a tree any way you want.
              </p>
              <Link href="/gmail">View Demo</Link>
            </div>
          </Link>

          <Link href="/cities">
            <div className={styles.demoCard}>
              <div className={`${styles.demoCardImage} cities`}></div>
              <b>30,000 Nodes</b>
              <h2>Top Cities By Population</h2>
              <p>
                In this demo, we populate the tree with US cities grouped by
                state to demonstrate how the tree performs with over 30,000
                nodes.
              </p>
              <Link href="/cities">View Demo</Link>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
