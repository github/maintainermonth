import { useEffect, useCallback, useState } from 'react'
import clsx from 'clsx'

import { useBackground } from '../../../contexts/BackgroundContext'
import { getLiteral } from '../../../common/i18n'

import { Y_OFFSET } from './constants'
import getViewPercentage from './getViewPercentage'

const AnchorNavigation = ({ containerRef }) => {
  const [sections, setSections] = useState({})

  const { setAnimationStep, animationStep } = useBackground()

  const handleClick = useCallback(
    (target) => {
      const y =
        sections[target].getBoundingClientRect().top +
        window.pageYOffset +
        Y_OFFSET

      window.scrollTo({ top: y, behavior: 'smooth' })
    },
    [sections],
  )

  useEffect(() => {
    const sectionNodes = containerRef.current.childNodes
    const formattedSections = {}

    sectionNodes.forEach((section) => {
      formattedSections[section.classList[0]] = section
    })

    setSections(formattedSections)

    const handleScroll = () => {
      const percents = [...sectionNodes]
        .map((node) => getViewPercentage(node))
        .findIndex((percent) => percent >= 50)

      setAnimationStep(percents)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef])

  return (
    <div className="anchor-navigation">
      {Object.keys(sections).map((elementName, index) => (
        <button
          key={`anchor-${elementName}`}
          className={clsx('anchor-navigation__button', {
            active: animationStep === index,
          })}
          onClick={() => handleClick(elementName, index)}
        >
          <span className="anchor-navigation__text">
            {getLiteral(`anchor-nav:${elementName}`)}
          </span>
        </button>
      ))}
    </div>
  )
}

export default AnchorNavigation
