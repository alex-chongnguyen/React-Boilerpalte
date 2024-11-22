import { RefObject, useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('mouseup', handleClick)
    return () => {
      document.removeEventListener('mouseup', handleClick)
    }
  })
}
