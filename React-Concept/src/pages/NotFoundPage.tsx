/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                            NOT FOUND PAGE                                     ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { Link } from 'react-router-dom'
import { Button } from '../components'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-8xl mb-4">🔍</div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        ไม่พบหน้าที่คุณต้องการ
      </p>
      <Link to="/">
        <Button variant="primary" size="lg">
          🏠 กลับหน้าแรก
        </Button>
      </Link>
    </div>
  )
}
