/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                             FOOTER COMPONENT                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╝
 */

import { useEffect, useState } from 'react'

export function Footer() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  return (
    <footer 
      className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-all duration-300"
      style={{ marginLeft: isDesktop ? '18rem' : '0' }}
    >
      <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">⚛️</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              React Concept
            </span>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            สรุป React ครบทุก Concept พร้อมตัวอย่างโค้ด
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Made with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
