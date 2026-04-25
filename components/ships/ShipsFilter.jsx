import { getLiteral } from '../../common/i18n'

const ShipsFilter = ({ categories, selected, onSelect, totalShips }) => {
  if (categories.length === 0) return null

  return (
    <div className="ships-filter" aria-label={getLiteral('ships:filter-label')}>
      <span className="ships-filter__label">
        {getLiteral('ships:filter-label')}
      </span>
      <div className="ships-filter__options">
        <button
          type="button"
          className="ships-filter__option"
          data-active={selected === 'all' ? true : undefined}
          aria-pressed={selected === 'all'}
          onClick={() => onSelect('all')}
        >
          {getLiteral('ships:filter-all')}
          <span className="ships-filter__count">{totalShips}</span>
        </button>
        {categories.map((category) => (
          <button
            key={category.value}
            type="button"
            className="ships-filter__option"
            data-active={selected === category.value ? true : undefined}
            aria-pressed={selected === category.value}
            onClick={() => onSelect(category.value)}
          >
            {category.value}
            <span className="ships-filter__count">{category.count}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ShipsFilter
