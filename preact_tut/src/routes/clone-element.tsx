import { createFileRoute } from '@tanstack/react-router'
import { cloneElement, toChildArray, type ComponentChildren, type VNode } from 'preact'
import { useState } from 'preact/hooks'

export const Route = createFileRoute('/clone-element')({
  component: CloneElementPage,
})

type Variant = 'primary' | 'secondary' | 'danger'
type Size = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: Variant
  size?: Size
  children?: ComponentChildren
  onClick?: () => void
}

const sizeStyles: Record<Size, object> = {
  sm: { padding: '0.2rem 0.6rem', fontSize: '0.8rem' },
  md: { padding: '0.4rem 0.9rem', fontSize: '0.9rem' },
  lg: { padding: '0.6rem 1.2rem', fontSize: '1rem' },
}

const variantStyles: Record<Variant, object> = {
  primary:   { background: '#7c3aed', color: '#fff', border: 'none' },
  secondary: { background: '#e5e7eb', color: '#374151', border: 'none' },
  danger:    { background: '#dc2626', color: '#fff', border: 'none' },
}

function Button({ variant = 'primary', size = 'md', children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ borderRadius: 6, cursor: 'pointer', ...sizeStyles[size], ...variantStyles[variant] }}
    >
      {children}
    </button>
  )
}

type ButtonGroupProps = {
  children: ComponentChildren
  variant?: Variant
  size?: Size
}

function ButtonGroup({ children, variant, size }: ButtonGroupProps) {
  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {toChildArray(children).map(child =>
        cloneElement(child as VNode<ButtonProps>, { variant, size }),
      )}
    </div>
  )
}

function CloneElementPage() {
  const [variant, setVariant] = useState<Variant>('primary')
  const [size, setSize] = useState<Size>('md')

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>cloneElement</h1>
      <p style={{ color: '#6b7280' }}>
        <code>cloneElement(vnode, extraProps)</code> creates a shallow copy of a VNode with additional
        (or overridden) props merged in. The classic use case is a container that injects shared props
        into its children without requiring the caller to repeat them on every child.
      </p>

      <section>
        <h2>ButtonGroup — injecting shared props into children</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          The buttons don't declare <code>variant</code> or <code>size</code> — <code>ButtonGroup</code> clones
          them and injects those props. Change the controls to update all buttons at once.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
          <label>
            variant:{' '}
            <select value={variant} onChange={e => setVariant((e.target as HTMLSelectElement).value as Variant)}>
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="danger">danger</option>
            </select>
          </label>
          <label>
            size:{' '}
            <select value={size} onChange={e => setSize((e.target as HTMLSelectElement).value as Size)}>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
            </select>
          </label>
        </div>
        <ButtonGroup variant={variant} size={size}>
          <Button>Save</Button>
          <Button>Duplicate</Button>
          <Button>Delete</Button>
        </ButtonGroup>
      </section>

      <section>
        <h2>How ButtonGroup works</h2>
        <pre style={{ background: '#f5f3ff', padding: '0.75rem 1rem', borderRadius: 8, fontSize: '0.82rem', overflowX: 'auto' }}>{`function ButtonGroup({ children, variant, size }) {
  return (
    <div>
      {toChildArray(children).map(child =>
        cloneElement(child, { variant, size })
      )}
    </div>
  )
}`}</pre>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Props from <code>cloneElement</code> are shallow-merged with the original props.
          A child can still override them by passing its own value — the child wins over the group.
        </p>
      </section>

      <section>
        <h2>Preact: toChildArray vs React.Children</h2>
        <p style={{ color: '#6b7280', fontSize: '0.85rem' }}>
          Preact exposes <code>toChildArray</code> (from <code>preact</code>) as a lighter alternative
          to <code>React.Children.toArray</code> (available via <code>preact/compat</code>).
          Prefer <code>toChildArray</code> in Preact-native code.
        </p>
      </section>
    </div>
  )
}
