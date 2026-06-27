import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/react-compiler')({
  component: ReactCompilerPage,
})

function isPrime(n: number): boolean {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false
  return true
}

// A module-level counter so we can *see* how often the expensive loop actually
// runs. The React Compiler memoizes the computation below automatically — even
// though there is no useMemo — so unrelated re-renders skip the loop and this
// number stays put.
let computeRuns = 0

function AutoMemoized() {
  const [limit, setLimit] = useState(20000)
  const [theme, setTheme] = useState(false)

  // Note: NO useMemo. With the compiler enabled, this is memoized on `limit`.
  // Toggling the theme re-renders the component but does not re-run this loop.
  computeRuns++
  const primes: number[] = []
  for (let i = 2; i <= limit; i++) if (isPrime(i)) primes.push(i)

  return (
    <div className="card">
      <h2>Automatic memoization</h2>
      <p>
        This component computes primes inline with <strong>no</strong>{' '}
        <code>useMemo</code>. The compiler still caches the result keyed on{' '}
        <code>limit</code>, so toggling the theme (an unrelated state update)
        does not re-run the loop.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <input
          type="range"
          min={1000}
          max={100000}
          step={1000}
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          style={{ flex: 1, cursor: 'pointer' }}
        />
        <span style={{ minWidth: 80 }}>{limit.toLocaleString()}</span>
      </div>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button className="secondary" onClick={() => setTheme((t) => !t)}>
          Toggle theme (unrelated) — {theme ? '🌙' : '☀️'}
        </button>
      </div>
      <p>
        Found <span className="highlight">{primes.length}</span> primes. Last:{' '}
        <code>{primes[primes.length - 1]}</code>
      </p>
      <p className="muted">
        Loop has run <span className="highlight">{computeRuns}</span> time(s)
        total. Toggle the theme repeatedly — this count stays flat; move the
        slider and it ticks up.
      </p>
    </div>
  )
}

// The "use no memo" directive opts a single function out of the compiler. Use
// it as an escape hatch while debugging or for code that breaks the Rules of
// React. Here the loop re-runs on every render, including the unrelated toggle.
let optedOutRuns = 0

function OptedOut() {
  'use no memo'
  const [limit, setLimit] = useState(20000)
  const [theme, setTheme] = useState(false)

  optedOutRuns++
  const primes: number[] = []
  for (let i = 2; i <= limit; i++) if (isPrime(i)) primes.push(i)

  return (
    <div className="card">
      <h2>
        Opting out: <code>"use no memo"</code>
      </h2>
      <p>
        The directive on the first line of this component tells the compiler to
        leave it alone. The loop now re-runs on <em>every</em> render, so
        toggling the theme also bumps the counter — the pre-compiler behavior.
      </p>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <input
          type="range"
          min={1000}
          max={100000}
          step={1000}
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
          style={{ flex: 1, cursor: 'pointer' }}
        />
        <span style={{ minWidth: 80 }}>{limit.toLocaleString()}</span>
      </div>
      <div className="btn-row" style={{ marginBottom: '1rem' }}>
        <button className="secondary" onClick={() => setTheme((t) => !t)}>
          Toggle theme (unrelated) — {theme ? '🌙' : '☀️'}
        </button>
      </div>
      <p className="muted">
        Loop has run <span className="highlight">{optedOutRuns}</span> time(s)
        total. Here the count climbs on theme toggles too.
      </p>
    </div>
  )
}

function ReactCompilerPage() {
  return (
    <>
      <h1>React Compiler</h1>
      <p>
        The React Compiler is a build-time tool that automatically memoizes your
        components and hooks — the work you used to do by hand with{' '}
        <code>useMemo</code>, <code>useCallback</code>, and{' '}
        <code>React.memo</code>. You write plain, idiomatic React; the compiler
        inserts fine-grained memoization for you.
      </p>
      <p>
        It is enabled here via <code>babel-plugin-react-compiler</code> in{' '}
        <code>vite.config.ts</code> (it must run first in the Babel pipeline).
        The compiler relies on your code following the{' '}
        <a
          href="https://react.dev/reference/rules"
          target="_blank"
          rel="noreferrer"
        >
          Rules of React
        </a>{' '}
        — pure render functions, no mutation of props/state during render. Code
        that breaks the rules is skipped (not broken), and the bundled ESLint
        rules flag those spots.
      </p>

      <AutoMemoized />
      <OptedOut />

      <div className="card">
        <h2>How to verify it ran</h2>
        <ul>
          <li>
            In React DevTools, compiled components show a{' '}
            <strong>"Memo ✨"</strong> badge next to their name.
          </li>
          <li>
            Paste a component into the{' '}
            <a
              href="https://playground.react.dev"
              target="_blank"
              rel="noreferrer"
            >
              compiler playground
            </a>{' '}
            to see the generated, memoized output.
          </li>
          <li>
            Run <code>npm run lint</code> — the React Compiler ESLint rules
            (shipped in <code>eslint-plugin-react-hooks</code>) report any
            component the compiler had to bail out on.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>What this means for the other demos</h2>
        <p>
          With the compiler on, the manual <code>useMemo</code> /{' '}
          <code>useCallback</code> in the other pages are mostly redundant — the
          compiler would have memoized those values anyway. They are kept as
          teaching examples of what the compiler does under the hood. New code in
          this project generally doesn't need them.
        </p>
      </div>
    </>
  )
}