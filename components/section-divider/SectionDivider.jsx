import IconArrowRight from '../../public/icons/arrow-right'

const SectionDivider = ({ title }) => {
  return (
    <div className="section-divider">
      <div className="section-divider__content">
        <h2 className="section-divider__title">{title}</h2>
        <IconArrowRight />
      </div>
    </div>
  )
}

export default SectionDivider
