import clsx from 'clsx'

const Chip = ({ label, icon, customColor }) => {
  const classes = clsx('chip', {
    'custom-color': customColor,
  })

  // Check for spoken language indicators
  const isSpokenLanguage = label.toLowerCase().startsWith('in ') || 
                          ['english', 'spanish', 'portuguese', 'mandarin', 'french']
                            .some(lang => label.toLowerCase().includes(lang));

  return (
    <div
      className={classes}
      data-location={label.toLowerCase().includes('virtual') ? true : undefined}
      data-spoken-language={isSpokenLanguage ? true : undefined}
      style={{ backgroundColor: customColor }}
    >
      {icon ? <span className="chip__icon">{icon}</span> : null}
      <span className="chip__label">{label}</span>
    </div>
  )
}

export default Chip
