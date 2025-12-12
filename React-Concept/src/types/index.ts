/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                              TYPES & INTERFACES                               ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  รวม TypeScript Types และ Interfaces ทั้งหมดของโปรเจค                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

// ═══════════════════════════════════════════════════════════════════════════════
// CONCEPT TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface Concept {
  id: string
  slug: string
  title: string
  titleTh: string
  description: string
  category: ConceptCategory
  icon: string
  order: number
}

export type ConceptCategory = 
  | 'fundamentals'
  | 'hooks' 
  | 'advanced' 
  | 'patterns' 
  | 'state-management'
  | 'performance'

export interface ConceptSection {
  id: string
  title: string
  content: string
  code?: string
  language?: string
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAVIGATION TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface NavItem {
  path: string
  label: string
  labelTh: string
  icon?: string
  children?: NavItem[]
}

export interface SidebarItem {
  id: string
  title: string
  path: string
  icon?: string
  badge?: string
  children?: SidebarItem[]
}

// ═══════════════════════════════════════════════════════════════════════════════
// THEME TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type Theme = 'light' | 'dark' | 'system'

export interface ThemeStore {
  theme: Theme
  actualTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

// ═══════════════════════════════════════════════════════════════════════════════
// UI STORE TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface UIStore {
  sidebarOpen: boolean
  activeConcept: string | null
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setActiveConcept: (id: string | null) => void
}

// ═══════════════════════════════════════════════════════════════════════════════
// CODE EXAMPLE TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface CodeExample {
  id: string
  title: string
  description: string
  code: string
  language: 'tsx' | 'ts' | 'jsx' | 'js' | 'css' | 'json'
  runnable?: boolean
}

// ═══════════════════════════════════════════════════════════════════════════════
// COMPONENT PROP TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  icon?: React.ReactNode
}

export interface CardProps {
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
  hoverable?: boolean
}

export interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  title?: string
  copyable?: boolean
}

// ═══════════════════════════════════════════════════════════════════════════════
// HOOK TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export interface HookInfo {
  name: string
  category: 'basic' | 'additional' | 'custom'
  description: string
  descriptionTh: string
  syntax: string
  example: string
  tips?: string[]
}

// ═══════════════════════════════════════════════════════════════════════════════
// GENERIC UTILITY TYPES
// ═══════════════════════════════════════════════════════════════════════════════

export type Nullable<T> = T | null
export type Optional<T> = T | undefined

export interface AsyncState<T> {
  data: T | null
  loading: boolean
  error: string | null
}

export type Status = 'idle' | 'loading' | 'success' | 'error'
