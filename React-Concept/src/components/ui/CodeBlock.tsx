/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                             CODE BLOCK COMPONENT                              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Syntax highlighted code block with copy functionality                        ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { useState } from 'react'
import { Highlight, themes } from 'prism-react-renderer'
import type { CodeBlockProps } from '../../types'
import { useThemeStore } from '../../store'

export function CodeBlock({
  code,
  language = 'tsx',
  showLineNumbers = true,
  title,
  copyable = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const { actualTheme } = useThemeStore()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const theme = actualTheme === 'dark' ? themes.nightOwl : themes.nightOwlLight

  return (
    <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 max-w-full">
      {/* Header */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1.5 flex-shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          {title && (
            <span className="ml-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400 truncate">
              {title}
            </span>
          )}
        </div>
        
        {copyable && (
          <button
            onClick={handleCopy}
            className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex-shrink-0"
          >
            {copied ? '✓' : '📋'}
            <span className="hidden sm:inline ml-1">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        )}
      </div>

      {/* Code */}
      <Highlight theme={theme} code={code.trim()} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm`}
            style={{ ...style, margin: 0 }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {showLineNumbers && (
                  <span className="inline-block w-6 sm:w-8 text-gray-400 select-none text-right mr-2 sm:mr-4 text-xs">
                    {i + 1}
                  </span>
                )}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
