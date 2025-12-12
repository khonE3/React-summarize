/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                         CONCEPT DETAIL PAGE                                   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Individual concept detail page with examples and live demo                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { useParams, Link, Navigate } from 'react-router-dom'
import { Card, Badge, CodeBlock, Button } from '../components'
import { concepts, categories } from '../data'

// Concept content data
const conceptContent: Record<string, {
  intro: string
  sections: Array<{
    title: string
    content: string
    code?: string
  }>
}> = {
  'jsx': {
    intro: 'JSX (JavaScript XML) เป็น syntax extension ที่ให้เราเขียน HTML-like code ใน JavaScript ได้ ทำให้การสร้าง UI ง่ายและอ่านง่ายขึ้น',
    sections: [
      {
        title: '📝 JSX คืออะไร?',
        content: 'JSX ไม่ใช่ HTML แต่เป็น syntax ที่จะถูก compile เป็น JavaScript โดย Babel หรือ TypeScript',
        code: `// JSX
const element = <h1>Hello, World!</h1>

// จะถูก compile เป็น
const element = React.createElement('h1', null, 'Hello, World!')

// JSX สามารถใส่ expressions ได้
const name = 'React'
const greeting = <h1>Hello, {name}!</h1>`
      },
      {
        title: '🎯 กฎสำคัญของ JSX',
        content: 'JSX มีกฎที่ต่างจาก HTML บางอย่าง',
        code: `// 1. ต้องมี root element เดียว
// ❌ Error
return (
  <h1>Title</h1>
  <p>Content</p>
)

// ✅ ถูกต้อง - ใช้ Fragment
return (
  <>
    <h1>Title</h1>
    <p>Content</p>
  </>
)

// 2. ใช้ camelCase สำหรับ attributes
<div className="container">  // ไม่ใช่ class
<label htmlFor="input">     // ไม่ใช่ for
<button onClick={handler}>  // ไม่ใช่ onclick

// 3. ต้องปิด tag ทุกตัว
<img src="..." alt="..." />  // self-closing
<br />
<input />`
      },
      {
        title: '🔄 Expressions ใน JSX',
        content: 'เราสามารถใส่ JavaScript expressions ใน JSX ได้ด้วย {}',
        code: `function Welcome({ user }) {
  const isLoggedIn = user !== null
  
  return (
    <div>
      {/* ใส่ตัวแปร */}
      <h1>Hello, {user?.name || 'Guest'}</h1>
      
      {/* ใส่ expressions */}
      <p>2 + 2 = {2 + 2}</p>
      
      {/* Conditional rendering */}
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please login</p>
      )}
      
      {/* Rendering lists */}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}`
      }
    ]
  },
  'components': {
    intro: 'Components เป็นหัวใจของ React ทำให้เราแบ่ง UI เป็นส่วนเล็กๆ ที่ reuse ได้',
    sections: [
      {
        title: '🧩 Function Components',
        content: 'วิธีที่นิยมที่สุดในการสร้าง components (แนะนำ)',
        code: `// Basic Function Component
function Welcome({ name }: { name: string }) {
  return <h1>Hello, {name}!</h1>
}

// Arrow Function Component
const Welcome = ({ name }: { name: string }) => {
  return <h1>Hello, {name}!</h1>
}

// Component with children
function Card({ title, children }: { 
  title: string
  children: React.ReactNode 
}) {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  )
}

// การใช้งาน
<Card title="Welcome">
  <p>This is card content</p>
</Card>`
      },
      {
        title: '📦 Component Composition',
        content: 'การประกอบ components เข้าด้วยกัน',
        code: `// Header Component
function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
      <UserMenu />
    </header>
  )
}

// App Component ประกอบจาก components ย่อย
function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
    </div>
  )
}

// การส่ง components เป็น props
function Layout({ 
  header, 
  sidebar, 
  children 
}: {
  header: React.ReactNode
  sidebar: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="layout">
      <div className="header">{header}</div>
      <div className="sidebar">{sidebar}</div>
      <main>{children}</main>
    </div>
  )
}`
      }
    ]
  },
  'props': {
    intro: 'Props (Properties) เป็นวิธีส่งข้อมูลจาก Parent Component ไปยัง Child Component',
    sections: [
      {
        title: '📦 การส่งและรับ Props',
        content: 'Props เป็น read-only ไม่สามารถแก้ไขได้ใน child component',
        code: `// กำหนด Type สำหรับ Props
interface UserCardProps {
  name: string
  email: string
  avatar?: string  // optional prop
  isAdmin?: boolean
}

// รับ Props ใน Component
function UserCard({ name, email, avatar, isAdmin = false }: UserCardProps) {
  return (
    <div className="user-card">
      {avatar && <img src={avatar} alt={name} />}
      <h3>{name}</h3>
      <p>{email}</p>
      {isAdmin && <span className="badge">Admin</span>}
    </div>
  )
}

// การใช้งาน
<UserCard 
  name="John Doe"
  email="john@example.com"
  avatar="/avatars/john.jpg"
  isAdmin
/>`
      },
      {
        title: '🔄 Spread Props',
        content: 'ส่ง object ทั้งหมดเป็น props',
        code: `const user = {
  name: 'John',
  email: 'john@example.com',
  avatar: '/avatars/john.jpg'
}

// Spread props
<UserCard {...user} />

// เหมือนกับ
<UserCard 
  name={user.name}
  email={user.email}
  avatar={user.avatar}
/>`
      },
      {
        title: '👶 Children Props',
        content: 'ส่ง content ระหว่าง opening และ closing tag',
        code: `interface CardProps {
  title: string
  children: React.ReactNode
}

function Card({ title, children }: CardProps) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  )
}

// การใช้งาน
<Card title="Welcome">
  <p>This is the card content</p>
  <button>Click me</button>
</Card>`
      }
    ]
  },
  'state': {
    intro: 'State เป็นข้อมูลภายใน Component ที่เมื่อเปลี่ยนแปลงจะทำให้ Component re-render',
    sections: [
      {
        title: '💾 useState Hook',
        content: 'Hook หลักสำหรับจัดการ state ใน Function Components',
        code: `import { useState } from 'react'

function Counter() {
  // Declare state
  const [count, setCount] = useState(0)
  
  // Update state
  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

// Functional Update (เมื่อค่าใหม่ขึ้นกับค่าเก่า)
const increment = () => setCount(prev => prev + 1)`
      },
      {
        title: '📦 State กับ Objects',
        content: 'การจัดการ state ที่เป็น object ต้องสร้าง object ใหม่เสมอ',
        code: `interface User {
  name: string
  email: string
  age: number
}

function UserForm() {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    age: 0
  })
  
  // ❌ ผิด - แก้ไข object โดยตรง
  // user.name = 'John'  // จะไม่ re-render
  
  // ✅ ถูก - สร้าง object ใหม่
  const updateName = (name: string) => {
    setUser({ ...user, name })
  }
  
  // ✅ หรือใช้ callback
  const updateEmail = (email: string) => {
    setUser(prev => ({ ...prev, email }))
  }
  
  return (
    <form>
      <input 
        value={user.name}
        onChange={e => updateName(e.target.value)}
      />
    </form>
  )
}`
      },
      {
        title: '📋 State กับ Arrays',
        content: 'การจัดการ arrays ใน state',
        code: `function TodoList() {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState('')
  
  // เพิ่ม item
  const addTodo = () => {
    setTodos([...todos, input])
    setInput('')
  }
  
  // ลบ item
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index))
  }
  
  // แก้ไข item
  const updateTodo = (index: number, newValue: string) => {
    setTodos(todos.map((todo, i) => 
      i === index ? newValue : todo
    ))
  }
  
  return (
    <div>
      <input 
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}`
      }
    ]
  },
  'usestate': {
    intro: 'useState เป็น Hook พื้นฐานที่สุดสำหรับจัดการ state ใน Function Components',
    sections: [
      {
        title: '📖 Syntax และการใช้งาน',
        content: 'useState รับ initial value และ return array [state, setState]',
        code: `const [state, setState] = useState(initialValue)

// ตัวอย่างต่างๆ
const [count, setCount] = useState(0)           // number
const [name, setName] = useState('')            // string
const [isOpen, setIsOpen] = useState(false)     // boolean
const [user, setUser] = useState<User | null>(null)  // object | null
const [items, setItems] = useState<Item[]>([])  // array`
      },
      {
        title: '🔄 วิธี Update State',
        content: 'มี 2 วิธีในการ update state',
        code: `// วิธีที่ 1: ส่งค่าใหม่โดยตรง
setCount(5)
setName('John')
setIsOpen(true)

// วิธีที่ 2: Functional Update (แนะนำเมื่อค่าใหม่ขึ้นกับค่าเก่า)
setCount(prev => prev + 1)
setItems(prev => [...prev, newItem])

// ⚠️ ข้อควรระวัง: setState เป็น async
console.log(count)  // ค่าเก่า
setCount(count + 1)
console.log(count)  // ยังเป็นค่าเก่า (ยังไม่ re-render)`
      },
      {
        title: '🚀 Lazy Initialization',
        content: 'เมื่อ initial value คำนวณยาก ใช้ function แทน',
        code: `// ❌ จะคำนวณทุกครั้งที่ re-render
const [data, setData] = useState(expensiveCalculation())

// ✅ คำนวณแค่ครั้งแรก
const [data, setData] = useState(() => expensiveCalculation())

// ตัวอย่าง: อ่านจาก localStorage
const [theme, setTheme] = useState(() => {
  const saved = localStorage.getItem('theme')
  return saved ? JSON.parse(saved) : 'light'
})`
      }
    ]
  },
  'useeffect': {
    intro: 'useEffect ใช้จัดการ Side Effects เช่น data fetching, subscriptions, DOM manipulation',
    sections: [
      {
        title: '📖 Syntax และ Dependencies',
        content: 'useEffect รับ 2 arguments: effect function และ dependencies array',
        code: `useEffect(() => {
  // Effect code
  
  return () => {
    // Cleanup code (optional)
  }
}, [dependencies])

// 1. ไม่มี dependencies - รันทุกครั้งที่ render
useEffect(() => {
  console.log('Rendered!')
})

// 2. Empty array - รันครั้งเดียวตอน mount
useEffect(() => {
  console.log('Mounted!')
}, [])

// 3. มี dependencies - รันเมื่อ dependencies เปลี่ยน
useEffect(() => {
  console.log('userId changed:', userId)
}, [userId])`
      },
      {
        title: '🔄 Data Fetching',
        content: 'การใช้ useEffect สำหรับ fetch ข้อมูล',
        code: `function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Reset state
    setLoading(true)
    setError(null)
    
    // Fetch data
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [userId])  // Re-fetch เมื่อ userId เปลี่ยน

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!user) return <p>User not found</p>
  
  return <div>{user.name}</div>
}`
      },
      {
        title: '🧹 Cleanup Function',
        content: 'ทำความสะอาด subscriptions, timers, event listeners',
        code: `// 1. Cleanup subscription
useEffect(() => {
  const subscription = api.subscribe(data => {
    setData(data)
  })
  
  return () => {
    subscription.unsubscribe()
  }
}, [])

// 2. Cleanup event listener
useEffect(() => {
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  
  window.addEventListener('resize', handleResize)
  
  return () => {
    window.removeEventListener('resize', handleResize)
  }
}, [])

// 3. Cleanup timer
useEffect(() => {
  const intervalId = setInterval(() => {
    setCount(c => c + 1)
  }, 1000)
  
  return () => clearInterval(intervalId)
}, [])`
      }
    ]
  },
  'events': {
    intro: 'React ใช้ SyntheticEvent ที่รวม events จาก browsers ต่างๆ ให้ทำงานเหมือนกัน',
    sections: [
      {
        title: '👆 Event Handling พื้นฐาน',
        content: 'การจัดการ events ใน React',
        code: `function Button() {
  // Event handler function
  const handleClick = () => {
    console.log('Button clicked!')
  }
  
  // Event handler with parameter
  const handleItemClick = (id: number) => {
    console.log('Item clicked:', id)
  }
  
  return (
    <div>
      {/* Basic event */}
      <button onClick={handleClick}>Click me</button>
      
      {/* Event with parameter */}
      <button onClick={() => handleItemClick(1)}>Item 1</button>
      
      {/* Inline handler */}
      <button onClick={() => console.log('Inline click')}>
        Inline
      </button>
    </div>
  )
}`
      },
      {
        title: '📝 Form Events',
        content: 'การจัดการ events ในฟอร์ม',
        code: `function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  // ป้องกัน page refresh
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  )
}`
      },
      {
        title: '⌨️ Keyboard Events',
        content: 'การจัดการ keyboard events',
        code: `function SearchInput() {
  const [query, setQuery] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log('Search for:', query)
    }
    if (e.key === 'Escape') {
      setQuery('')
    }
  }

  const handleKeyUp = (e: React.KeyboardEvent) => {
    console.log('Key released:', e.key)
  }

  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      placeholder="Press Enter to search, Escape to clear"
    />
  )
}`
      }
    ]
  }
}

