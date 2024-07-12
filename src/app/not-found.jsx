import Link from "next/link"
import React from 'react'

function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8 dotted">
    <div className="mx-auto max-w-md text-center">
        <h1 className="inline-flex text-5xl animate-spin hover:animate-none">😾</h1>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Oops, we couldn't find that page
      </h1>
      <p className="mt-4 text-muted-foreground">
        We're sorry, but the page you were looking for doesn't seem to exist. It's possible the page has been moved or
        deleted, or you may have followed an outdated link.
      </p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex mx-auto items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-white text-black hover:animate-pulse"
          prefetch={false}
        >
          Take me back home
        </Link>
      </div>
    </div>
  </div>
  )
}

export default NotFound