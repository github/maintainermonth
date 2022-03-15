import Head from "next/head"

import { t } from "../common/i18n"

export default function Schedule() {
  return (
    <div>
      <Head>
        <title>{t("schedule:title")}</title>
        <meta name="description" content={t("schedule:description")} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{t("schedule:title")}</h1>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // TODO: get events
  return {
    props: {},
  }
}
