/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                             FOOTER COMPONENT                                  ║
 * ╠══════════════════════════════════════════════════════════════════════════════╝
 */

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚛️</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              React Concept
            </span>
          </div>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            สรุป React ครบทุก Concept พร้อมตัวอย่างโค้ด
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>Made with ❤️ and React</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
