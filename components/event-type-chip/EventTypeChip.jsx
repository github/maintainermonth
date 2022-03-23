import Chip from '../chip/Chip'

import TYPES from './types'

const EventTypeChip = ({ type }) => {
  const typeProps = TYPES[type]

  if (!typeProps) {
    return <Chip label={type} />
  }

  return (
    <Chip
      label={typeProps.label}
      customColor={typeProps.color}
      icon={typeProps.icon}
    />
  )
}

export default EventTypeChip
