"use client";

import { useState } from 'react'
import { DndProvider } from 'react-dnd'

import Canvas from '@/components/canvas/canvas'
import Header from '@/components/header/header'
import SideBar from '@/components/sidebar/sidebar'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CodeEditor from '@/components/code_editor/codeEditor'

interface DroppedItem {
  subTab: {
    title: string
    icon?: any
    subList: any[]
  }
  position: { x: number; y: number }
}

const Home = () => {
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

export default Home
