import React, { useState, useEffect, useContext, useReducer, useRef, Suspense, lazy, createContext, FC } from 'react';

// Simple Stateless Component
const Simple = () => <div className="simple">Simple</div>;

// Component with Props
const WithProps = ({ message }: { message: string }) => <div className="with-props">{message}</div>;

// Component with State
const WithState = () => {
  const [count, setCount] = useState(0);
  return (
    <button className="with-state" onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

// Component with useEffect
const WithEffect = () => {
  const [data, setData] = useState<string | null>(null);
  useEffect(() => {
    setData('Loaded!');
  }, []);
  return <div className="with-effect">Effect: {data}</div>;
};

// Component with Conditional Rendering
const WithConditional = ({ show }: { show: boolean }) => (
  <div className="with-conditional">{show ? 'Visible' : 'Hidden'}</div>
);

// Component with List Rendering
const WithList = ({ items }: { items: string[] }) => (
  <ul className="with-list">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

// Component with Event Handling
const WithEvent = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('Clicked!');
  };
  return <button className="with-event" onClick={handleClick}>Click me</button>;
};

// Component with Styled JSX
const WithStyled = () => (
  <div className="with-styled">
    Styled
    <style jsx>{`
      .with-styled { color: #d16fff; }
    `}</style>
  </div>
);

// Context API Example
const ThemeContext = createContext('light');
const WithContext: FC = () => {
  const theme = useContext(ThemeContext);
  return <div className="with-context">Theme: {theme}</div>;
};

// useReducer Example
const reducer = (state: number, action: 'inc' | 'dec') => action === 'inc' ? state + 1 : state - 1;
const WithReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="with-reducer">
      State: {state}
      <button onClick={() => dispatch('inc')}>+</button>
      <button onClick={() => dispatch('dec')}>-</button>
    </div>
  );
};

// Custom Hook Example
function useCustom(initial: string) {
  const [value, setValue] = useState(initial);
  return { value, setValue };
}
const WithCustomHook = () => {
  const { value, setValue } = useCustom('custom');
  return <input value={value} onChange={e => setValue(e.target.value)} />;
};

// Forwarded Ref Example
const WithRef = React.forwardRef<HTMLInputElement>((props, ref) => (
  <input ref={ref} className="with-ref" {...props} />
));

// Error Boundary Example
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <div>Error!</div>;
    return this.props.children;
  }
}

// Suspense/Lazy Example
const LazyComponent = lazy(() => Promise.resolve({ default: () => <div>Lazy Loaded</div> }));
const WithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);

export default function ThemeTestExamples() {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <section>
    <div>
      <Simple />
      <WithProps message="Hello Props" />
      <WithState />
      <WithEffect />
      <WithConditional show={true} />
      <WithList items={["One", "Two", "Three"]} />
      <WithEvent />
      <WithStyled />
      <ThemeContext.Provider value="dark">
        <WithContext />
      </ThemeContext.Provider>
      <WithReducer />
      <WithCustomHook />
      <WithRef ref={ref} />
      <ErrorBoundary>
        <WithSuspense />
      </ErrorBoundary>
    </div>
        <form className="form">
          <input type="text" placeholder="Type here..." />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => ref.current?.focus()}>Focus Input</button>
        </form>
    </section>
  );
}
