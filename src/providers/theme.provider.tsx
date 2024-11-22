import { createContext, ReactNode, useEffect, useState } from 'react'

type Props = {
  children: ReactNode
}
type ThemeContextType = {
  isDarkTheme: boolean
  toggleTheme: () => void
}

const initialThemeContext: ThemeContextType = {
  isDarkTheme: false,
  toggleTheme: () => {},
}
export const ThemeContext = createContext(initialThemeContext)

export function ThemeProvider({ children }: Props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  function toggleTheme() {
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
