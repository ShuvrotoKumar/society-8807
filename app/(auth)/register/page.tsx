import Link from 'next/link'

export default function RegisterPage() {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
        <div className="bg-gradient-to-b from-[#1A1D21] to-[#121417] px-8 pb-8 pt-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A961]/15 ring-1 ring-[#C9A961]/25">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 text-[#C9A961]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
            </svg>
          </div>

          <h1 className="mt-5 font-serif text-3xl font-semibold tracking-wide text-[#C9A961]">Create Account</h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-neutral-400">
            Sign up to get started with your account
          </p>
        </div>

        <div className="px-8 pb-10 pt-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold tracking-wide text-neutral-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                placeholder="Enter your full name"
                className="mt-2 block h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
              />
            </div>

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

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className="block text-xs font-semibold tracking-wide text-neutral-700">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  className="mt-2 block h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-semibold tracking-wide text-neutral-700">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm password"
                  className="mt-2 block h-11 w-full rounded-md border border-neutral-300 bg-white px-3 text-sm text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
                />
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-neutral-600">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-neutral-300 text-[#C9A961] accent-[#C9A961]"
              />
              <span className="leading-6">
                I agree to the{' '}
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-700">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-md bg-[#C9A961] text-sm font-semibold text-black shadow-sm hover:bg-[#B99225] focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2"
            >
              Create Account
            </button>
          </form>

          <p className="mt-7 text-center text-sm text-neutral-600">
            Already have an account?{' '}
            <Link href="/login" className="font-semibold text-neutral-900 underline underline-offset-4 hover:text-neutral-700">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
