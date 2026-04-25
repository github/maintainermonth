import { getLiteral } from '../../common/i18n'
import IconClock from '../../public/icons/clock'

const TimeRow = ({ children, timezone }) => (
  <p className="datetime-chip__time">
    <span className="datetime-chip__icon">
      <IconClock />
    </span>
    <span className="datetime-chip__label">
      {children}
      {timezone ? (
        <>
          {' '}
          <span className="datetime-chip__timezone">{timezone}</span>
        </>
      ) : null}
    </span>
  </p>
)

const formatRange = (startTime, endTime, timezone) => {
  const start = startTime?.[timezone]
  const end = endTime?.[timezone]

  if (!start || !end) return null

  const startDate = startTime?.[`${timezone}Date`]
  const endDate = endTime?.[`${timezone}Date`]

  if (startDate && endDate && startDate !== endDate) {
    return `${startDate}, ${start} - ${endDate}, ${end}`
  }

  return `${start} - ${end}`
}

const DateTimeChip = ({ startTime, endTime, timeDisplay }) => {
  if (timeDisplay === 'all-day') {
    return (
      <div className="datetime-chip">
        <TimeRow>
          {getLiteral('message:all-day')}
        </TimeRow>
      </div>
    )
  }

  if (timeDisplay === 'tbd') {
    return (
      <div className="datetime-chip">
        <TimeRow>
          {getLiteral('message:tbd')}
        </TimeRow>
      </div>
    )
  }

  const utcRange = formatRange(startTime, endTime, 'utc')
  const ptRange = formatRange(startTime, endTime, 'pt')

  return (
    <div className="datetime-chip">
      {utcRange ? (
        <TimeRow timezone={getLiteral('timezone:utc')}>{utcRange}</TimeRow>
      ) : null}

      {ptRange ? (
        <TimeRow timezone={getLiteral('timezone:pt')}>{ptRange}</TimeRow>
      ) : null}
    </div>
  )
}

export default DateTimeChip
