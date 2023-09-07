import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import { Spinner } from '@/components';
import i18n from '@/i18n';
import { MyRouterProvider, ThemeProvider } from '@/providers';

import 'react-toastify/dist/ReactToastify.css';

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
          <I18nextProvider i18n={i18n}>
            <ThemeProvider>
              <ToastContainer />
              <MyRouterProvider />
            </ThemeProvider>
          </I18nextProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};

const ErrorFallback = () => {
  return (
    <div
      className="flex h-screen w-screen flex-col items-center justify-center text-red-500"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      <button
        className="mt-4"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </button>
    </div>
  );
};
