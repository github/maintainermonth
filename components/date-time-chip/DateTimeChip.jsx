import { getLiteral } from '../../common/i18n'
import IconClock from '../../public/icons/clock'

const DateTimeChip = ({ startTime, endTime, timeDisplay }) => {
  if (timeDisplay === 'all-day') {
    return (
      <div className="datetime-chip">
        <p className="datetime-chip__time">
          <span className="datetime-chip__icon">
            <IconClock />
          </span>
          {getLiteral('message:all-day')}
        </p>
      </div>
    )
  }

  if (timeDisplay === 'tbd') {
    return (
      <div className="datetime-chip">
        <p className="datetime-chip__time">
          <span className="datetime-chip__icon">
            <IconClock />
          </span>
          {getLiteral('message:tbd')}
        </p>
      </div>
    )
  }

  return (
    <div className="datetime-chip">
      {startTime ? (
        <p className="datetime-chip__time">
          <span className="datetime-chip__icon">
            <IconClock />
          </span>
          {`${startTime.utc} - ${endTime.utc}`}
          <span className="datetime-chip__timezone">
            {getLiteral('timezone:utc')}
          </span>
        </p>
      ) : null}

      {endTime ? (
        <p className="datetime-chip__time">
          <span className="datetime-chip__icon">
            <IconClock />
          </span>
          {`${startTime.pt} - ${endTime.pt}`}
          <span className="datetime-chip__timezone">
            {getLiteral('timezone:pt')}
          </span>
        </p>
      ) : null}
    </div>
  )
}

export default DateTimeChip
