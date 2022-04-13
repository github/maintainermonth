import * as ROUTES from '../../common/routes'

import ButtonLink from '../button-link/ButtonLink'
import { getLiteral } from '../../common/i18n'

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <div className="not-found__column">
          <h1 className="not-found__title">{getLiteral('not-found:title')}</h1>
          <p className="not-found__subtitle">
            {getLiteral('not-found:subtitle')}
          </p>
        </div>

        <div className="not-found__button">
          <ButtonLink href={ROUTES.HOME.path}>
            {getLiteral('not-found:button')}
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default NotFound
