import { Suspense } from 'react'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ErrorBoundary } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { I18nextProvider } from 'react-i18next'
import { ToastContainer } from 'react-toastify'

import { ErrorFallback } from '@/components/errors'
import { Spinner } from '@/components/ui/spinner'
import i18n from '@/i18n'
import { queryClient } from '@/libs'
import { MyRouterProvider, ThemeProvider } from '@/providers'

import 'react-toastify/dist/ReactToastify.css'

export const AppProvider = () => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />

            <I18nextProvider i18n={i18n}>
              <ThemeProvider>
                <ToastContainer />
                <MyRouterProvider />
              </ThemeProvider>
            </I18nextProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  )
}
