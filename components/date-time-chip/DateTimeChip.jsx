import { getLiteral } from '../../common/i18n'

const DateTimeChip = ({ date, startTime, endTime }) => {
  return (
    <div className="datetime-chip">
      {date ? (
        <p className="datetime-chip__date">
          <span>{date}</span>
        </p>
      ) : null}

      {startTime ? (
        <p className="datetime-chip__time">
          {startTime.utc} - {endTime.utc}
          <span className="datetime-chip__timezone">
            {getLiteral('timezone:utc')}
          </span>
        </p>
      ) : null}

      {endTime ? (
        <>
          <div className="datetime-chip__divider" />

          <p className="datetime-chip__time">
            {startTime.pt} - {endTime.pt}
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
