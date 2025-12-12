/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                                CARD COMPONENT                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Reusable Card component for content containers                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import type { CardProps } from '../../types'

export function Card({
  title,
  description,
  children,
  footer,
  className = '',
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800
        rounded-xl shadow-sm
        border border-gray-200 dark:border-gray-700
        overflow-hidden
        ${hoverable ? 'hover:shadow-md hover:border-blue-300 dark:hover:border-blue-600 transition-all cursor-pointer' : ''}
        ${className}
      `}
    >
      {(title || description) && (
        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 dark:border-gray-700">
          {title && (
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      )}
      
      <div className="px-4 sm:px-6 py-3 sm:py-4">
        {children}
      </div>
      
      {footer && (
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
          {footer}
        </div>
      )}
    </div>
  )
}
