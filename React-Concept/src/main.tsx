/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                         REACT CONCEPT - MAIN ENTRY                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  main.tsx - จุดเริ่มต้นของแอพพลิเคชัน React                                     ║
 * ║                                                                              ║
 * ║  หน้าที่:                                                                     ║
 * ║  1. Import React และ ReactDOM                                                ║
 * ║  2. Import Component หลัก (App)                                              ║
 * ║  3. Import CSS หลัก                                                          ║
 * ║  4. Render App ลงใน DOM element ที่มี id="root"                              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

/**
 * StrictMode - โหมดตรวจสอบความถูกต้อง
 * - ช่วยตรวจจับปัญหาที่อาจเกิดขึ้น
 * - จะ render component 2 ครั้งใน development เพื่อตรวจสอบ side effects
 * - ไม่มีผลกับ production build
 */

/**
 * BrowserRouter - Router หลักสำหรับ client-side routing
 * - ใช้ HTML5 History API
 * - ทำให้เปลี่ยนหน้าได้โดยไม่ refresh page
 */

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
