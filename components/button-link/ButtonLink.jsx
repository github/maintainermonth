import Link from 'next/link'
import IconArrowRight from '../../public/icons/arrow-right'
import clsx from 'clsx'

const ButtonLink = ({ href, isExternal, children, className }) => {
  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={clsx('button-link', className)}
    >
      {children} <IconArrowRight />
    </Link>
  )
}

export default ButtonLink
