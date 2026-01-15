import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
        <div className="bg-gradient-to-b from-[#1A1D21] to-[#121417] px-8 pb-8 pt-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/15 ring-1 ring-[#D4AF37]/25">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-[#D4AF37]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 3h4a2 2 0 0 1 2 2v4" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l11-11" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10v11a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
          </div>

          <h1 className="mt-5 font-serif text-3xl font-semibold tracking-wide text-[#D4AF37]">Welcome back</h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-400">
            Sign in to access your account
          </p>
        </div>

        <div className="px-8 pb-10 pt-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold tracking-wide text-neutral-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="Enter your email"
                className="mt-2 block h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xs font-semibold tracking-wide text-neutral-700">
                  Password
                </label>
                <a href="#" className="text-xs font-semibold text-neutral-600 hover:text-neutral-900">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="mt-2 block h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-neutral-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-neutral-300 text-[#D4AF37] accent-[#D4AF37]"
              />
              Remember me
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#D4AF37] text-sm font-semibold text-black shadow-sm hover:bg-[#B99225] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-neutral-600">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
