import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FormattedMessage } from "react-intl";
import useLocaleSwitch from "../i18n/useLocaleSwitch";

export default function Home() {
  const { switchLocale } = useLocaleSwitch();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>
          <FormattedMessage defaultMessage="Welcome at Blood Giver" />
        </h1>
        <FormattedMessage defaultMessage="one blood donation could saves up to three lives" />
        <button onClick={() => switchLocale("ar")}>Ar</button>
        <button onClick={() => switchLocale("en")}>En</button>
      </main>
    </div>
  );
}
