import { FormEvent } from 'react';

import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ROUTER } from '@/config';
import { ELanguageResources } from '@/i18n';

function LoginForm() {
  const { t } = useTranslation([ELanguageResources.login]);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const notify = () => toast(t('loginSuccess', { ns: ELanguageResources.toastNoti }));

    navigate(ROUTER.index);
    notify();
  }

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-300">
        <div className="flex w-full max-w-md flex-col rounded-md bg-white px-4 py-8 shadow-md sm:px-6 md:px-8 lg:px-10">
          <div className="self-center text-xl font-medium uppercase text-gray-800 sm:text-2xl">
            {t('loginToAccount')}
          </div>
          <button className="relative mt-6 rounded-md border bg-gray-100 py-2 text-sm text-gray-800 hover:bg-gray-200">
            <span className="absolute left-0 top-0 flex h-full w-10 items-center justify-center text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span> {t('loginWithFb')}</span>
          </button>
          <div className="relative mt-10 h-px bg-gray-300">
            <div className="absolute left-0 top-0 -mt-2 flex w-full justify-center">
              <span className="bg-white px-4 text-xs uppercase text-gray-500">
                {t('or', { ns: ELanguageResources.common })} {t('loginWithEmail')}
              </span>
            </div>
          </div>
          <div className="mt-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-6 flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
                >
                  {t('emailAddress', { ns: ELanguageResources.common })}:
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none sm:text-base"
                    placeholder="E-Mail Address"
                    required
                  />
                </div>
              </div>
              <div className="mb-6 flex flex-col">
                <label
                  htmlFor="password"
                  className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
                >
                  {t('password', { ns: ELanguageResources.common })}:
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-0 inline-flex h-full w-10 items-center justify-center text-gray-400">
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </span>
                  </div>

                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="w-full rounded-lg border border-gray-400 py-2 pl-10 pr-4 text-sm placeholder-gray-500 focus:border-blue-400 focus:outline-none sm:text-base"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="-mt-4 mb-6 flex items-center">
                <div className="ml-auto flex">
                  <Link
                    to="#"
                    className="inline-flex text-xs text-blue-500 hover:text-blue-700 sm:text-sm"
                  >
                    {t('forgotYourPass')}
                  </Link>
                </div>
              </div>

              <div className="flex w-full">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded bg-blue-600 py-2 text-sm text-white transition duration-150 ease-in hover:bg-blue-700 focus:outline-none sm:text-base"
                >
                  <span className="mr-2 uppercase">Login</span>
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>
          <div className="mt-6 flex items-center justify-center">
            <Link
              to="#"
              target="_blank"
              className="inline-flex items-center text-center text-xs font-bold text-blue-500 hover:text-blue-700"
            >
              <span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </span>
              <span className="ml-2">{t('youDontHaveAcc')}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export { LoginForm };
