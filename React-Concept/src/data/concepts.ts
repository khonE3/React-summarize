/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                           CONCEPTS DATA                                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  ข้อมูล React Concepts ทั้งหมดที่แสดงในเว็บไซต์                                  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import type { Concept, HookInfo } from '../types'

// ═══════════════════════════════════════════════════════════════════════════════
// REACT CONCEPTS LIST
// ═══════════════════════════════════════════════════════════════════════════════

export const concepts: Concept[] = [
  // FUNDAMENTALS
  {
    id: 'jsx',
    slug: 'jsx',
    title: 'JSX',
    titleTh: 'JSX - JavaScript XML',
    description: 'Syntax extension for writing UI in JavaScript',
    category: 'fundamentals',
    icon: '📝',
    order: 1
  },
  {
    id: 'components',
    slug: 'components',
    title: 'Components',
    titleTh: 'Components - ส่วนประกอบ',
    description: 'Building blocks of React applications',
    category: 'fundamentals',
    icon: '🧩',
    order: 2
  },
  {
    id: 'props',
    slug: 'props',
    title: 'Props',
    titleTh: 'Props - การส่งข้อมูล',
    description: 'Passing data from parent to child components',
    category: 'fundamentals',
    icon: '📦',
    order: 3
  },
  {
    id: 'state',
    slug: 'state',
    title: 'State',
    titleTh: 'State - สถานะข้อมูล',
    description: 'Managing component internal data',
    category: 'fundamentals',
    icon: '💾',
    order: 4
  },
  {
    id: 'events',
    slug: 'events',
    title: 'Events',
    titleTh: 'Events - การจัดการเหตุการณ์',
    description: 'Handling user interactions',
    category: 'fundamentals',
    icon: '👆',
    order: 5
  },
  {
    id: 'lists-keys',
    slug: 'lists-keys',
    title: 'Lists & Keys',
    titleTh: 'Lists & Keys - รายการและคีย์',
    description: 'Rendering lists and importance of keys',
    category: 'fundamentals',
    icon: '📋',
    order: 6
  },
  {
    id: 'forms',
    slug: 'forms',
    title: 'Forms',
    titleTh: 'Forms - ฟอร์ม',
    description: 'Handling form inputs and submissions',
    category: 'fundamentals',
    icon: '📝',
    order: 7
  },
  {
    id: 'conditional-rendering',
    slug: 'conditional-rendering',
    title: 'Conditional Rendering',
    titleTh: 'Conditional Rendering - การ render แบบมีเงื่อนไข',
    description: 'Rendering components based on conditions',
    category: 'fundamentals',
    icon: '❓',
    order: 8
  },

  // HOOKS
  {
    id: 'usestate',
    slug: 'usestate',
    title: 'useState',
    titleTh: 'useState Hook',
    description: 'State management in functional components',
    category: 'hooks',
    icon: '🪝',
    order: 9
  },
  {
    id: 'useeffect',
    slug: 'useeffect',
    title: 'useEffect',
    titleTh: 'useEffect Hook',
    description: 'Side effects in functional components',
    category: 'hooks',
    icon: '⚡',
    order: 10
  },
  {
    id: 'usecontext',
    slug: 'usecontext',
    title: 'useContext',
    titleTh: 'useContext Hook',
    description: 'Consuming context in functional components',
    category: 'hooks',
    icon: '🌐',
    order: 11
  },
  {
    id: 'usereducer',
    slug: 'usereducer',
    title: 'useReducer',
    titleTh: 'useReducer Hook',
    description: 'Complex state management',
    category: 'hooks',
    icon: '🔄',
    order: 12
  },
  {
    id: 'useref',
    slug: 'useref',
    title: 'useRef',
    titleTh: 'useRef Hook',
    description: 'Accessing DOM elements and mutable values',
    category: 'hooks',
    icon: '📌',
    order: 13
  },
  {
    id: 'usememo',
    slug: 'usememo',
    title: 'useMemo',
    titleTh: 'useMemo Hook',
    description: 'Memoizing expensive calculations',
    category: 'hooks',
    icon: '🧠',
    order: 14
  },
  {
    id: 'usecallback',
    slug: 'usecallback',
    title: 'useCallback',
    titleTh: 'useCallback Hook',
    description: 'Memoizing callback functions',
    category: 'hooks',
    icon: '📞',
    order: 15
  },
  {
    id: 'custom-hooks',
    slug: 'custom-hooks',
    title: 'Custom Hooks',
    titleTh: 'Custom Hooks - สร้าง Hook เอง',
    description: 'Creating reusable custom hooks',
    category: 'hooks',
    icon: '🔧',
    order: 16
  },

  // ADVANCED
  {
    id: 'context-api',
    slug: 'context-api',
    title: 'Context API',
    titleTh: 'Context API',
    description: 'Global state management without prop drilling',
    category: 'advanced',
    icon: '🌍',
    order: 17
  },
  {
    id: 'refs-dom',
    slug: 'refs-dom',
    title: 'Refs & DOM',
    titleTh: 'Refs & DOM',
    description: 'Direct DOM manipulation',
    category: 'advanced',
    icon: '🎯',
    order: 18
  },
  {
    id: 'portals',
    slug: 'portals',
    title: 'Portals',
    titleTh: 'Portals',
    description: 'Rendering children outside parent DOM',
    category: 'advanced',
    icon: '🚪',
    order: 19
  },
  {
    id: 'error-boundaries',
    slug: 'error-boundaries',
    title: 'Error Boundaries',
    titleTh: 'Error Boundaries - จัดการ Error',
    description: 'Catching and handling errors in React',
    category: 'advanced',
    icon: '🛡️',
    order: 20
  },
  {
    id: 'suspense',
    slug: 'suspense',
    title: 'Suspense',
    titleTh: 'Suspense - รอโหลด',
    description: 'Handling loading states declaratively',
    category: 'advanced',
    icon: '⏳',
    order: 21
  },
  {
    id: 'lazy-loading',
    slug: 'lazy-loading',
    title: 'Lazy Loading',
    titleTh: 'Lazy Loading - โหลดแบบ Lazy',
    description: 'Code splitting and lazy loading components',
    category: 'advanced',
    icon: '🦥',
    order: 22
  },

  // PATTERNS
  {
    id: 'hoc',
    slug: 'hoc',
    title: 'Higher-Order Components',
    titleTh: 'HOC - Higher-Order Components',
    description: 'Functions that take a component and return a new component',
    category: 'patterns',
    icon: '🏗️',
    order: 23
  },
  {
    id: 'render-props',
    slug: 'render-props',
    title: 'Render Props',
    titleTh: 'Render Props Pattern',
    description: 'Sharing code using a prop whose value is a function',
    category: 'patterns',
    icon: '🎨',
    order: 24
  },
  {
    id: 'compound-components',
    slug: 'compound-components',
    title: 'Compound Components',
    titleTh: 'Compound Components Pattern',
    description: 'Components that work together',
    category: 'patterns',
    icon: '🔗',
    order: 25
  },
  {
    id: 'controlled-uncontrolled',
    slug: 'controlled-uncontrolled',
    title: 'Controlled vs Uncontrolled',
    titleTh: 'Controlled vs Uncontrolled',
    description: 'Two ways to handle form data',
    category: 'patterns',
    icon: '🎛️',
    order: 26
  },

  // PERFORMANCE
  {
    id: 'react-memo',
    slug: 'react-memo',
    title: 'React.memo',
    titleTh: 'React.memo - Memoization',
    description: 'Preventing unnecessary re-renders',
    category: 'performance',
    icon: '⚡',
    order: 27
  },
  {
    id: 'virtualization',
    slug: 'virtualization',
    title: 'Virtualization',
    titleTh: 'Virtualization - Virtual List',
    description: 'Efficiently rendering large lists',
    category: 'performance',
    icon: '📜',
    order: 28
  },
  {
    id: 'code-splitting',
    slug: 'code-splitting',
    title: 'Code Splitting',
    titleTh: 'Code Splitting',
    description: 'Splitting code into smaller chunks',
    category: 'performance',
    icon: '✂️',
    order: 29
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// HOOKS INFORMATION
// ═══════════════════════════════════════════════════════════════════════════════

export const hooksInfo: HookInfo[] = [
  {
    name: 'useState',
    category: 'basic',
    description: 'Lets you add state to functional components',
    descriptionTh: 'เพิ่ม state ให้กับ functional component',
    syntax: 'const [state, setState] = useState(initialValue)',
    example: `const [count, setCount] = useState(0)
const [user, setUser] = useState<User | null>(null)

// Update
setCount(5)           // ค่าใหม่โดยตรง
setCount(c => c + 1)  // ใช้ค่าก่อนหน้า`,
    tips: [
      'ใช้ functional update เมื่อค่าใหม่ขึ้นอยู่กับค่าก่อนหน้า',
      'อย่าเปลี่ยน state โดยตรง ให้สร้างค่าใหม่เสมอ',
      'ถ้า initial value คำนวณยาก ใช้ lazy initialization'
    ]
  },
  {
    name: 'useEffect',
    category: 'basic',
    description: 'Performs side effects in functional components',
    descriptionTh: 'จัดการ side effects เช่น fetch data, subscriptions',
    syntax: 'useEffect(setup, dependencies?)',
    example: `// รันทุกครั้งที่ render
useEffect(() => { console.log('rendered') })

// รันครั้งเดียวตอน mount
useEffect(() => { fetchData() }, [])

// รันเมื่อ dependencies เปลี่ยน
useEffect(() => { fetchUser(id) }, [id])

// Cleanup
useEffect(() => {
  const sub = subscribe()
  return () => sub.unsubscribe()
}, [])`,
    tips: [
      'ใส่ dependencies ทั้งหมดที่ใช้ใน effect',
      'ใช้ cleanup function สำหรับ subscriptions',
      'แยก logic ที่ไม่เกี่ยวข้องเป็นหลาย useEffect'
    ]
  },
  {
    name: 'useContext',
    category: 'basic',
    description: 'Subscribes to a context',
    descriptionTh: 'เข้าถึงค่าจาก Context ได้โดยตรง',
    syntax: 'const value = useContext(SomeContext)',
    example: `const ThemeContext = createContext('light')

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  )
}

function Child() {
  const theme = useContext(ThemeContext) // 'dark'
  return <div className={theme}>...</div>
}`,
    tips: [
      'ใช้แทน Consumer component',
      'component จะ re-render เมื่อ context value เปลี่ยน',
      'ใช้ร่วมกับ useMemo เพื่อ optimize'
    ]
  },
  {
    name: 'useReducer',
    category: 'basic',
    description: 'Manages complex state logic',
    descriptionTh: 'จัดการ state ที่ซับซ้อนด้วย reducer pattern',
    syntax: 'const [state, dispatch] = useReducer(reducer, initialState)',
    example: `type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }

function reducer(state: number, action: Action) {
  switch (action.type) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return 0
  }
}

const [count, dispatch] = useReducer(reducer, 0)
dispatch({ type: 'increment' })`,
    tips: [
      'ดีกว่า useState เมื่อ state มี logic ซับซ้อน',
      'ทำให้ state transitions ชัดเจน',
      'สามารถส่ง dispatch ผ่าน context ได้'
    ]
  },
  {
    name: 'useRef',
    category: 'basic',
    description: 'Creates a mutable ref object',
    descriptionTh: 'สร้าง reference ที่ไม่ trigger re-render',
    syntax: 'const ref = useRef(initialValue)',
    example: `// DOM reference
const inputRef = useRef<HTMLInputElement>(null)
<input ref={inputRef} />
inputRef.current?.focus()

// Mutable value (ไม่ re-render)
const renderCount = useRef(0)
useEffect(() => {
  renderCount.current++
})`,
    tips: [
      'ใช้เข้าถึง DOM elements',
      'เก็บค่าที่ไม่ต้องการให้ re-render',
      'ค่า .current เปลี่ยนได้โดยไม่ trigger re-render'
    ]
  },
  {
    name: 'useMemo',
    category: 'additional',
    description: 'Memoizes a computed value',
    descriptionTh: 'จำค่าที่คำนวณเพื่อไม่ต้องคำนวณซ้ำ',
    syntax: 'const memoizedValue = useMemo(() => compute(a, b), [a, b])',
    example: `const expensiveValue = useMemo(() => {
  return items
    .filter(item => item.active)
    .sort((a, b) => b.price - a.price)
    .slice(0, 10)
}, [items])`,
    tips: [
      'ใช้เมื่อการคำนวณหนักมาก',
      'อย่าใช้มากเกินไป (มี overhead)',
      'ไม่รับประกัน cache ตลอดไป'
    ]
  },
  {
    name: 'useCallback',
    category: 'additional',
    description: 'Memoizes a callback function',
    descriptionTh: 'จำ function เพื่อไม่ต้องสร้างใหม่ทุกครั้ง',
    syntax: 'const memoizedFn = useCallback(() => {}, [deps])',
    example: `const handleClick = useCallback(() => {
  console.log('Clicked!', value)
}, [value])

// ส่งให้ child ที่ใช้ React.memo
<MemoizedChild onClick={handleClick} />`,
    tips: [
      'ใช้เมื่อส่ง callback ให้ memoized child',
      'ใช้ร่วมกับ React.memo',
      'อย่าใช้ทุกที่ (มี overhead)'
    ]
  },
  {
    name: 'useLayoutEffect',
    category: 'additional',
    description: 'Like useEffect but fires synchronously',
    descriptionTh: 'เหมือน useEffect แต่รัน sync ก่อน paint',
    syntax: 'useLayoutEffect(setup, dependencies?)',
    example: `useLayoutEffect(() => {
  // รัน synchronously หลัง DOM mutations
  // แต่ก่อน browser paint
  const rect = ref.current?.getBoundingClientRect()
  setPosition({ x: rect.x, y: rect.y })
}, [])`,
    tips: [
      'ใช้เมื่อต้องวัด DOM',
      'ใช้เมื่อต้องการป้องกัน visual flicker',
      'ส่วนใหญ่ useEffect เพียงพอแล้ว'
    ]
  },
  {
    name: 'useId',
    category: 'additional',
    description: 'Generates unique IDs',
    descriptionTh: 'สร้าง ID ที่ไม่ซ้ำกันสำหรับ accessibility',
    syntax: 'const id = useId()',
    example: `function FormField({ label }: { label: string }) {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} />
    </>
  )
}`,
    tips: [
      'ใช้สำหรับ accessibility attributes',
      'ไม่ควรใช้เป็น key ใน lists',
      'ID จะเหมือนกันทั้ง server และ client'
    ]
  },
  {
    name: 'useTransition',
    category: 'additional',
    description: 'Marks updates as non-blocking',
    descriptionTh: 'ทำให้ state update ไม่ block UI',
    syntax: 'const [isPending, startTransition] = useTransition()',
    example: `const [isPending, startTransition] = useTransition()
const [query, setQuery] = useState('')

function handleChange(e) {
  // update input ทันที
  setQuery(e.target.value)
  
  // update results แบบ non-blocking
  startTransition(() => {
    setSearchResults(search(e.target.value))
  })
}`,
    tips: [
      'ใช้สำหรับ heavy updates ที่ไม่เร่งด่วน',
      'ช่วยให้ UI responsive',
      'isPending ใช้แสดง loading indicator'
    ]
  },
  {
    name: 'useDeferredValue',
    category: 'additional',
    description: 'Defers updating a value',
    descriptionTh: 'เลื่อนการ update ค่าเพื่อให้ UI responsive',
    syntax: 'const deferredValue = useDeferredValue(value)',
    example: `function SearchResults({ query }) {
  // query เปลี่ยนเร็ว แต่ deferredQuery จะช้ากว่า
  const deferredQuery = useDeferredValue(query)
  
  // UI จะ responsive มากขึ้น
  return <ExpensiveList query={deferredQuery} />
}`,
    tips: [
      'คล้าย debounce แต่ไม่มี delay คงที่',
      'React จะเลื่อนให้อัตโนมัติ',
      'ใช้ร่วมกับ memo เพื่อ skip re-renders'
    ]
  }
]

// ═══════════════════════════════════════════════════════════════════════════════
// CATEGORIES
// ═══════════════════════════════════════════════════════════════════════════════

export const categories = [
  { id: 'fundamentals', name: 'Fundamentals', nameTh: 'พื้นฐาน', icon: '📚' },
  { id: 'hooks', name: 'Hooks', nameTh: 'Hooks', icon: '🪝' },
  { id: 'advanced', name: 'Advanced', nameTh: 'ขั้นสูง', icon: '🚀' },
  { id: 'patterns', name: 'Patterns', nameTh: 'รูปแบบ', icon: '🏗️' },
  { id: 'performance', name: 'Performance', nameTh: 'ประสิทธิภาพ', icon: '⚡' },
]

// ═══════════════════════════════════════════════════════════════════════════════
// NAVIGATION ITEMS
// ═══════════════════════════════════════════════════════════════════════════════

export const navigationItems: NavItem[] = [
  { path: '/', label: 'Home', labelTh: 'หน้าแรก' },
  { path: '/concepts', label: 'Concepts', labelTh: 'Concepts' },
  { path: '/hooks', label: 'Hooks', labelTh: 'Hooks' },
  { path: '/patterns', label: 'Patterns', labelTh: 'Patterns' },
  { path: '/playground', label: 'Playground', labelTh: 'ทดลองเขียน' },
]
