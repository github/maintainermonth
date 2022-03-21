import Link from 'next/link'
import IconArrowRight from '../../public/icons/arrow-right'

const ButtonLink = ({ href, isExternal, children }) => {
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
    >
      <a className="button-link">
        {children} <IconArrowRight />
      </a>
    </Link>
  )
}

export default ButtonLink
