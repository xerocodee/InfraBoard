'use client'
import Canvas from '@/components/canvas/canvas'
import Header from '@/components/header/header'
import SideBar from '@/components/sidebar/sidebar'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
export default function Home() {
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <SideBar />
        <Canvas />
      </DndProvider>
    </main>
  )
}
