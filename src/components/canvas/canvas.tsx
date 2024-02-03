'use client'

import React, { useState } from 'react'
import Drag from '../drag'
import { useDrop } from 'react-dnd'
const Canvas = () => {
  const [_scale, _setScale] = useState(1)
  const [_left, _setLeft] = useState(0)
  const [_top, _setTop] = useState(0)
  const [_initX, _setInitX] = useState(0)
  const [_initY, _setInitY] = useState(0)
  const [showBackgroundImage, setShowBackgroundImage] = useState(true)
  const [backgroundSizeX, setBackgroundSizeX] = useState('16px')
  const [backgroundSizeY, setBackgroundSizeY] = useState('16px')

  const handleZoomIn = () => {
    const newBackgroundSizeX = parseInt(backgroundSizeX) + 2 + 'px'
    const newBackgroundSizeY = parseInt(backgroundSizeY) + 2 + 'px'

    setBackgroundSizeX(newBackgroundSizeX)
    setBackgroundSizeY(newBackgroundSizeY)

    setShowBackgroundImage((prev: any) => ({
      ...prev,
      backgroundSize: `${newBackgroundSizeX} ${newBackgroundSizeY}`,
    }))
  }

  const handleZoomOut = () => {
    const newBackgroundSizeX = parseInt(backgroundSizeX) - 2 + 'px'
    const newBackgroundSizeY = parseInt(backgroundSizeY) - 2 + 'px'

    setBackgroundSizeX(newBackgroundSizeX)
    setBackgroundSizeY(newBackgroundSizeY)

    setShowBackgroundImage((prev: any) => ({
      ...prev,
      backgroundSize: `${newBackgroundSizeX} ${newBackgroundSizeY}`,
    }))
  }

  const handleFitContent = () => {
    setBackgroundSizeX('16px')
    setBackgroundSizeY('16px')

    setShowBackgroundImage((prev: any) => ({
      ...prev,
      backgroundSize: '16px 16px',
    }))
  }

  const [droppedItems, setDroppedItems] = useState<DroppedItem[]>([])
  interface DroppedItem {
    subTab: {
      title: string
      icon?: any
      subList: any[]
    }
    position: { x: number; y: number }
  }
  const [, drop] = useDrop({
    accept: 'SUBTAB',
    drop: (item, monitor) => {
      if (!monitor) {
        return
      }

      const clientOffset = monitor.getClientOffset()
      console.log(clientOffset)

      if (!clientOffset) {
        return
      }

      const newItem: DroppedItem = {
        subTab: (item as any).subTab,
        position: {
          x: clientOffset.x,
          y: clientOffset.y,
        },
      }

      setDroppedItems((prevItems) => [...prevItems, newItem])
    },
  })

  return (
    <div
      className="jsplumb-box"
      style={{
        backgroundImage:
          'linear-gradient(to right, #80808014 1px, transparent 1px), linear-gradient(to bottom, #80808014 1px, transparent 1px)',
      }}
    >
      <Drag
        setShowBackgroundImage={setShowBackgroundImage}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
        handleFitContent={handleFitContent}
      />
      <div ref={drop} className="h-[50vh] w-[100vw] -z-1">
        {droppedItems.map((droppedItem, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: droppedItem.position.y,
              left: droppedItem.position.x,
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: '#fff',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <h3>{droppedItem.subTab.title}</h3>
            {/* Render the subList items */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Canvas
