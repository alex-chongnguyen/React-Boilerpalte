import { useState } from 'react'

import { useSearchParams } from 'react-router-dom'

import { handleChangeParams } from '@/utils'

import { useDebounce } from './use-debounce'

export const useSearchBox = (
  key: string | undefined = 'search-key',
): [string, (value?: string) => void] => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams()

  const [searchKey, setSearchKey] = useState('')

  const handleUpdateSearchParams = useDebounce((value: string) => {
    setSearchParams(
      (prev) => {
        prev.delete('page')
        prev.delete('size')
        return handleChangeParams(prev, key, value)
      },
      { replace: true },
    )
  }, 500)

  const handleSearch = (value: string = '') => {
    setSearchKey(value)
    handleUpdateSearchParams(value)
  }
  return [searchKey, handleSearch]
}
