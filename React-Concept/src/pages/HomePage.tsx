/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                               HOME PAGE                                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Landing page with React concepts overview                                    ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { Link } from 'react-router-dom'
import { Card, Button, Badge } from '../components'
import { concepts, categories, hooksInfo } from '../data'

export function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12">
        <div className="text-6xl mb-4">⚛️</div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          React Concept
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
          สรุปความรู้ React ทั้งหมดแบบครบถ้วน พร้อมตัวอย่างโค้ดที่ใช้งานได้จริง
          <br />
          ตั้งแต่พื้นฐานจนถึงขั้นสูง
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/concepts/jsx">
            <Button variant="primary" size="lg">
              🚀 เริ่มเรียนรู้
            </Button>
          </Link>
          <Link to="/concepts">
            <Button variant="outline" size="lg">
              📚 ดู Concepts ทั้งหมด
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <div className="text-3xl font-bold text-blue-600">{concepts.length}</div>
          <div className="text-sm text-gray-500">Concepts</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-green-600">{hooksInfo.length}</div>
          <div className="text-sm text-gray-500">Hooks</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-purple-600">{categories.length}</div>
          <div className="text-sm text-gray-500">Categories</div>
        </Card>
        <Card className="text-center">
          <div className="text-3xl font-bold text-orange-600">100%</div>
          <div className="text-sm text-gray-500">Free</div>
        </Card>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          📂 หมวดหมู่ทั้งหมด
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(category => {
            const count = concepts.filter(c => c.category === category.id).length
            return (
              <Link key={category.id} to={`/concepts?category=${category.id}`}>
                <Card hoverable className="h-full">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {category.nameTh}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {count} concepts
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured Concepts */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          ⭐ Concepts ยอดนิยม
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {concepts.slice(0, 6).map(concept => (
            <Link key={concept.id} to={`/concepts/${concept.slug}`}>
              <Card hoverable className="h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{concept.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {concept.title}
                      </h3>
                      <Badge variant="primary">{concept.category}</Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {concept.titleTh}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {concept.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Hooks Overview */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          🪝 React Hooks ที่ควรรู้
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hooksInfo.slice(0, 6).map(hook => (
            <Link key={hook.name} to={`/concepts/${hook.name.toLowerCase()}`}>
              <Card hoverable className="h-full">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-blue-600 dark:text-blue-400 font-mono font-semibold">
                    {hook.name}
                  </code>
                  <Badge variant={hook.category === 'basic' ? 'success' : 'warning'}>
                    {hook.category}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {hook.descriptionTh}
                </p>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/hooks">
            <Button variant="outline">
              ดู Hooks ทั้งหมด →
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Start */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          🚀 เริ่มต้นเรียน React
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">JSX & Components</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">เรียนรู้พื้นฐาน JSX และการสร้าง Components</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Props & State</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">เข้าใจการส่งข้อมูลและจัดการ State</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Hooks & Effects</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">ใช้งาน Hooks และจัดการ Side Effects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
