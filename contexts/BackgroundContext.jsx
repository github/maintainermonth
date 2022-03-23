import { createContext, useContext, useState } from 'react'

const CountContext = createContext()

const BackgroundProvider = ({ children }) => {
  const [animationStep, setAnimationStep] = useState(0)

  const value = { animationStep, setAnimationStep }
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

const useBackground = () => {
  const context = useContext(CountContext)
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider')
  }
  return context
}

export { BackgroundProvider, useBackground }
