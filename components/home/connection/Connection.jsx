import * as ROUTES from '../../../common/routes'

import ButtonLink from '../../button-link/ButtonLink'

const Connection = ({ title, buttonText }) => {
  return (
    <div className="connection">
      <div className="connection__content">
        <h2 className="connection__title">{title}</h2>

        <div className="connection__button">
          <ButtonLink href={ROUTES.SCHEDULE.path}>{buttonText}</ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default Connection
