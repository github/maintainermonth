import { useRouter } from "next/router";

import SectionDivider from "../../section-divider/SectionDivider"
import ButtonLink from "../../button-link/ButtonLink";

import * as ROUTES from "../../../common/routes"

const News = ({ title, news }) => {
    const { pathname } = useRouter()
    const year = Number(pathname.split('/')[1]) > 404 ? Number(pathname.split('/')[1]) : null

    
    return (
        <section className="news">
            <div className="news__content">
                <SectionDivider title={title} />
                <div className="news__items">
                    {news.map(({ title: newsTitle, description, link }, key) => (
                        <div className="news__item" key={key}>
                            <a href={link} className="news__link" target="_blank" rel="noopener noreferrer">
                                <h4 className="news__text">{newsTitle}</h4>
                            </a>
                            <p className="news__text">{description}</p>
                        </div>
                    ))}
                    <div className="news__item news__button">
                        <ButtonLink children={"See more news"} href={ROUTES.NEWS.getPath(year)} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default News;