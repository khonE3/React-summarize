/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                              ROUTES CONFIG                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Application routing configuration using React Router                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { Routes, Route } from 'react-router-dom'
import { MainLayout } from '../layouts'
import { 
  HomePage, 
  ConceptsPage, 
  ConceptDetailPage, 
  HooksPage,
  NotFoundPage 
} from '../pages'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/concepts" element={<ConceptsPage />} />
        <Route path="/concepts/:slug" element={<ConceptDetailPage />} />
        <Route path="/hooks" element={<HooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
