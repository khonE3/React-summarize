# 📚 React-Summarize - สรุป React ครบทุก Concept

> **เว็บไซต์สรุปความรู้ React ทั้งหมดพร้อมตัวอย่างโค้ดที่ใช้งานได้จริง**

---

## 📖 สารบัญ (Table of Contents)

- [🏗️ โครงสร้างโปรเจค](#-โครงสร้างโปรเจค)
- [📁 อธิบายแต่ละโฟลเดอร์](#-อธิบายแต่ละโฟลเดอร์)
- [⚛️ React Concepts ทั้งหมด](#️-react-concepts-ทั้งหมด)
- [🪝 React Hooks ทั้งหมด](#-react-hooks-ทั้งหมด)
- [🔧 การติดตั้งและใช้งาน](#-การติดตั้งและใช้งาน)

---

## 🏗️ โครงสร้างโปรเจค

```
React-Concept/
│
├── 📁 public/                          # Static files ที่เสิร์ฟโดยตรง
│   ├── vite.svg                        # Favicon
│   ├── robots.txt                      # SEO robots file
│   └── manifest.json                   # PWA manifest
│
├── 📁 src/                             # ซอร์สโค้ดหลักทั้งหมด
│   │
│   ├── 📁 assets/                      # ไฟล์ Static (รูปภาพ, fonts, icons)
│   │   ├── 📁 images/                  # รูปภาพทั้งหมด
│   │   │   ├── logo.svg
│   │   │   └── hero-banner.png
│   │   ├── 📁 fonts/                   # Custom fonts
│   │   │   └── Inter.woff2
│   │   └── 📁 icons/                   # SVG icons
│   │       └── react-icon.svg
│   │
│   ├── 📁 components/                  # 🧩 Reusable UI Components
│   │   │
│   │   ├── 📁 ui/                      # Base UI Components (Atomic Design)
│   │   │   ├── Button.tsx              # ปุ่มทุกแบบ
│   │   │   ├── Input.tsx               # Input fields
│   │   │   ├── Card.tsx                # Card container
│   │   │   ├── Modal.tsx               # Modal/Dialog
│   │   │   ├── Dropdown.tsx            # Dropdown menu
│   │   │   ├── Tooltip.tsx             # Tooltip
│   │   │   ├── Badge.tsx               # Badge/Tag
│   │   │   ├── Avatar.tsx              # Avatar
│   │   │   ├── Spinner.tsx             # Loading spinner
│   │   │   ├── Skeleton.tsx            # Loading skeleton
│   │   │   ├── Toast.tsx               # Toast notifications
│   │   │   └── index.ts                # Export all UI components
│   │   │
│   │   ├── 📁 layout/                  # Layout Components
│   │   │   ├── Header.tsx              # Header/Navbar
│   │   │   ├── Footer.tsx              # Footer
│   │   │   ├── Sidebar.tsx             # Sidebar navigation
│   │   │   ├── Container.tsx           # Content container
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 forms/                   # Form Components
│   │   │   ├── TextField.tsx           # Text input with label
│   │   │   ├── SelectField.tsx         # Select dropdown
│   │   │   ├── CheckboxField.tsx       # Checkbox with label
│   │   │   ├── RadioGroup.tsx          # Radio button group
│   │   │   ├── FormError.tsx           # Error message
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 feedback/                # Feedback Components
│   │   │   ├── Alert.tsx               # Alert messages
│   │   │   ├── ProgressBar.tsx         # Progress bar
│   │   │   ├── EmptyState.tsx          # Empty state placeholder
│   │   │   ├── ErrorBoundary.tsx       # Error boundary wrapper
│   │   │   └── index.ts
│   │   │
│   │   └── 📁 common/                  # Common/Shared Components
│   │       ├── Logo.tsx                # Logo component
│   │       ├── ThemeToggle.tsx         # Dark/Light mode toggle
│   │       ├── ScrollToTop.tsx         # Scroll to top button
│   │       ├── Breadcrumb.tsx          # Breadcrumb navigation
│   │       ├── Pagination.tsx          # Pagination
│   │       ├── SearchBar.tsx           # Search input
│   │       ├── CodeBlock.tsx           # Code syntax highlighting
│   │       └── index.ts
│   │
│   ├── 📁 concepts/                    # 📖 React Concepts (แต่ละหัวข้อ)
│   │   │
│   │   ├── 📁 01-jsx/                  # JSX Syntax
│   │   │   ├── JSXBasics.tsx           # พื้นฐาน JSX
│   │   │   ├── JSXExpressions.tsx      # การใช้ expressions
│   │   │   ├── ConditionalRendering.tsx # การ render แบบมีเงื่อนไข
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 02-components/           # Components
│   │   │   ├── FunctionComponent.tsx   # Function Components
│   │   │   ├── ClassComponent.tsx      # Class Components (legacy)
│   │   │   ├── ComponentComposition.tsx # การประกอบ components
│   │   │   ├── ChildrenProps.tsx       # children props
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 03-props/                # Props
│   │   │   ├── PropsBasics.tsx         # พื้นฐาน Props
│   │   │   ├── PropsTypes.tsx          # PropTypes & TypeScript
│   │   │   ├── DefaultProps.tsx        # Default props
│   │   │   ├── SpreadProps.tsx         # Spread operator
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 04-state/                # State Management
│   │   │   ├── UseStateBasics.tsx      # useState พื้นฐาน
│   │   │   ├── StateWithObjects.tsx    # State กับ objects
│   │   │   ├── StateWithArrays.tsx     # State กับ arrays
│   │   │   ├── LiftingStateUp.tsx      # ยก state ขึ้น parent
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 05-events/               # Event Handling
│   │   │   ├── ClickEvents.tsx         # onClick events
│   │   │   ├── FormEvents.tsx          # Form events
│   │   │   ├── KeyboardEvents.tsx      # Keyboard events
│   │   │   ├── EventObject.tsx         # Event object
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 06-lists-keys/           # Lists & Keys
│   │   │   ├── RenderingLists.tsx      # การ render lists
│   │   │   ├── KeysImportance.tsx      # ความสำคัญของ keys
│   │   │   ├── FilteringLists.tsx      # การ filter lists
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 07-forms/                # Forms
│   │   │   ├── ControlledInputs.tsx    # Controlled inputs
│   │   │   ├── UncontrolledInputs.tsx  # Uncontrolled inputs
│   │   │   ├── FormValidation.tsx      # Form validation
│   │   │   ├── MultipleInputs.tsx      # Multiple inputs
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 08-lifecycle/            # Component Lifecycle
│   │   │   ├── MountingPhase.tsx       # Mounting phase
│   │   │   ├── UpdatingPhase.tsx       # Updating phase
│   │   │   ├── UnmountingPhase.tsx     # Unmounting phase
│   │   │   ├── UseEffectLifecycle.tsx  # useEffect as lifecycle
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 09-context/              # Context API
│   │   │   ├── CreateContext.tsx       # สร้าง Context
│   │   │   ├── ContextProvider.tsx     # Context Provider
│   │   │   ├── UseContextHook.tsx      # useContext hook
│   │   │   ├── MultipleContexts.tsx    # หลาย Contexts
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 10-refs/                 # Refs & DOM
│   │   │   ├── UseRefBasics.tsx        # useRef พื้นฐาน
│   │   │   ├── DOMManipulation.tsx     # จัดการ DOM
│   │   │   ├── ForwardRef.tsx          # forwardRef
│   │   │   ├── CallbackRef.tsx         # Callback refs
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 11-performance/          # Performance Optimization
│   │   │   ├── ReactMemo.tsx           # React.memo
│   │   │   ├── UseMemoHook.tsx         # useMemo
│   │   │   ├── UseCallbackHook.tsx     # useCallback
│   │   │   ├── CodeSplitting.tsx       # Code splitting
│   │   │   ├── LazyLoading.tsx         # Lazy loading
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 12-error-handling/       # Error Handling
│   │   │   ├── ErrorBoundaries.tsx     # Error Boundaries
│   │   │   ├── TryCatch.tsx            # Try-Catch in React
│   │   │   ├── ErrorFallback.tsx       # Error fallback UI
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 13-portals/              # React Portals
│   │   │   ├── PortalBasics.tsx        # Portal พื้นฐาน
│   │   │   ├── ModalPortal.tsx         # Modal with portal
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 14-fragments/            # React Fragments
│   │   │   ├── FragmentSyntax.tsx      # Fragment syntax
│   │   │   ├── KeyedFragments.tsx      # Keyed fragments
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 15-hoc/                  # Higher-Order Components
│   │   │   ├── HOCBasics.tsx           # HOC พื้นฐาน
│   │   │   ├── WithLoading.tsx         # withLoading HOC
│   │   │   ├── WithAuth.tsx            # withAuth HOC
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 16-render-props/         # Render Props Pattern
│   │   │   ├── RenderPropsBasics.tsx   # Render props พื้นฐาน
│   │   │   ├── MouseTracker.tsx        # Mouse tracker example
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 17-custom-hooks/         # Custom Hooks
│   │   │   ├── CreatingCustomHooks.tsx # สร้าง custom hooks
│   │   │   ├── UseLocalStorage.tsx     # useLocalStorage
│   │   │   ├── UseFetch.tsx            # useFetch
│   │   │   ├── UseDebounce.tsx         # useDebounce
│   │   │   └── index.ts
│   │   │
│   │   ├── 📁 18-suspense/             # React Suspense
│   │   │   ├── SuspenseBasics.tsx      # Suspense พื้นฐาน
│   │   │   ├── DataFetching.tsx        # Data fetching
│   │   │   └── index.ts
│   │   │
│   │   └── 📁 19-patterns/             # Advanced Patterns
│   │       ├── CompoundComponents.tsx  # Compound components
│   │       ├── ControlledVsUncontrolled.tsx
│   │       ├── ContainerPresenter.tsx  # Container/Presenter
│   │       └── index.ts
│   │
│   ├── 📁 hooks/                       # 🪝 Custom Hooks (Global)
│   │   ├── useToggle.ts                # Toggle boolean
│   │   ├── useLocalStorage.ts          # Local storage
│   │   ├── useDebounce.ts              # Debounce value
│   │   ├── useThrottle.ts              # Throttle value
│   │   ├── useFetch.ts                 # Data fetching
│   │   ├── useAsync.ts                 # Async operations
│   │   ├── useClickOutside.ts          # Click outside detection
│   │   ├── useKeyPress.ts              # Keyboard press
│   │   ├── useWindowSize.ts            # Window dimensions
│   │   ├── useScrollPosition.ts        # Scroll position
│   │   ├── useMediaQuery.ts            # Media query
│   │   ├── usePrevious.ts              # Previous value
│   │   ├── useInterval.ts              # setInterval
│   │   ├── useTimeout.ts               # setTimeout
│   │   ├── useCopyToClipboard.ts       # Copy to clipboard
│   │   ├── useOnlineStatus.ts          # Online/Offline status
│   │   ├── useGeolocation.ts           # Geolocation
│   │   ├── useHover.ts                 # Hover detection
│   │   ├── useForm.ts                  # Form handling
│   │   └── index.ts                    # Export all hooks
│   │
│   ├── 📁 pages/                       # 📄 Page Components (Routes)
│   │   ├── HomePage.tsx                # หน้าแรก
│   │   ├── ConceptsPage.tsx            # หน้ารวม concepts
│   │   ├── ConceptDetailPage.tsx       # หน้ารายละเอียด concept
│   │   ├── HooksPage.tsx               # หน้ารวม hooks
│   │   ├── PatternsPage.tsx            # หน้ารวม patterns
│   │   ├── PlaygroundPage.tsx          # หน้าทดลองเขียนโค้ด
│   │   ├── AboutPage.tsx               # หน้าเกี่ยวกับ
│   │   ├── NotFoundPage.tsx            # 404 page
│   │   └── index.ts
│   │
│   ├── 📁 layouts/                     # 🖼️ Layout Templates
│   │   ├── MainLayout.tsx              # Layout หลัก
│   │   ├── DocsLayout.tsx              # Layout สำหรับ documentation
│   │   ├── MinimalLayout.tsx           # Layout เรียบง่าย
│   │   └── index.ts
│   │
│   ├── 📁 routes/                      # 🛣️ Routing Configuration
│   │   ├── routes.tsx                  # Route definitions
│   │   ├── ProtectedRoute.tsx          # Protected route wrapper
│   │   ├── PublicRoute.tsx             # Public route wrapper
│   │   └── index.ts
│   │
│   ├── 📁 store/                       # 🏪 State Management (Zustand)
│   │   ├── useThemeStore.ts            # Theme state
│   │   ├── useUIStore.ts               # UI state (sidebar, modal)
│   │   ├── useUserStore.ts             # User state
│   │   ├── useConceptStore.ts          # Concepts state
│   │   └── index.ts
│   │
│   ├── 📁 services/                    # 🌐 API Services
│   │   ├── api.ts                      # Axios instance
│   │   ├── conceptsApi.ts              # Concepts API
│   │   ├── userApi.ts                  # User API
│   │   └── index.ts
│   │
│   ├── 📁 utils/                       # 🔧 Utility Functions
│   │   ├── cn.ts                       # classNames utility
│   │   ├── formatters.ts               # Date, number formatters
│   │   ├── validators.ts               # Validation functions
│   │   ├── storage.ts                  # localStorage helpers
│   │   ├── constants.ts                # App constants
│   │   └── index.ts
│   │
│   ├── 📁 types/                       # 📝 TypeScript Types
│   │   ├── index.ts                    # Main types export
│   │   ├── components.ts               # Component prop types
│   │   ├── api.ts                      # API response types
│   │   ├── store.ts                    # Store types
│   │   └── concepts.ts                 # Concept types
│   │
│   ├── 📁 styles/                      # 🎨 Global Styles
│   │   ├── globals.css                 # Global CSS
│   │   ├── variables.css               # CSS Variables
│   │   └── animations.css              # CSS Animations
│   │
│   ├── 📁 contexts/                    # 🌍 React Contexts
│   │   ├── ThemeContext.tsx            # Theme context
│   │   ├── AuthContext.tsx             # Auth context
│   │   ├── ToastContext.tsx            # Toast notifications context
│   │   └── index.ts
│   │
│   ├── 📁 data/                        # 📊 Static Data / Mock Data
│   │   ├── concepts.ts                 # Concepts data
│   │   ├── hooks.ts                    # Hooks data
│   │   ├── navigation.ts               # Navigation items
│   │   └── index.ts
│   │
│   ├── App.tsx                         # 🚀 Root Component
│   ├── App.css                         # App-specific styles
│   ├── main.tsx                        # Entry point
│   ├── index.css                       # Base styles
│   └── vite-env.d.ts                   # Vite types
│
├── 📄 .env                             # Environment variables (dev)
├── 📄 .env.production                  # Environment variables (prod)
├── 📄 .env.example                     # Example env file
├── 📄 .gitignore                       # Git ignore rules
├── 📄 .eslintrc.cjs                    # ESLint configuration
├── 📄 .prettierrc                      # Prettier configuration
├── 📄 tsconfig.json                    # TypeScript config
├── 📄 tsconfig.node.json               # TypeScript Node config
├── 📄 vite.config.ts                   # Vite configuration
├── 📄 tailwind.config.js               # Tailwind CSS config
├── 📄 postcss.config.js                # PostCSS config
├── 📄 package.json                     # Dependencies & scripts
├── 📄 package-lock.json                # Lock file
└── 📄 README.md                        # Project documentation
```

---

## 📁 อธิบายแต่ละโฟลเดอร์

### 1. **public/** - Static Files
ไฟล์ที่จะถูกเสิร์ฟโดยตรงโดยไม่ผ่าน bundler

```plaintext
✅ ใช้สำหรับ: favicon, robots.txt, manifest.json, static images
❌ ไม่ควรใส่: JavaScript, CSS ที่ต้อง process
```

### 2. **src/assets/** - รูปภาพและ Static Resources
```tsx
// การ import รูปภาพ
import logo from '@/assets/images/logo.svg'

// ใช้งาน
<img src={logo} alt="Logo" />
```

### 3. **src/components/** - Reusable Components
แบ่งตาม Atomic Design:

| โฟลเดอร์ | คำอธิบาย | ตัวอย่าง |
|---------|---------|---------|
| `ui/` | Base UI components | Button, Input, Card |
| `layout/` | Layout components | Header, Footer, Sidebar |
| `forms/` | Form-related components | TextField, SelectField |
| `feedback/` | User feedback components | Alert, Progress, Toast |
| `common/` | Shared/Common components | Logo, Breadcrumb |

### 4. **src/concepts/** - React Concepts แต่ละหัวข้อ
แต่ละโฟลเดอร์คือ 1 concept ที่สำคัญ:

```tsx
// ตัวอย่างโครงสร้าง concept
src/concepts/04-state/
├── UseStateBasics.tsx      // เนื้อหาหลัก
├── StateWithObjects.tsx    // ตัวอย่างเพิ่มเติม
├── StateWithArrays.tsx
├── LiftingStateUp.tsx
└── index.ts               // Export ทั้งหมด
```

### 5. **src/hooks/** - Custom Hooks
```tsx
// ตัวอย่าง Custom Hook
// hooks/useToggle.ts
import { useState, useCallback } from 'react'

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  
  const toggle = useCallback(() => setValue(v => !v), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  
  return { value, toggle, setTrue, setFalse }
}
```

### 6. **src/pages/** - Page Components
```tsx
// pages เชื่อมกับ routes
// routes/routes.tsx
const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/concepts', element: <ConceptsPage /> },
  { path: '/concepts/:slug', element: <ConceptDetailPage /> },
  { path: '*', element: <NotFoundPage /> },
]
```

### 7. **src/store/** - State Management (Zustand)
```tsx
// store/useThemeStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeStore {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'light',
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
    }),
    { name: 'theme-storage' }
  )
)
```

### 8. **src/contexts/** - React Context
```tsx
// contexts/ThemeContext.tsx
import { createContext, useContext, ReactNode } from 'react'

const ThemeContext = createContext<ThemeContextType | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  // ... logic
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

---

## ⚛️ React Concepts ทั้งหมด

### 🔰 พื้นฐาน (Fundamentals)

| # | Concept | คำอธิบาย |
|---|---------|---------|
| 1 | **JSX** | JavaScript XML - syntax สำหรับเขียน UI |
| 2 | **Components** | ส่วนประกอบย่อยของ UI ที่ reuse ได้ |
| 3 | **Props** | ข้อมูลที่ส่งจาก parent ไป child |
| 4 | **State** | ข้อมูลภายใน component ที่เปลี่ยนแปลงได้ |
| 5 | **Events** | การจัดการ events เช่น onClick, onChange |
| 6 | **Lists & Keys** | การ render รายการและความสำคัญของ key |
| 7 | **Forms** | การจัดการ forms (Controlled/Uncontrolled) |
| 8 | **Lifecycle** | วงจรชีวิตของ component |

### 🪝 React Hooks

| Hook | คำอธิบาย | ใช้เมื่อ |
|------|---------|---------|
| `useState` | จัดการ state ใน function component | เก็บข้อมูลที่เปลี่ยนแปลง |
| `useEffect` | Side effects (fetch data, subscriptions) | หลัง render, cleanup |
| `useContext` | เข้าถึง Context | ส่งข้อมูลข้าม component |
| `useReducer` | จัดการ state ที่ซับซ้อน | state มี logic เยอะ |
| `useCallback` | Memoize function | ป้องกัน re-create function |
| `useMemo` | Memoize value | คำนวณที่หนัก |
| `useRef` | Reference ค่าที่ไม่ re-render | DOM refs, values |
| `useLayoutEffect` | เหมือน useEffect แต่ sync | วัด DOM |
| `useImperativeHandle` | Customize ref | expose methods |
| `useDebugValue` | Debug custom hooks | DevTools |
| `useDeferredValue` | Defer value update | Performance |
| `useTransition` | Non-blocking updates | UX |
| `useId` | Generate unique IDs | Accessibility |
| `useSyncExternalStore` | Subscribe external store | Libraries |

### 🎯 Advanced Concepts

| Concept | คำอธิบาย |
|---------|---------|
| **Context API** | ส่งข้อมูลข้าม component tree โดยไม่ต้อง prop drilling |
| **Refs** | เข้าถึง DOM elements หรือเก็บค่าที่ไม่ trigger re-render |
| **Portals** | Render children นอก DOM hierarchy |
| **Fragments** | Group elements โดยไม่เพิ่ม DOM node |
| **Error Boundaries** | จัดการ errors ใน component tree |
| **Suspense** | Loading states สำหรับ lazy components |
| **Lazy Loading** | โหลด component เมื่อต้องการ |
| **Memoization** | ป้องกัน unnecessary re-renders |

### 🏗️ Design Patterns

| Pattern | คำอธิบาย |
|---------|---------|
| **Container/Presenter** | แยก logic ออกจาก UI |
| **Compound Components** | Components ที่ทำงานร่วมกัน |
| **Render Props** | ส่ง function เป็น prop เพื่อ share logic |
| **Higher-Order Components** | Function ที่รับ component และ return component ใหม่ |
| **Custom Hooks** | Extract และ reuse stateful logic |
| **Controlled vs Uncontrolled** | วิธีจัดการ form inputs |
| **Lifting State Up** | ย้าย state ไปยัง common ancestor |
| **Composition vs Inheritance** | ใช้ composition แทน inheritance |

---

## 🪝 React Hooks ทั้งหมด

### 📊 สรุป Built-in Hooks

```tsx
// ═══════════════════════════════════════════════════════════════
// 1. useState - จัดการ State
// ═══════════════════════════════════════════════════════════════
const [count, setCount] = useState(0)
const [user, setUser] = useState<User | null>(null)
const [items, setItems] = useState<string[]>([])

// Update state
setCount(5)                    // ค่าใหม่โดยตรง
setCount(prev => prev + 1)     // ใช้ค่าก่อนหน้า

// ═══════════════════════════════════════════════════════════════
// 2. useEffect - Side Effects
// ═══════════════════════════════════════════════════════════════
// รันทุกครั้งที่ render
useEffect(() => {
  console.log('Rendered!')
})

// รันครั้งเดียวตอน mount
useEffect(() => {
  fetchData()
}, [])

// รันเมื่อ dependencies เปลี่ยน
useEffect(() => {
  fetchUser(userId)
}, [userId])

// Cleanup function
useEffect(() => {
  const subscription = subscribe()
  return () => subscription.unsubscribe()  // cleanup
}, [])

// ═══════════════════════════════════════════════════════════════
// 3. useContext - เข้าถึง Context
// ═══════════════════════════════════════════════════════════════
const ThemeContext = createContext('light')

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  )
}

function Child() {
  const theme = useContext(ThemeContext)  // 'dark'
}

// ═══════════════════════════════════════════════════════════════
// 4. useReducer - Complex State
// ═══════════════════════════════════════════════════════════════
type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset'; payload: number }

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return action.payload
    default: return state
  }
}

const [count, dispatch] = useReducer(reducer, 0)
dispatch({ type: 'increment' })

// ═══════════════════════════════════════════════════════════════
// 5. useCallback - Memoize Functions
// ═══════════════════════════════════════════════════════════════
const handleClick = useCallback(() => {
  console.log('Clicked!', value)
}, [value])  // สร้างใหม่เมื่อ value เปลี่ยน

// ═══════════════════════════════════════════════════════════════
// 6. useMemo - Memoize Values
// ═══════════════════════════════════════════════════════════════
const expensiveValue = useMemo(() => {
  return items.filter(item => item.price > 100)
              .sort((a, b) => b.price - a.price)
}, [items])

// ═══════════════════════════════════════════════════════════════
// 7. useRef - References
// ═══════════════════════════════════════════════════════════════
// DOM reference
const inputRef = useRef<HTMLInputElement>(null)
inputRef.current?.focus()

// Mutable value (ไม่ trigger re-render)
const renderCount = useRef(0)
renderCount.current++

// ═══════════════════════════════════════════════════════════════
// 8. useLayoutEffect - Synchronous Effect
// ═══════════════════════════════════════════════════════════════
useLayoutEffect(() => {
  // รัน synchronously หลัง DOM mutations
  // ก่อน browser paint
  const rect = ref.current?.getBoundingClientRect()
}, [])

// ═══════════════════════════════════════════════════════════════
// 9. useImperativeHandle - Customize Ref
// ═══════════════════════════════════════════════════════════════
const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)
  
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => { if (inputRef.current) inputRef.current.value = '' }
  }))
  
  return <input ref={inputRef} />
})

