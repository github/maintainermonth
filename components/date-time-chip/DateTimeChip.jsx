import { getLiteral } from '../../common/i18n'
import IconClock from '../../public/icons/clock'

const DateTimeChip = ({ startTime, endTime }) => {
  return (
    <div className="datetime-chip">
      {startTime ? (
        <p className="datetime-chip__time">
          <span className="datetime-chip__icon">
            <IconClock />
          </span>
          {startTime.utc && endTime.utc
            ? `${startTime.utc} - ${endTime.utc}`
            : getLiteral('message:tbd')}
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
          {startTime.pt && endTime.pt
            ? `${startTime.pt} - ${endTime.pt}`
            : getLiteral('message:tbd')}
          <span className="datetime-chip__timezone">
            {getLiteral('timezone:pt')}
          </span>
        </p>
      ) : null}
    </div>
  )
}

export default DateTimeChip