// Default content for concepts without specific content
const defaultContent = {
  intro: 'เนื้อหาสำหรับ concept นี้กำลังอยู่ระหว่างการพัฒนา',
  sections: [
    {
      title: '🚧 Coming Soon',
      content: 'เนื้อหาจะถูกเพิ่มเร็วๆ นี้',
      code: `// Example code will be added soon
console.log('Stay tuned!')`
    }
  ]
}

export function ConceptDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  
  const concept = concepts.find(c => c.slug === slug)
  
  if (!concept) {
    return <Navigate to="/concepts" replace />
  }

  const content = conceptContent[slug!] || defaultContent
  const category = categories.find(c => c.id === concept.category)
  
  // Find prev/next concepts
  const currentIndex = concepts.findIndex(c => c.slug === slug)
  const prevConcept = currentIndex > 0 ? concepts[currentIndex - 1] : null
  const nextConcept = currentIndex < concepts.length - 1 ? concepts[currentIndex + 1] : null

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
          <Link to="/concepts" className="hover:text-blue-600">Concepts</Link>
          <span>/</span>
          <span>{category?.nameTh}</span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-5xl">{concept.icon}</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {concept.title}
            </h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {concept.titleTh}
            </p>
          </div>
        </div>
      </div>

      {/* Intro */}
      <Card>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {content.intro}
        </p>
      </Card>

      {/* Sections */}
      <div className="space-y-8">
        {content.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {section.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {section.content}
            </p>
            {section.code && (
              <CodeBlock 
                code={section.code} 
                language="tsx"
                title={`${concept.title} - Example ${index + 1}`}
              />
            )}
          </section>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
        {prevConcept ? (
          <Link to={`/concepts/${prevConcept.slug}`}>
            <Button variant="ghost">
              ← {prevConcept.title}
            </Button>
          </Link>
        ) : <div />}
        
        {nextConcept && (
          <Link to={`/concepts/${nextConcept.slug}`}>
            <Button variant="ghost">
              {nextConcept.title} →
            </Button>
          </Link>
        )}
      </div>
    </div>
  )
}
