import { Suspense } from 'react';

import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { ToastContainer } from 'react-toastify';

import { Spinner } from '@/components';
import i18n from '@/i18n';
import { MyRouterProvider } from '@/providers/router.provider';

import 'react-toastify/dist/ReactToastify.css';

const ErrorFallback = () => {
  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
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

export const AppProvider = () => {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <I18nextProvider i18n={i18n}>
            <ToastContainer />
            <MyRouterProvider />
          </I18nextProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
