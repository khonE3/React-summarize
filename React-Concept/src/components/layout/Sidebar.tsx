/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                             SIDEBAR COMPONENT                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Navigation sidebar with concept categories and links                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { concepts, categories } from '../../data'
import { useUIStore } from '../../store'

export function Sidebar() {
  const location = useLocation()
  const { sidebarOpen, setSidebarOpen } = useUIStore()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // บน Desktop แสดง sidebar ตลอด, บน Mobile ใช้ toggle
  const showSidebar = isDesktop || sidebarOpen

  // Group concepts by category
  const groupedConcepts = categories.map(category => ({
    ...category,
    items: concepts.filter(c => c.category === category.id)
  }))

  return (
    <>
      {/* Overlay for mobile only */}
      {!isDesktop && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-72
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-700
          transition-transform duration-300 ease-in-out
          overflow-y-auto
          ${isDesktop ? 'z-30' : 'z-40'}
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ scrollbarWidth: 'thin' }}
      >
        <nav className="p-4 space-y-6">
          {groupedConcepts.map(category => (
            <div key={category.id}>
              <h3 className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <span>{category.icon}</span>
                <span>{category.nameTh}</span>
              </h3>
              
              <ul className="mt-1 space-y-1">
                {category.items.map(concept => {
                  const isActive = location.pathname === `/concepts/${concept.slug}`
                  
                  return (
                    <li key={concept.id}>
                      <Link
                        to={`/concepts/${concept.slug}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                          transition-colors
                          ${isActive
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                          }
                        `}
                      >
                        <span className="text-base">{concept.icon}</span>
                        <span>{concept.title}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
