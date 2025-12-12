/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                              MAIN LAYOUT                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Main application layout with header, sidebar, and footer                     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { Outlet } from 'react-router-dom'
import { Header, Sidebar, Footer } from '../components'

export function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 min-h-[calc(100vh-4rem)]">
          <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}
