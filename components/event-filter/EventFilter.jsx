import { getLiteral } from '../../common/i18n'
import TYPES from '../event-type-chip/types'

const EventFilter = ({ eventTypes, selectedType, onSelectType, totalEvents }) => {
  if (eventTypes.length === 0) return null

  return (
    <div className="event-filter" aria-label={getLiteral('schedule:filter-label')}>
      <span className="event-filter__label">
        {getLiteral('schedule:filter-label')}
      </span>
      <div className="event-filter__options">
        <button
          type="button"
          className="event-filter__option"
          data-active={selectedType === 'all' ? true : undefined}
          aria-pressed={selectedType === 'all'}
          onClick={() => onSelectType('all')}
        >
          {getLiteral('schedule:filter-all')}
          <span className="event-filter__count">{totalEvents}</span>
        </button>
        {eventTypes.map((type) => (
          <button
            key={type.value}
            type="button"
            className="event-filter__option"
            data-active={selectedType === type.value ? true : undefined}
            aria-pressed={selectedType === type.value}
            onClick={() => onSelectType(type.value)}
          >
            {TYPES[type.value].label}
            <span className="event-filter__count">{type.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default EventFilter
