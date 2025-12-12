/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                           APP - ROOT COMPONENT                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  App.tsx - Component หลักที่รวม Routes และ Providers ทั้งหมด                    ║
 * ║                                                                              ║
 * ║  โครงสร้าง:                                                                   ║
 * ║  App                                                                         ║
 * ║  └── AppRoutes                                                               ║
 * ║      └── MainLayout                                                          ║
 * ║          ├── Header                                                          ║
 * ║          ├── Sidebar                                                         ║
 * ║          ├── Main Content (Outlet)                                           ║
 * ║          └── Footer                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect } from 'react'
import { AppRoutes } from './routes'
import { useThemeStore } from './store'
import './App.css'

function App() {
  const { setTheme, theme } = useThemeStore()

  // Initialize theme on mount
  useEffect(() => {
    setTheme(theme)
  }, [])

  return <AppRoutes />
}

export default App
