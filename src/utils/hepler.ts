import cx, { ArgumentArray } from 'classnames'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ArgumentArray) {
  return twMerge(cx(inputs))
}

export const handleChangeParams = (prev: URLSearchParams, name: string, value?: string) => {
  if (!value) {
    prev.delete(name)
  } else {
    prev.set(name, value)
  }

  return prev
}
