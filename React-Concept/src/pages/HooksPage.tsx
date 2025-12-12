/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                             HOOKS PAGE                                        ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  All React Hooks with explanations and examples                               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { Card, Badge, CodeBlock } from '../components'
import { hooksInfo } from '../data'

export function HooksPage() {
  const basicHooks = hooksInfo.filter(h => h.category === 'basic')
  const additionalHooks = hooksInfo.filter(h => h.category === 'additional')

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          🪝 React Hooks ทั้งหมด
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          รวม Hooks ที่สำคัญพร้อม syntax และตัวอย่างการใช้งาน
        </p>
      </div>

      {/* Basic Hooks */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Badge variant="success">Basic</Badge>
          Hooks พื้นฐาน
        </h2>
        <div className="space-y-6">
          {basicHooks.map(hook => (
            <HookCard key={hook.name} hook={hook} />
          ))}
        </div>
      </section>

      {/* Additional Hooks */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <Badge variant="warning">Additional</Badge>
          Hooks เพิ่มเติม
        </h2>
        <div className="space-y-6">
          {additionalHooks.map(hook => (
            <HookCard key={hook.name} hook={hook} />
          ))}
        </div>
      </section>

      {/* Hook Rules */}
      <section className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
        <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
          ⚠️ กฎการใช้ Hooks (Rules of Hooks)
        </h2>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-yellow-600">1.</span>
            <div>
              <strong className="text-gray-900 dark:text-white">เรียกใช้ที่ top level เท่านั้น</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">ห้ามเรียกใช้ใน loops, conditions, หรือ nested functions</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600">2.</span>
            <div>
              <strong className="text-gray-900 dark:text-white">เรียกใช้ใน React Functions เท่านั้น</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">เรียกใช้ใน Function Components หรือ Custom Hooks เท่านั้น</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600">3.</span>
            <div>
              <strong className="text-gray-900 dark:text-white">Custom Hooks ต้องขึ้นต้นด้วย "use"</strong>
              <p className="text-sm text-gray-600 dark:text-gray-300">เช่น useToggle, useFetch, useLocalStorage</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  )
}

// Hook Card Component
function HookCard({ hook }: { hook: typeof hooksInfo[0] }) {
  return (
    <Card>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <code className="text-xl font-bold text-blue-600 dark:text-blue-400 font-mono">
              {hook.name}
            </code>
            <Badge variant={hook.category === 'basic' ? 'success' : 'warning'}>
              {hook.category}
            </Badge>
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-gray-600 dark:text-gray-300">{hook.descriptionTh}</p>
        </div>

        {/* Syntax */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-2">📝 Syntax</h4>
          <code className="block bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg text-sm font-mono">
            {hook.syntax}
          </code>
        </div>

        {/* Example */}
        <div>
          <h4 className="text-sm font-semibold text-gray-500 mb-2">💻 ตัวอย่าง</h4>
          <CodeBlock 
            code={hook.example} 
            language="tsx" 
            title={`${hook.name} example`}
          />
        </div>

        {/* Tips */}
        {hook.tips && hook.tips.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">
              💡 Tips
            </h4>
            <ul className="space-y-1">
              {hook.tips.map((tip, index) => (
                <li key={index} className="text-sm text-blue-600 dark:text-blue-300 flex items-start gap-2">
                  <span>•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  )
}
