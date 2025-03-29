import { useRouter } from 'next/router'

import SectionDivider from '../../section-divider/SectionDivider'
import ButtonLink from '../../button-link/ButtonLink'

import * as ROUTES from '../../../common/routes'

const News = ({ title, news }) => {
  const { pathname } = useRouter()
  const year =
    Number(pathname.split('/')[1]) > 404 ? Number(pathname.split('/')[1]) : null

  return (
    <section className="news">
      {/* <div className="news__content">
        <SectionDivider title={title} />
        <div className="news__items">
            <div className="news__item" key={news.title}>
              <a
                href={news.link}
                className="news__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h4 className="news__text">{news.title}</h4>
              </a>
              <p className="news__text">{news.description}</p>
            </div>
          <div className="news__item news__button">
            <ButtonLink href={ROUTES.NEWS.getPath(year)}>
              See more news
            </ButtonLink>
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default News
