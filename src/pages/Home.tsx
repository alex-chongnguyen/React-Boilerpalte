import { useContext } from 'react';

import { ThemeContext } from '@/providers';

export function Home() {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <div className="text-right">
        <input
          id="toggle-theme"
          type="checkbox"
          onChange={theme.toggleTheme}
        />
        <label htmlFor="toggle-theme">Toggle Theme</label>
      </div>

      <section className="bg-blueGray-50  relative">
        <div className="min-h-screen-75 relative flex content-center items-center justify-center pb-32 pt-16">
          <div
            className="absolute top-0 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="absolute h-full w-full bg-black opacity-75"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
                <div className="pr-12">
                  <h1 className="text-5xl font-semibold text-white">Your story starts with us.</h1>
                  <p className="text-blueGray-200 mt-4 text-lg">
                    This is a simple example of a Landing Page you can build using Notus JS. It
                    features multiple CSS components based on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="h-70-px pointer-events-none absolute bottom-0 left-0 right-0 top-auto w-full overflow-hidden"
            style={{ transform: 'translateZ(0px)' }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <section className="bg-blueGray-200 -mt-24 pb-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Awarded Agency</h6>
                    <p className="text-blueGray-500 mb-4 mt-2">
                      Divide details about your product or agency work into parts. A paragraph
                      describing a feature will be enough.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 text-center md:w-4/12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="bg-lightBlue-400 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Free Revisions</h6>
                    <p className="text-blueGray-500 mb-4 mt-2">
                      Keep you user engaged by providing meaningful information. Remember that by
                      this time, the user is curious.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 pt-6 text-center md:w-4/12">
                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                  <div className="flex-auto px-4 py-5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Verified Company</h6>
                    <p className="text-blueGray-500 mb-4 mt-2">
                      Write a few lines about each one. A paragraph describing a feature will be
                      enough. Keep you user engaged!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <footer className="relative  mt-1 pb-6 pt-8">
              <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                  <div className="mx-auto w-full px-4 text-center md:w-6/12">
                    <div className="text-blueGray-500 py-1 text-sm font-semibold">
                      Made with{' '}
                      <a
                        href="https://www.creative-tim.com/product/notus-js"
                        className="text-blueGray-500 hover:text-gray-800"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Notus JS
                      </a>{' '}
                      by{' '}
                      <a
                        href="https://www.creative-tim.com"
                        className="text-blueGray-500 hover:text-blueGray-800"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {' '}
                        Creative Tim
                      </a>
                      .
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </section>
    </div>
  );
}
