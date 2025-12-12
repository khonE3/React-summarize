/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                              THEME STORE                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Zustand store สำหรับจัดการ Theme (Dark/Light mode)                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ThemeStore, Theme } from '../types'

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'system',
      actualTheme: 'light',
      
      setTheme: (theme: Theme) => {
        const actualTheme = theme === 'system'
          ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
          : theme
        
        set({ theme, actualTheme })
        
        // Update document class
        if (actualTheme === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      },
      
      toggleTheme: () => {
        const current = get().actualTheme
        const newTheme = current === 'light' ? 'dark' : 'light'
        get().setTheme(newTheme)
      }
    }),
    {
      name: 'theme-storage',
      onRehydrateStorage: () => (state) => {
        // Apply theme on rehydrate
        if (state) {
          state.setTheme(state.theme)
        }
      }
    }
  )
)
