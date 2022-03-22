import { useEffect, useCallback, useState } from 'react'
import clsx from 'clsx'

import { getLiteral } from '../../../common/i18n'

import { OBSERVER_OPTIONS, Y_OFFSET } from './constants'

const AnchorNavigation = ({ containerRef }) => {
  const [sections, setSections] = useState({})
  const [activeSection, setActiveSection] = useState('')

  const observerCallback = useCallback((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        setActiveSection(entry.target.classList[0])
      }
    })
  }, [])

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
    const observer = new IntersectionObserver(
      observerCallback,
      OBSERVER_OPTIONS,
    )

    const formattedSections = {}

    sectionNodes.forEach((section) => {
      observer.observe(section)
      formattedSections[section.classList[0]] = section
    })

    setSections(formattedSections)

    return () => {
      sectionNodes.forEach((section) => {
        observer.unobserve(section)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef])

  return (
    <div className="anchor-navigation">
      {Object.keys(sections).map((elementName) => (
        <button
          key={`anchor-${elementName}`}
          className={clsx('anchor-navigation__button', {
            active: activeSection === elementName,
          })}
          onClick={() => handleClick(elementName)}
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
