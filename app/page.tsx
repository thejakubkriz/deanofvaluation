import DefaultNavbar from '../components/navigation';
import SearchForm from '../components/searchForm'
import Footer from '../components/footer'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {

  return (
    <>
    <Analytics />
    <DefaultNavbar />
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <div className="flex justify-center">
            <div className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-blue-700"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
              Quick and easy access to Damodaran&apos;s datasets
            </h2>
            <p className="text-base text-gray-700 md:text-lg text-center">
              A simplified gateway to access Professor Aswath Damodaran&apos;s datasets, saving you time to fast-track your valuations and corporate finance analysis.
            </p>
          </div>
          <div className="p-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 text-center" role="alert">
            Explore Professor Damodaran&apos;s official website to find usage guidelines and insights into the data structure.{' '}<a href="https://pages.stern.nyu.edu/~adamodar/New_Home_Page/data.html" target="_blank" className="font-semibold">
              <span className="" aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <SearchForm />
    <Footer />
    </>
  )
}
