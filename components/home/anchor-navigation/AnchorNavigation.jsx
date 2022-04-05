import { useEffect, useCallback, useState } from 'react'
import clsx from 'clsx'

import { useBackground } from '../../../contexts/BackgroundContext'
import { getLiteral } from '../../../common/i18n'

import { OBSERVER_OPTIONS, Y_OFFSET } from './constants'

const AnchorNavigation = ({ containerRef }) => {
  const [sections, setSections] = useState({})
  const [activeSection, setActiveSection] = useState('')

  const { setAnimationStep } = useBackground()

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
    const index = Object.keys(sections).indexOf(activeSection)
    setAnimationStep(index)
  }, [activeSection, sections, setAnimationStep])

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
  }, [containerRef, observerCallback])

  return (
    <div className="anchor-navigation">
      {Object.keys(sections).map((elementName, index) => (
        <button
          key={`anchor-${elementName}`}
          className={clsx('anchor-navigation__button', {
            active: activeSection === elementName,
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
