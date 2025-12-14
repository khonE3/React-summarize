/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                              MAIN LAYOUT                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Main application layout with header, sidebar, and footer                     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { Outlet } from 'react-router-dom'
import { Header, Sidebar, Footer } from '../components'
import { useUIStore } from '../store'
import { useEffect, useState } from 'react'

export function MainLayout() {
  const { sidebarOpen } = useUIStore()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <Header />
      
      <div className="flex relative">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content - Desktop และ sidebar เปิดจึงมี margin */}
        <main 
          className="flex-1 min-h-[calc(100vh-4rem)] w-full transition-all duration-300 overflow-x-hidden"
          style={{ marginLeft: isDesktop && sidebarOpen ? '18rem' : '0' }}
        >
          <div className="w-full max-w-none px-3 py-4 sm:px-6 sm:py-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}
