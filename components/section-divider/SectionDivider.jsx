import IconArrowRight from '../../public/icons/arrow-right'

const SectionDivider = ({ title }) => {
  return (
    <div className="section-divider">
      <div className="section-divider__content">
        <p className="section-divider__title">{title}</p>
        <IconArrowRight />
      </div>
    </div>
  )
}

export default SectionDivider
