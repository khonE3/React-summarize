/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                                UI STORE                                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Zustand store สำหรับจัดการ UI state (sidebar, modal, etc.)                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { create } from 'zustand'
import type { UIStore } from '../types'

export const useUIStore = create<UIStore>((set) => ({
  sidebarOpen: true,
  activeConcept: null,
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setActiveConcept: (id) => set({ activeConcept: id }),
}))
