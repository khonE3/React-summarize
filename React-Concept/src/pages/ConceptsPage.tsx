/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                            CONCEPTS PAGE                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  All React concepts list with category filter                                 ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Card, Badge, Button } from '../components'
import { concepts, categories } from '../data'
import type { ConceptCategory } from '../types'

export function ConceptsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  
  const categoryFilter = searchParams.get('category') as ConceptCategory | null

  const filteredConcepts = concepts.filter(concept => {
    const matchesCategory = !categoryFilter || concept.category === categoryFilter
    const matchesSearch = !search || 
      concept.title.toLowerCase().includes(search.toLowerCase()) ||
      concept.titleTh.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          📚 React Concepts ทั้งหมด
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          รวม {concepts.length} concepts พร้อมคำอธิบายและตัวอย่างโค้ด
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="🔍 ค้นหา concept..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
        />
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={!categoryFilter ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setSearchParams({})}
          >
            ทั้งหมด
          </Button>
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant={categoryFilter === cat.id ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => setSearchParams({ category: cat.id })}
            >
              {cat.icon} {cat.nameTh}
            </Button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500">
        แสดง {filteredConcepts.length} จาก {concepts.length} concepts
      </p>

      {/* Concepts Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {filteredConcepts.map(concept => (
          <Link key={concept.id} to={`/concepts/${concept.slug}`}>
            <Card hoverable className="h-full">
              <div className="flex items-start gap-4">
                <span className="text-3xl">{concept.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {concept.title}
                    </h3>
                    <Badge variant="primary" size="sm">
                      {categories.find(c => c.id === concept.category)?.nameTh}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {concept.titleTh}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {concept.description}
                  </p>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredConcepts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-gray-500">ไม่พบ concept ที่ค้นหา</p>
          <Button 
            variant="ghost" 
            className="mt-4"
            onClick={() => {
              setSearch('')
              setSearchParams({})
            }}
          >
            ล้างตัวกรอง
          </Button>
        </div>
      )}
    </div>
  )
}
