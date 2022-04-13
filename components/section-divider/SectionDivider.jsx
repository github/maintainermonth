import IconArrowRight from '../../public/icons/arrow-right'

const SectionDivider = ({ title }) => {
  return (
    <div className="section-divider">
      <div className="section-divider__content">
        <h3 className="section-divider__title">{title}</h3>
        <IconArrowRight />
      </div>
    </div>
  )
}

export default SectionDivider
