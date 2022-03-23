import clsx from 'clsx'

const Chip = ({ label, icon, customColor }) => {
  const classes = clsx('chip', { 'custom-color': customColor })

  return (
    <div className={classes} style={{ backgroundColor: customColor }}>
      {icon ? <span className="chip__icon">{icon}</span> : null}
      <span className="chip__label">{label}</span>
    </div>
  )
}

export default Chip
