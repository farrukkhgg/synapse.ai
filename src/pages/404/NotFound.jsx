import React from 'react'
import Cursor from '../../components/Cursor/Cursor'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-green-600">404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">Page Not Found</h1>
        <p className="mt-6 text-lg leading-7 text-gray-600">We couldn’t find the page you’re looking for. Please check the URL or return to the homepage.</p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <Link to="/">
            <button className="rounded-full bg-green-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
              Go Back Home
            </button>
          </Link>
          <Link to="/contact">
            <button className="text-sm font-semibold text-gray-600 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
              Contact Support <span aria-hidden="true">&rarr;</span>
            </button>
          </Link>
        </div>
      </div>
      <Cursor/>
    </main>
  )
}

export default NotFound
