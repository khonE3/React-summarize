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

  // แสดง sidebar เมื่อ: Desktop และ sidebarOpen เป็น true, หรือ Mobile และ sidebarOpen เป็น true
  const showSidebar = sidebarOpen

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
          className="fixed inset-0 bg-black/50 z-[45]"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 w-56 sm:w-64 md:w-72
          bg-white/98 dark:bg-gray-900/98 backdrop-blur-md
          border-r border-gray-200 dark:border-gray-700
          transition-transform duration-300 ease-in-out
          overflow-y-auto shadow-lg
          top-12 sm:top-14 md:top-16 h-[calc(100vh-3rem)] sm:h-[calc(100vh-3.5rem)] md:h-[calc(100vh-4rem)]
          ${isDesktop ? 'z-30' : 'z-[50]'}
          ${showSidebar ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ scrollbarWidth: 'thin' }}
      >
        <nav className="p-2 sm:p-3 md:p-4 space-y-2 sm:space-y-3 md:space-y-4">
          {/* Header */}
          <Link to="/" className="flex items-center gap-2 px-2 sm:px-3 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700 mb-2 sm:mb-3">
            <span className="text-2xl sm:text-3xl">⚛️</span>
            <span className="font-bold text-base sm:text-lg md:text-xl text-gray-900 dark:text-white">
              React Concept
            </span>
          </Link>
          
          {groupedConcepts.map(category => (
            <div key={category.id}>
              <h3 className="flex items-center gap-1 sm:gap-1.5 md:gap-2 px-1.5 sm:px-2 md:px-3 py-1 sm:py-1.5 md:py-2 text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                <span className="text-xs sm:text-sm md:text-base">{category.icon}</span>
                <span>{category.nameTh}</span>
              </h3>
              
              <ul className="mt-0.5 sm:mt-1 space-y-0.5 sm:space-y-1">
                {category.items.map(concept => {
                  const isActive = location.pathname === `/concepts/${concept.slug}`
                  
                  return (
                    <li key={concept.id}>
                      <Link
                        to={`/concepts/${concept.slug}`}
                        onClick={() => setSidebarOpen(false)}
                        className={`
                          flex items-center gap-1.5 sm:gap-2 md:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs md:text-sm
                          transition-colors
                          ${isActive
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 font-medium'
                            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                          }
                        `}
                      >
                        <span className="text-xs sm:text-sm md:text-base flex-shrink-0">{concept.icon}</span>
                        <span className="truncate text-[10px] sm:text-xs md:text-sm">{concept.title}</span>
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
