'use client';

import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <Navbar
      fluid
      rounded
    >
      <Navbar.Brand
        href="/"
      >
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
          The Dean of Valuation
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="http://damodaran.com/" target="_blank" className="inline-flex items-center text-base font-bold tracking-wide text-gray-800 md:hover:text-blue-700">
          Damodaran's website<svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}