// ═══════════════════════════════════════════════════════════════
// 10. useId - Generate Unique IDs
// ═══════════════════════════════════════════════════════════════
function FormField() {
  const id = useId()
  return (
    <>
      <label htmlFor={id}>Name:</label>
      <input id={id} />
    </>
  )
}

// ═══════════════════════════════════════════════════════════════
// 11. useTransition - Non-blocking Updates
// ═══════════════════════════════════════════════════════════════
const [isPending, startTransition] = useTransition()

function handleSearch(query: string) {
  startTransition(() => {
    // การ update นี้จะไม่ block UI
    setSearchResults(filterResults(query))
  })
}

// ═══════════════════════════════════════════════════════════════
// 12. useDeferredValue - Defer Value Updates
// ═══════════════════════════════════════════════════════════════
function SearchResults({ query }: { query: string }) {
  const deferredQuery = useDeferredValue(query)
  
  // UI ยังตอบสนองได้ขณะที่ค้นหา
  return <Results query={deferredQuery} />
}
```

---

## 🔧 การติดตั้งและใช้งาน

### ติดตั้ง Dependencies

```bash
# เข้าโฟลเดอร์โปรเจค
cd React-Concept

# ติดตั้ง dependencies
npm install

# รัน development server
npm run dev
```

### Scripts ที่ใช้ได้

```bash
npm run dev       # รัน development server
npm run build     # Build production
npm run preview   # Preview production build
npm run lint      # ตรวจสอบโค้ด
```

### Environment Variables

```env
# .env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=React Concept
```

```tsx
// ใช้งาน
const apiUrl = import.meta.env.VITE_API_URL
```

---

## 📚 แหล่งเรียนรู้เพิ่มเติม

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [React Router](https://reactrouter.com/)

---

## 🤝 Contributing

Feel free to contribute to this project!

## 📄 License

MIT License - ใช้ได้อย่างอิสระ

