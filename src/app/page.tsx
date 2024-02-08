'use client'
import Canvas from '@/components/canvas/canvas'
import Header from '@/components/header/header'
import SideBar from '@/components/sidebar/sidebar'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import CodeEditor from '@/components/code_editor/codeEditor'
import { useState } from 'react'

interface DroppedItem {
  subTab: {
    title: string
    icon?: any
    subList: any[]
  }
  position: { x: number; y: number }
}

export default function Home() {
  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([])

  const handleItemDrop = (newItem: DroppedItem) => {
    setDroppedItems((prevItems) => [...prevItems, newItem])
  }
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Header />
        <SideBar />
        <Canvas onItemDrop={handleItemDrop} droppedItems={droppedItems} />
        <CodeEditor droppedItems={droppedItems} />
      </DndProvider>
    </main>
  )
}
