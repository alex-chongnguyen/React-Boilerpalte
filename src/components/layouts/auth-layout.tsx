import * as React from 'react'

import { Head } from '@/components/seo'

type Props = {
  children: React.ReactNode
  title: string
}

export const AuthLayout = ({ children, title }: Props) => {
  return (
    <>
      <Head title={title} />
      <>{children}</>
    </>
  )
}
