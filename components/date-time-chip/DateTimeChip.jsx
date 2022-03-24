import { getLiteral } from '../../common/i18n'

import useDateTime from './useDateTime'

const DateTimeChip = ({ date, startTime, endTime }) => {
  const formattedDateTime = useDateTime(date, startTime, endTime)

  return (
    <div className="datetime-chip">
      {date ? (
        <p className="datetime-chip__date">
          <span>{formattedDateTime.date}</span>
        </p>
      ) : null}

      {startTime ? (
        <p className="datetime-chip__time">
          {formattedDateTime.startTime.utc} - {formattedDateTime.endTime.utc}
          <span className="datetime-chip__timezone">
            {getLiteral('timezone:utc')}
          </span>
        </p>
      ) : null}

      {endTime ? (
        <>
          <div className="datetime-chip__divider" />

          <p className="datetime-chip__time">
            {formattedDateTime.startTime.pt} - {formattedDateTime.endTime.pt}
            <span className="datetime-chip__timezone">
              {getLiteral('timezone:pt')}
            </span>
          </p>
        </>
      ) : null}
    </div>
  )
}

export default DateTimeChip
