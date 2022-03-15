import Link from "next/link"

import { getRelativeURL } from "../../common/routes"
import { t } from "../../common/i18n"

const MainLayout = ({ children }) => {
  return (
    <>
      <Link href={getRelativeURL("/")}>{`${t("page:title")} ${t(
        "page:date"
      )}`}</Link>
      <nav>
        <ul>
          <li>
            <Link href={getRelativeURL("/schedule")}>
              {t("navigation:schedule")}
            </Link>
          </li>
          <li>
            <Link href={getRelativeURL("/resources")}>
              {t("navigation:resources")}
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer>
        <p>{t("footer:copyright")}</p>

        <a href={t("footer:terms-url")} target="_blank" rel="noreferrer">
          {t("footer:terms-title")}
        </a>
        <a href={t("footer:privacy-url")} target="_blank" rel="noreferrer">
          {t("footer:privacy-title")}
        </a>
        <a
          href={`mailto:${t("footer:email")}`}
          target="_blank"
          rel="noreferrer"
        >
          {t("footer:email")}
        </a>
        <a href={t("footer:repository-url")} target="_blank" rel="noreferrer">
          {t("footer:repository-title")}
        </a>
        <a href={t("footer:coc-url")} target="_blank" rel="noreferrer">
          {t("footer:coc-title")}
        </a>
      </footer>
    </>
  )
}

export default MainLayout
